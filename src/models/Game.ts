import type { THero } from "../types/Hero";
import type { TItem } from "../types/Item";
import type { TMap } from "../types/Map";

export class Game {

        name: string;
        hero: THero ;
        map: TMap ;
        items: TItem[];
        dice: number;

    constructor(name: string, hero: THero, map: TMap, items: TItem[] = []) {
        this.name = name;
        this.hero = hero;
        this.map = map;
        this.items = items;
        this.dice = 0;
    }
}