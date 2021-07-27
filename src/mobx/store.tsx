import { computed, makeAutoObservable } from 'mobx';
import { RouterStore } from 'mobx-router';
import fetch from 'node-fetch';
import { Account } from '../model/account.interface';
import { SettVault } from '../model/sett-vault.interface';
import { StrategyInfo } from '../model/strategy-info.interface';

export class RootStore {
  private baseUrl = 'https://staging-api.badger.finance/v2';
  public router: RouterStore<RootStore>;
  public account?: Account;
  public setts?: SettVault[];
  public prices?: Record<string, number>;
  public loading: boolean;
  public networkError: boolean;

  constructor() {
    this.router = new RouterStore<RootStore>(this);
    this.loading = true;
    this.networkError = false;
    makeAutoObservable(this);

    this.fetchData('0x4e65175f05b4140a0747c29cce997cd4bb7190d4');
  }

  fetchData = async (address: string): Promise<void> => {
    try {
      console.log('Fetching account data for: ' + address);
      const resAccount = await fetch(`${this.baseUrl}/accounts/${address}`);
      const resSetts = await fetch(`${this.baseUrl}/setts/`);
      const resPrices = await fetch(`${this.baseUrl}/prices/`);

      if (resAccount.ok && resPrices.ok) {
        const _account = await resAccount.json();
        const _setts = await resSetts.json();
        const _prices = await resPrices.json();

        this.setData(_account, _setts, _prices);
      }
    } catch (error) {
      this.setError(error);
    }
  };

  setData = (_account: Account, _setts: SettVault[], _prices: Record<string, number>): void => {
    this.account = _account;
    this.setts = _setts;
    this.prices = _prices;
    this.loading = false;
  };

  setError = (error: Error): void => {
    this.loading = false;
    this.networkError = true;
    console.error(error);
  };

  priceInBtc = (value: number): number => {
    if (!this.prices) return 0;
    return value / this.prices['0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'];
  };

  fetchVault = (id: string): SettVault => {
    const vaultApr = this.setts?.find((sett) => sett.vaultToken === id);
    return vaultApr as SettVault;
  };
  myBoost = (id: string): number => {
    const vault = computed(() => this.fetchVault(id)).get();
    const isBoosteable = vault.boostable;
    if (isBoosteable) {
      return vault.sources.reduce((acc, cur) => (cur.boostable ? acc + (cur.apr + this.multiplier) : acc + cur.apr), 0);
    } else {
      return vault.apr;
    }
  };
  rangeRoi = (id: string): string => {
    const vault = computed(() => this.fetchVault(id)).get();
    if (vault.minApr && vault.maxApr) {
      return `${vault.minApr.toFixed(2)}-${vault.maxApr.toFixed(2)}`;
    } else {
      return vault.apr.toFixed(2);
    }
  };
  get earnedValuePercent(): number {
    if (!this.account) {
      return 0;
    }
    return (this.account.earnedValue / this.account.value) * 100;
  }

  get earnedBadgerValue(): number {
    if (!this.account) {
      return 0;
    }
    return this.account.balances.filter((balance) => balance.asset === 'BADGER')[0].earnedValue;
  }

  get claimableTotal(): number {
    if (!this.account) {
      return 0;
    }
    return this.account.claimableBalances.reduce((acc, cur) => acc + cur.balance, 0);
  }

  get claimable(): boolean {
    if (!this.account) {
      return false;
    }
    return this.account.claimableBalances.length > 0;
  }

  get multiplier(): number {
    if (!this.account) return 0;
    return this.account.boost;
  }
  get totalValueSetts(): number {
    if (!this.account) {
      return 0;
    }
    return this.account.balances.reduce((acc, cur) => acc + cur.value, 0);
  }
  get StrategyInfo(): StrategyInfo[] {
    if (!this.account || !this.account.balances) {
      return [];
    }
    const total = this.account.balances.reduce((acc, cur) => acc + cur.value, 0);
    return this.account.balances
      .filter((item) => item.value > 0)
      .map((item) => {
        return {
          name: item.asset,
          balance: item.balance,
          allocation: (item.value / total) * 100,
          value: item.value,
          valueInBtc: computed(() => this.priceInBtc(item.value / item.balance)).get(),
          vault: computed(() => this.fetchVault(item.id)).get(),
          myBoost: computed(() => this.myBoost(item.id)).get(),
          yearlyRoi: computed(() => this.rangeRoi(item.id)).get(),
          settBalance: item,
        };
      })
      .sort((a, b) => b.allocation - a.allocation);
  }
  // get AssetInfo(): Array<any> {
  //   if (!this.account || !this.account.balances) {
  //     return [];
  //   }
  //   const total = this.account.assetHoldings.reduce((acc, cur) => acc + cur.value, 0);
  //   return this.account.assetHoldings
  //     .filter((item) => item.value > 0)
  //     .map((item) => {
  //       return {
  //         name: item.asset,
  //         allocation: (item.value / total) * 100,
  //       };
  //     })
  //     .sort((a, b) => b.allocation - a.allocation);
  // }
}
const store = new RootStore();

export default store;
