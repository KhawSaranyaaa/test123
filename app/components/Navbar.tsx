import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex gap-4 border-b p-4">
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
    </nav>
  );
}

export default Navbar;
