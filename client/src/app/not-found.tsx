import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <Image src="/404.svg" width={500} height={500} alt="404" />
      <Link
        href="/"
        className="mt-6  hover:underline text-lg font-medium"
      >
        ← Return Home
      </Link>
    </div>
  );
}
