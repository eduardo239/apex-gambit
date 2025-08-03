type TButton = {
  label: string;
};

export default function Button({ label }: TButton) {
  return <button>{label}</button>;
}
