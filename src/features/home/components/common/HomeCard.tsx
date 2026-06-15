import Image from "next/image";
import Link from "next/link";

type HomeCardProps = {
  title: string;
  src?: string;
};

export function HomeCard({ title, src }: HomeCardProps) {
  return (
    <div className="w-50 h-70 shrink-0">
      {src ? (
        <Image
          className="w-full h-full object-cover rounded-lg"
          src={src}
          alt={`${title}_표지`}
        />
      ) : (
        <Link href={`/n/${title}`}>
          <div className="bg-background-2 relative w-full h-full flex justify-center items-center rounded-lg overflow-hidden bg-size-[16px_16px] bg-[radial-gradient(circle,rgba(0,0,0,0.075)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1.5px,transparent_1.5px)]">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-3xl font-semibold backdrop-blur-sm">
              {title.slice(0, 1)}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
