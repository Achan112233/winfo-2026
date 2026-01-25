import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans relative min-h-screen bg-linear-to-b from-white-0 to-blue-100 flex flex-col justify-end">
      <main className="">
        <Image
          src="/landing1.png"
          alt="Winfo Logo"
          width={300}
          height={300}
          className="absolute right-0 bottom-40"
        />
        <Image
          src="/landing2.png"
          alt="Winfo Logo"
          width={300}
          height={300}
          className="absolute left-0 top-20"
        />
        {/* Sign Up or Log In */}
        <section className="flex flex-col items-center bg-white p-20 gap-5">
          <h1 className="text-3xl">let's get started!</h1>
          <Link href="/sign-up">  
            <Button className="bg-primary px-50 py-7">sign up</Button>
          </Link>
          <div className="flex flex-row gap-1 justify-center">
            <p className="text-sm">already have an account?</p>
            <Link href="/sign-in"> 
              <p className="text-sm text-primary underline">log-in</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
