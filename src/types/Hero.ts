import type { TItem } from "./Item";

export type THero = {
  name: string;
  health: number;
  attack: number;
  defense: number;
  gold: number;
  items: TItem[];
};
