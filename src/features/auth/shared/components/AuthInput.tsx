type AuthInputProps = {
  type: "text" | "email" | "password";
  placeholder: string;
};

export function AuthInput({ type, placeholder }: AuthInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded-lg border border-background-2 text-black focus:outline-none focus:ring-2 focus:ring-brand transition-colors"
    />
  );
}
