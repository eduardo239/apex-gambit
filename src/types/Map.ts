export type TMap = {
    name: string;
    positions: string[];
    level: number;
    dice: number;
    actualPosition: number;
    throwDice(): number;
    generatePlaces(numPlaces: number): string[];
}