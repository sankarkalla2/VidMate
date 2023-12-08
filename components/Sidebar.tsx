"use client";

import { cn } from "@/lib/utils";
import {
  Heart,
  Home,
  SubscriptIcon,
  ThumbsUp,
  History,
  TrendingUp,
  UserRoundPlus,
  TimerIcon,
  Settings,
  LayoutDashboard,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUserRound } from "lucide-react";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FcComments } from "react-icons/fc";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Trending",
    href: "/trending",
    icon: TrendingUp,
  },
  {
    label: "Your Channel",
    href: "/channel/dashboard",
    icon: CircleUserRound,
  },
  {
    label: "History",
    href: "/history",
    icon: History,
  },
  {
    label: "Liked Videos",
    href: "/liked",
    icon: ThumbsUp,
  },
  {
    label: "Watch Later",
    href: "/watchlater",
    icon: TimerIcon,
  },
  {
    label: "Subscriptions",
    href: "/subscriptions",
    icon: UserRoundPlus,
  },
  {
    label: "Settings",
    href: "settings",
    icon: Settings,
  },
];

const studioRoutes = [
  {
    label: "Dashboard",
    href: "/channel/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Create",
    href: "/channel/create",
    icon: CircleUserRound,
  },
  {
    label: "Analytics",
    href: "/channel/analytics",
    icon: TbBrandGoogleAnalytics,
  },
  {
    label: "Comments",
    href: "/channel/comments",
    icon: FcComments,
  },
  {
    label: "Settings",
    href: "/channel/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full flex flex-col space-y-2 border overscroll-auto">
      <div>
        <Link href="/" className="flex gap-x-1 p-3  mt-3">
          <div className="relative h-8 w-8">
            <Image alt="logo" fill src="/logo.png" />
          </div>
          <h1 className="font-extrabold text-2xl">VidTape</h1>
        </Link>
      </div>
      <div className="p-3 space-y-2">
        {pathname.includes("channel")
          ? studioRoutes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "flex items-center gap-x-3 p-3 hover:bg-black/10 rounded-lg",
                  route.href === pathname && "bg-black/10 shadow-sm",
                  pathname.includes(route.href && "bg-black/10 shadow-sm")
                )}
              >
                <route.icon className="h-5 w-5" />
                <div className="text-sm text-black">{route.label}</div>
              </Link>
            ))
          : routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "flex items-center gap-x-3 p-3 hover:bg-black/10 rounded-lg",
                  route.href === pathname && "bg-black/10 shadow-sm",
                  pathname.includes(route.href && "bg-black/10 shadow-sm")
                )}
              >
                <route.icon className="h-5 w-5" />
                <div className="text-sm text-black">{route.label}</div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Sidebar;
