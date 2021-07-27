import { SettBalance } from './sett-balance.interface';
import { SettVault } from './sett-vault.interface';

export interface StrategyInfo {
  name: string;
  balance: number;
  allocation: number;
  value: number;
  valueInBtc: number;
  vault: SettVault;
  settBalance: SettBalance;
}