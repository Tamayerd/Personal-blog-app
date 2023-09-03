import React, { useState, useContext } from "react";
import { Authority } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function LogIn(props) {
  const { user, setUser } = useContext(Authority);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();

  const db = [
    { id: 1234, name: "tamay", role: "Admin", password: "123" },
    { id: 4321, name: "ömer", role: "User", password: "321" },
  ];

  //giriş yap
  const handleLogin = () => {
    const foundUser = db.find(
      (data) =>
        data.name.toLowerCase() === username.toLowerCase() ||
        (data.name.toUpperCase() === username.toUpperCase() &&
          data.password === password)
    );
    console.log(handleLogin);
    if (foundUser) {
      // locale kaydet
      const userModel = JSON.stringify(foundUser);
      localStorage.setItem("userInfo", userModel);

      setUser(foundUser);
      if (foundUser.role === "Admin") {
        redirect("/Admin");
      }
      if (foundUser.role === "User") {
        redirect("/");
      }
    } else {
      alert("Giriş yapılamadı");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div>
        <a href="/">
          <h3 className="text-4xl font-bold text-purple-600">Logo</h3>
        </a>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
  
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
  
          <div className="flex items-center justify-end mt-4">
            <a
              className="text-sm text-gray-600 underline hover:text-gray-900"
              href="#"
            >
              Haven't joined yet?
            </a>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-black uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900"
              onClick={handleLogin}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}