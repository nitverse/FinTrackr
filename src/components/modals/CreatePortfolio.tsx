"use client";
import { FC, useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import qs from "query-string";

import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { useModal } from "@/hooks/useModalStore";
import toast, { Toaster } from 'react-hot-toast';

interface createChannelModalProps {}
const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "portfolio name is required.",
    })
});

const CreateChannelModal: FC<createChannelModalProps> = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const params = useParams();

  const isModalOpen = isOpen && type === "createPortfolio";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `/api/portfolio`,
        query: {
          userId: params?.userId,
        },
      });

      await axios.post(url, values);

      form.reset();
      router.refresh();
      onClose();
      toast("Portfolio Created")
    } catch (error) {}
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className=" text-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create Portfolio
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" uppercase text-xs font-bold text-white dark:text-secondary/70">
                      Portfolio Name
                    </FormLabel>
                    <FormControl>
                      {/* @ts-ignore */}
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-100 h-12 text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Enter Portfolio Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className=" px-6 py-4">
              <Button className="bg-indigo-300"  disabled={isLoading}>Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChannelModal;
