type TCard = {
  value: number;
  type: string;
};

export default function Card({ value, type }: TCard) {
  return (
    <div className="card">
      <img src="https://picsum.photos/200/200" alt="" />
      <p>item value: {value}</p>
      <p>item type: {type}</p>
    </div>
  );
}
