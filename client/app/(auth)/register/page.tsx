"use client";

import Link from "next/link";
import React, { useState } from "react";
import supabase from "@/utils/supabase";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

const Registration: React.FC = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const generateRandomAvatar = async () => {
    let avatarUrl = "";
    try {
      const avatarResponse = await axios.get(
        `https://api.dicebear.com/7.x/micah/svg?flip=true&backgroundType=gradientLinear&backgroundRotation[]&baseColor=f9c9b6,ac6651&earringsProbability=15&facialHair=scruff&facialHairProbability=30&hair=dannyPhantom,fonze,full,pixie,turban,mrClean&hairProbability=95&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&seed=${full_name}`
      );
      avatarUrl = avatarResponse.request.responseURL;
    } catch (error) {
      console.error("API request failed:", error);
    }
    return avatarUrl;
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data: registrationData, error: registrationError } =
      await supabase.auth.signUp({
        email,
        password,
      });
    if (registrationError) {
      console.error("Error signing up:", registrationError.message);
      toast.error(`${registrationError.message}`);
    } else if (registrationData) {
      const user = registrationData.user;
      const avatar_url = await generateRandomAvatar();

      const updates = {
        id: user?.id,
        full_name,
        avatar_url,
        updated_at: new Date(),
      };

      const { error: upsertError } = await supabase
        .from("profiles")
        .upsert(updates);

      if (upsertError) {
        console.error("Error upserting profile:", upsertError.message);
      } else {
        console.log("User registered:", registrationData);
        toast.success("Check your email for confirmation");
        router.push("/login");
      }
    }
  };

  return (
    <div>
      <Toaster richColors position="top-center" closeButton />
      <div className="min-h-screen flex justify-center items-center">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Create an account
              </h3>
              <form className="space-y-6" onSubmit={handleRegister}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    value={full_name}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******************"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign up
                </button>
                <div className="text-sm font-medium text-gray-500">
                  Already registered?
                  <Link
                    href="/login"
                    className="text-violet-700 hover:underline"
                  >
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
