"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/actions/auth-actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const res = await register(formData);
    
    // register might throw a redirect error which Next.js catches, 
    // but if it returns an object with an error property, we handle it:
    if (res?.error) {
      setError(res.error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
        <p className="text-sm text-gray-500 mt-2">Enter your information to get started</p>
      </div>
      
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="name">Name</label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
          <Input id="email" name="email" type="email" placeholder="name@example.com" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button className="w-full" type="submit">Sign up</Button>
      </form>
      
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
