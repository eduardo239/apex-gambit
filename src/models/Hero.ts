import  Character  from './Character';

type Item = any; // Replace 'any' with a more specific type/interface if available

export default class Hero extends Character {
    gold: number;
    items: Item[];

    constructor(
        name: string,
        health: number = 100,
        attack: number = 10,
        defense: number = 5,
        gold: number = 100,
        items: Item[] = []
    ) {
        super(name, health, attack, defense);
        this.gold = gold;
        this.items = items;
    }
}
