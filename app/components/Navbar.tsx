import React from "react";
import Link from "next/link";
import Search from "./Search";

function Navbar() {
  return (
    <section className="bg-slate-600">
      <nav className="w-5/6 mx-auto p-4 justify-between  flex flex-col md:flex-row sticky top-0 drop-shadow-xl">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href={"/"}>WikiRocket!</Link>
        </h1>

        <Search />
      </nav>
    </section>
  );
}

export default Navbar;
