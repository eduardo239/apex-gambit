import type { THero } from "./Hero";
import type { TItem } from "./Item";
import type { TMap } from "./Map";

export type TGame = {
    name: string;
    hero: THero ;
    map: TMap ;
    items: TItem[];


}