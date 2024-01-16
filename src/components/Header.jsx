import React from "react";
import logo from "../Assets/Logo.svg";

function Header() {
  return (
    <div className="flex justify-between pt-4 px-8 items-center">
      <img src={logo} alt="logo image" />
      <div className="flex gap-10 items-center">
        <ul>Home</ul>
        <ul>Flashcard</ul>
        <ul>Contact</ul>
        <ul>FAQ</ul>
        <ul className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-900 to-blue-950  text-white ">
          <p>Login</p>
        </ul>
      </div>
    </div>
  );
}

export default Header;
