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
          <div className="bg-background-2 w-full h-full flex justify-center items-center rounded-lg text-3xl font-semibold">
            {title.slice(0, 1)}
          </div>
        </Link>
      )}
    </div>
  );
}
