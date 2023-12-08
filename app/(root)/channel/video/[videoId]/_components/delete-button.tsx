import { Button } from "@/components/ui/button";
import { MdDeleteForever } from "react-icons/md";

const DeleteButton = () => {
  return (
    <Button variant="destructive" size="sm">
      <MdDeleteForever classname="w-8 h-8" />
    </Button>
  );
};

export default DeleteButton;
