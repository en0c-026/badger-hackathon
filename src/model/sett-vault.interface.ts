import { TokenBalance } from './token-balance.interface';
import { AprSource } from './apr-source.interface';

export interface SettVault {
  name: string;
  asset: string;
  state: string;
  underlyingToken: string;
  vaultToken: string;
  value: number;
  balance: number;
  ppfs: number;
  tokens: TokenBalance[];
  apr: number;
  boostable: boolean;
  minApr?: number;
  maxApr?: number;
  sources: AprSource[];
  hasBouncer: boolean;
  experimental: false;
}