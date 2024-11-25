"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FormSchema } from "@/lib/formSchema";
import { Button } from "@/components/ui/button";
import ClipLoader from "react-spinners/ClipLoader";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormInputs {
  subject: string;
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  let [loading, setLoading] = useState(false);

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      subject: "You've got a new message",
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append(
      "access_key",
      `${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}`
    );
    formData.append("subject", data.subject);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    setLoading(false);

    const result = await response.json();
    if (result.success) {
      form.reset();
      toast({
        description: `Thank you, ${data.name}! Your message has been sent.`,
      });
    } else {
      toast({
        description: "Error submitting the form!",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-zinc-700/60"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-zinc-700/60"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="border-zinc-700/60"
                  placeholder="Your Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border-2 border-indigo-500 bg-indigo-500 text-zinc-200 hover:bg-transparent"
        >
          {loading ? (
            <ClipLoader
              color={"#ffffff"}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
