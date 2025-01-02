"use client";

import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { UserRound } from "lucide-react";
import ContactForm from "../form/contact-form";
import { DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const ConnectDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="hidden lg:block"
          role="button"
          aria-label="Open connect dialog"
        >
          <Button className="rounded-lg border-2 border-indigo-600 bg-indigo-600 text-zinc-200 hover:bg-transparent">
            Connect
          </Button>
        </div>
      </DialogTrigger>
      <DialogTrigger asChild>
        <div
          className="lg:hidden"
          role="button"
          aria-label="Open connect dialog"
        >
          <UserRound
            className="box-content cursor-pointer rounded-lg p-1 text-zinc-400 hover:bg-zinc-800 hover:text-indigo-400"
            size={20}
            strokeWidth={1.5}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="w-80 rounded-lg md:w-96">
        <DialogHeader>
          <DialogTitle className="text-center">Get in Touch</DialogTitle>
        </DialogHeader>
        <VisuallyHidden>
          <DialogDescription>Contact me</DialogDescription>
        </VisuallyHidden>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default ConnectDialog;
