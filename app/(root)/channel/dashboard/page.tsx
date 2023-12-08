import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Button className="ml-auto">
        <Link href="/channel/create">Create</Link>
      </Button>
    </div>
  );
};

export default Dashboard;
