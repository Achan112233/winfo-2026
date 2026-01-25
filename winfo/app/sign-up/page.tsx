"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import  Link from "next/link";
import { set } from "mongoose";
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import React from "react";



export default function SignUp() {
    const [name, setName] = React.useState("");
    const[email, setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const[loading, setLoading] = React.useState(false);

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            const result = await signUp.email({
                name,
                email,
                password,
            });
            if (result.error) {
                setError(result.error.message?? "Failed to sign up");
            } else {
                router.push("/home");
            }
        } catch(err) {
            setError("Failed to sign up");
        } finally {
            setLoading(false);
        }
    }   

    return (



        
        <div className="min-h-screen bg-[#A0B16D] flex flex-col items-center justify-end">

        
        <form onSubmit={handleSubmit} className="bg-[#F9F5F2] w-full justify-center items-center py-30 px-20 ">
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="flex flex-col gap-2">
                <Label htmlFor="name">username</Label>
                <Input type="text" id="name" placeholder="username" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email">email</Label>
                <Input type="email" id="email"  placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="password">password</Label>
                <Input type="password" id="password"  minLength={8} placeholder="*********" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button disabled={loading} type="submit" className="bg-primary mt-4">
                {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            <p>Already have an account? <Link href="/sign-in" className="text-primary underline">log In</Link></p>
        </form>
        
        </div>
  );
}