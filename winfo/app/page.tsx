import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-linear-to-b from-white-0 to-blue-100 flex flex-col justify-end">
      <main className="">

        {/* Sign Up or Log In */}
        <section className="flex flex-col items-center bg-white p-20 gap-5">
          <h1 className="">let's get started!</h1>
          <Button className="bg-primary w-full">sign up</Button>
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
