import Character from "./Character";

export class Enemy extends Character {
    constructor(
        name: string,
        health: number = 100,
        attack: number = 10,
        defense: number = 5
    ) {
        super(name, health, attack, defense);
    }

}