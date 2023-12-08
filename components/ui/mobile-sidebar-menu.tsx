"use client";

import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetContent,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "../Sidebar";
import { Button } from "./button";
import { useEffect, useState } from "react";

const MobileSidebarMenu = () => {
  const [mouted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mouted) return null;
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebarMenu;
