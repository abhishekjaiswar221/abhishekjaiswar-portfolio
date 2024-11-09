"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ContactForm from "../form/contactForm";
import { DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const ConnectDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-lg border-2 border-indigo-500 bg-indigo-500 text-zinc-200 hover:bg-transparent">
          Connect
        </Button>
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
