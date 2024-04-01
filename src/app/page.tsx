import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-foreground text-4xl lg:text-5xl font-bold mb-4">ScribeForm</h1>
          <p className="text-foreground text-xl lg:text-2xl mb-8">Automatically convert podcasts into delightful reads</p>
          <Link href="/home"><Button>Get Started</Button></Link>
        </div>
      </div>
    </div>
  );
}
