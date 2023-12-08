import { SearchInput } from "@/components/search-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ChannelPage = () => {
  return (
    <div className="flex">
      <Button>
        <Link href="channel/create">Create</Link>
      </Button>
    </div>
  );
};

export default ChannelPage;
