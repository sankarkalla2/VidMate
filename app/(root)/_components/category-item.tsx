"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface CategoryItemProps {
  icon: IconType;
  label: string;
  href: string;
}

import qs from "query-string";
import { url } from "inspector";

const CategoryItem = ({ icon: Icon, label, href }: CategoryItemProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentTitle = searchParams.get("title");
  const currentCategoryId = searchParams.get("categoryId");

  const isSelected = currentCategoryId === href;
  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : href,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <button
      className={cn("text-sm px-4 py-3 rounded-full border", isSelected && "bg-sky-800/10")}
      onClick={onClick}
    >
      <div className="truncate flex items-center gap-x-1">
        <Icon size={15} />
        {label}
      </div>
    </button>
  );
};

export default CategoryItem;
