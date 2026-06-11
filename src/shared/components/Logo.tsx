import Image from "next/image";
// import logo_dark from "@/assets/images/logo-dark.png";
import logo_default from "@/assets/images/logo-default.png";

export function Logo() {
  return (
    <div className="flex items-center w-40">
      <Image src={logo_default} alt="Logo" aria-label="로고" priority />
      {/* <Image src={logo_dark} alt="Logo" aria-label="로고" priority /> */}
    </div>
  );
}
