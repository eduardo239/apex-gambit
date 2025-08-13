import Card from "./Card";

export default function Deck() {
    return <div className="flex">
        <Card value={1} type="fire" />
        <Card value={1} type="fire" />
        <Card value={1} type="fire" />
        <Card value={1} type="fire" />

    </div>;
}
