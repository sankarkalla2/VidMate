"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import axios from "axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";

interface DescriptionFormProps {
  description: string;
  videoId: string;
}

const formSchema = z.object({
  title: z.string().min(2).max(50, { message: "enter atleast 1 character" }),
});

export const DescriptionForm = ({ description, videoId }: DescriptionFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`/api/channel/video/${videoId}`, values);
      router.refresh();
      toast.success("Title Updated  successfully");
    } catch (err: any) {
      console.log("Title Error", err);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
      setIsEditing(false);
    }
  };

  const toggle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="bg-slate-100 p-4 rounded-md mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Video Description</h3>
        <Button variant="outline" size="sm" onClick={toggle}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <div className="flex items-center gap-x-1 text-sm">
              <Pencil className="w-3 h-3" />
              edit
            </div>
          )}
        </Button>
      </div>
      {!isEditing && <div className="text-xl font-semibold"> {description} </div>}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex items-center gap-x-2 justify-center"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter Video Title..."
                      {...field}
                      disabled={isLoading}
                      className=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="">
              <Button type="submit" size="sm">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
