"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { toast } from "sonner";
import axios from "axios";

const AuthenticationModal = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRegistrationForm, setRegistrationForm] = useState(false);

  useEffect(() => {
    checkAuthStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuthStatus = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      toggleModal();
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleRegistrationForm = () => {
    setRegistrationForm(!isRegistrationForm);
  };

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
        toggleRegistrationForm();
        toast.success("Check your email for confirmation");
      }
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error signing in:", error.message);
      toast.error(`${error.message}`);
    } else if (data) {
      console.log("User signed in:", data);
      toggleModal();
      toast.success("Successfully signed in");
      window.location.reload();
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black backdrop-blur-sm">
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  {isRegistrationForm
                    ? "Create an account"
                    : "Sign in to our platform"}
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={isRegistrationForm ? handleRegister : handleLogin}
                >
                  {isRegistrationForm && (
                    <div>
                      <label
                        htmlFor="Full name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
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
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
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
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {isRegistrationForm
                      ? "Create Account"
                      : "Login to your account"}
                  </button>
                  <div className="text-sm font-medium text-gray-500">
                    {isRegistrationForm
                      ? "Already registered? "
                      : "Not registered? "}
                    <Link
                      href=""
                      onClick={toggleRegistrationForm}
                      className="text-violet-700 hover:underline"
                    >
                      {isRegistrationForm ? "Sign in" : "Create account"}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationModal;
