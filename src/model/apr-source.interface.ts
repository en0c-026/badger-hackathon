import { AprPerformance } from "./apr-performance.interface";

export interface AprSource {
  name: string;
  apr: number;
  boostable: boolean;
  harvestable: boolean;
  performance: AprPerformance;
  minApr: number;
  maxApr: number;
}