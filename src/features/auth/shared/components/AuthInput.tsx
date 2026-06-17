type AuthInputProps = {
  type: "text" | "email" | "password";
  placeholder: string;
};

export function AuthInput({ type, placeholder }: AuthInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded-lg border border-background-3 text-black outline-none focus:outline-solid outline-brand-glow focus:outline-2 transition-colors"
    />
  );
}
