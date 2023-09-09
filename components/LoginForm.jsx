"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import Button from "./Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.info('Please wait...', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        toast.error('Invalid Credentials!!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        return;
      } else{
        toast.success('Successfully logged in.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      router.replace("dashboard");
    } catch (error) {
      toast.error('Something went wrong!!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-primary bg-dark">
      <div className="shadow-md shadow-gray-100 bg-gray-100 p-5 rounded-lg w-3/12 py-8">
        <h1 className="pb-4 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button className="mt-4" type="primary">Login</Button>
        </form>
      </div>
    </div>
  );
}