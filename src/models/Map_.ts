import {TYPE, TYPE_END, TYPE_START} from "../types/positions"

export default class Map_ {
    name: string;
    positions: string[];
    level: number;
    dice: number;
    actualPosition: number;

    constructor(name: string, positions: number = 14, level: number = 1) {
        this.name = name;
        this.positions = this.generatePlaces(positions || 10);
        this.level = level;
        this.dice = 0;
        this.actualPosition = 0;
    }

    generatePlaces(numPlaces: number): string[] {
        const list = [];
        for (let i = 0; i < numPlaces; i++) {
            // Randomly select a type from TYPE
            const randomType = Object.values(TYPE)[Math.floor(Math.random() * Object.keys(TYPE).length)];
            // Add the type to the list
            list.push(randomType);
        }
        // Ensure the first position is always 'start' and the last is 'end'
        list[0] = TYPE_START;
        list[list.length - 1] = TYPE_END;
        return list;
    }

    throwDice(): number {
        this.dice = Math.floor(Math.random() * 6) + 1;
        return this.dice;
    }
}

