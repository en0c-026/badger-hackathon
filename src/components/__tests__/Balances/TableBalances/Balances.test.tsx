import React from 'react'
import { getByText, render } from '@testing-library/react';
import Balances, { BalancesProps } from '../../../Balances';
import { StrategyInfo } from '../../../../model/strategy-info.interface';

const strategyInfo: StrategyInfo[] = [
  {
    "name": "crvTricrypto",
    "balance": 279.24381803349746,
    "allocation": 65.78807555903867,
    "value": 380178.25357027503,
    "valueInBtc": 0.03415509630500259,
    "vault": {
      "name": "Convex Tricrypto",
      "asset": "crvTricrypto",
      "state": "open",
      "underlyingToken": "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF",
      "vaultToken": "0xBE08Ef12e4a553666291E9fFC24fCCFd354F2Dd2",
      "value": 14408563.266591983,
      "balance": 11531.55140462002,
      "ppfs": 1.0019016074196303,
      "tokens": [
        {
          "value": 4881895.858533405,
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "name": "Tether",
          "symbol": "USDT",
          "decimals": 6,
          "balance": 4881895.858533405
        },
        {
          "value": 4732740.554500729,
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "name": "Wrapped Bitcoin",
          "symbol": "WBTC",
          "decimals": 8,
          "balance": 118.4932914674327
        },
        {
          "value": 4793926.853557849,
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "name": "Wrapped Ethereum",
          "symbol": "WETH",
          "decimals": 18,
          "balance": 2087.4562836083196
        }
      ],
      "apr": 29.56712175502372,
      "boostable": true,
      "minApr": 18.674152468300537,
      "maxApr": 38.027708292902346,
      "sources": [
        {
          "name": "Badger Rewards",
          "apr": 20.570234494627123,
          "boostable": true,
          "harvestable": false,
          "performance": {
            "oneDay": 20.570234494627123,
            "threeDay": 20.570234494627123,
            "sevenDay": 20.570234494627123,
            "thirtyDay": 20.570234494627123
          },
          "minApr": 9.677265207903938,
          "maxApr": 29.03082103250575
        },
        {
          "name": "bCVX Rewards",
          "apr": 1.8677109664600644,
          "boostable": false,
          "harvestable": false,
          "performance": {
            "oneDay": 1.8677109664600644,
            "threeDay": 1.8677109664600644,
            "sevenDay": 1.8677109664600644,
            "thirtyDay": 1.8677109664600644
          },
          "minApr": 1.8677109664600644,
          "maxApr": 1.8677109664600644
        },
        {
          "name": "Curve LP Fees",
          "apr": 2.7310113880844256,
          "boostable": false,
          "harvestable": false,
          "performance": {
            "oneDay": 2.4881475118057272,
            "threeDay": 2.4881475118057272,
            "sevenDay": 2.69312248038569,
            "thirtyDay": 2.7310113880844256
          },
          "minApr": 2.7310113880844256,
          "maxApr": 2.7310113880844256
        },
        {
          "name": "bcvxCRV Rewards",
          "apr": 2.0686095369765067,
          "boostable": false,
          "harvestable": false,
          "performance": {
            "oneDay": 2.0686095369765067,
            "threeDay": 2.0686095369765067,
            "sevenDay": 2.0686095369765067,
            "thirtyDay": 2.0686095369765067
          },
          "minApr": 2.0686095369765067,
          "maxApr": 2.0686095369765067
        },
        {
          "name": "Vault Compounding",
          "apr": 2.329555368875602,
          "boostable": false,
          "harvestable": false,
          "performance": {
            "oneDay": 0,
            "threeDay": 1.8407693300415848,
            "sevenDay": 2.443640105711733,
            "thirtyDay": 2.329555368875602
          },
          "minApr": 2.329555368875602,
          "maxApr": 2.329555368875602
        }
      ],
      "hasBouncer": false,
      "experimental": false
    },
    "myBoost": 32.23025301694427,
    "yearlyRoi": "18.67-38.03",
    "settBalance": {
      "id": "0xBE08Ef12e4a553666291E9fFC24fCCFd354F2Dd2",
      "name": "Convex Tricrypto",
      "asset": "crvTricrypto",
      "ppfs": 1.0019016074196303,
      "balance": 279.24381803349746,
      "value": 380178.25357027503,
      "tokens": [
        {
          "value": 4881895.858533405,
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "name": "Tether",
          "symbol": "USDT",
          "decimals": 6,
          "balance": 4881895.858533405
        },
        {
          "value": 4732740.554500729,
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "name": "Wrapped Bitcoin",
          "symbol": "WBTC",
          "decimals": 8,
          "balance": 118.4932914674327
        },
        {
          "value": 4793926.853557849,
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "name": "Wrapped Ethereum",
          "symbol": "WETH",
          "decimals": 18,
          "balance": 2087.4562836083196
        }
      ],
      "earnedBalance": 0.393281426909482,
      "earnedValue": 535.4354739059502,
      "earnedTokens": [
        {
          "value": 4881895.858533405,
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "name": "Tether",
          "symbol": "USDT",
          "decimals": 6,
          "balance": 4881895.858533405
        },
        {
          "value": 4732740.554500729,
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "name": "Wrapped Bitcoin",
          "symbol": "WBTC",
          "decimals": 8,
          "balance": 118.4932914674327
        },
        {
          "value": 4793926.853557849,
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "name": "Wrapped Ethereum",
          "symbol": "WETH",
          "decimals": 18,
          "balance": 2087.4562836083196
        }
      ],
      "depositedBalance": 278.850536606588,
      "withdrawnBalance": 0
    }
  },
];

test('test that Balances component is rendered', () => {
  const props: BalancesProps = {
    totalValueSetts: 445400.774852,
    strategyInfo: strategyInfo,
  };
  const { getByTestId } = render(<Balances {...props} />);
  expect(getByTestId('balances-section')).toBeInTheDocument();
});