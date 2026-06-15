import Image from "next/image";

type HomeCardProps = {
  title: string;
  src?: string;
};

export function HomeCard({ title, src }: HomeCardProps) {
  return (
    <div className="w-50 h-75 rounded-lg overflow-hidden">
      {src ? (
        <Image src={src} alt={`${title}_표지`} />
      ) : (
        <div className="bg-gray-100 w-full h-full flex justify-center items-center">
          미등록
        </div>
      )}
    </div>
  );
}
