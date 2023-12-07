import { AnyLayer } from "mapbox-gl";

export interface Layers {
  [key: string]: AnyLayer;
}

export interface Color {
  [key: string]: string;
}

export interface UsageKey {
    name: string; calls: number 
}
export interface UsageInterface {
  [key: string]: UsageKey
}
