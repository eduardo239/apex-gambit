export default class Character {
    name: string;
    health: number;
    attack: number;
    defense: number;
    constructor(name: string, health: number = 100, attack: number = 10, defense: number = 5) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
}