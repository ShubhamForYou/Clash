import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function login() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[550px] bg-slate-200 rounded-xl px-10 py-5 shadow-md m-2">
        <h1 className="text-4xl  font-extrabold bg-gradient-to-b from-green-300 to-gray-700 text-transparent bg-clip-text text-center">
          Clash
        </h1>
        <h1 className="text-3xl font-bold mb-0.5">Register</h1>
        <p>Welcome to Clash</p>
        <form action="">
          <div className="mt-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="bg-slate-300 mt-1"
            ></Input>
          </div>
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="bg-slate-300 mt-1"
            ></Input>
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Password </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              className="bg-slate-300 mt-1"
            ></Input>
          </div>
          <div className="mt-4">
            <Label htmlFor="cpassword">Confirm Password </Label>
            <Input
              id="cpassword"
              name="cpassword"
              type="password"
              placeholder="Confirm your  password"
              className="bg-slate-300 mt-1"
            ></Input>
          </div>

          <div className="mt-4 ">
            <Button className="bg-green-950 w-full">Submit</Button>
          </div>
        </form>
        <p className="text-center mt-3.5">
          Already have an account ?
          <Link href="/login">
            <strong className="underline text-green-900">Login</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}
