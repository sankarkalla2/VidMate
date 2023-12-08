"use client";

import {
  FcEngineering,
  FcFilmReel,
  FcMusic,
  FcMultipleDevices,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { AiOutlineStock } from "react-icons/ai";
import CategoryItem from "./category-item";

const categories = [
  {
    label: "Engineering",
    icon: FcEngineering,
    href: "engeneering",
  },

  {
    label: "Music",
    icon: FcMusic,
    href: "music",
  },

  {
    label: "Filming",
    icon: FcFilmReel,
    href: "filming",
  },

  {
    label: "Computer Science",
    icon: FcMultipleDevices,
    href: "computer science",
  },

  {
    label: "Engineering",
    icon: FcEngineering,
    href: "engeneering",
  },

  {
    label: "Engineering",
    icon: FcEngineering,
    href: "engeneering",
  },

  {
    label: "Sports",
    icon: FcSportsMode,
    href: "sports",
  },
  {
    label: "finance",
    icon: AiOutlineStock,
    href: "finance",
  },
];

const Categories = () => {
  return (
    <div className="flex overflow-auto space-x-2">
      {categories.map((category) => (
        <div className="">
          <CategoryItem
            icon={category.icon}
            label={category.label}
            href={category.href}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
