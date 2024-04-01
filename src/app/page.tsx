import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Link href="/home">Go to the home page</Link>
      <p className="text-red-900 text-3xl">This is the landing page!</p>
    </div>
  );
}
