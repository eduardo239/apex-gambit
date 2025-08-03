type TInput = {
  label: string;
  type: string;
};

export default function Input({ label, type }: TInput) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={label} />
    </div>
  );
}
