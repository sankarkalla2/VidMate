"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, Upload } from "lucide-react";
import * as z from "zod";
import { SearchInput } from "./search-form";
import MobileSidebarMenu from "./ui/mobile-sidebar-menu";

const Navbar = () => {
  return (
    <nav className="py-4 flex gap-x-3 items-center p-3 fixed bg-white inset-x-0 z-50 md:ml-52">
      <h1 className="">
        <MobileSidebarMenu />
      </h1>
      <div className="text-center rounded-lg mx-auto">
        <SearchInput />
      </div>
      <div className="flex gap-x-3 items-center justify-end">
        <Upload className="cursor-pointer" />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
