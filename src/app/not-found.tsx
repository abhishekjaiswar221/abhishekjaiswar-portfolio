"use client";

import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Andika } from "next/font/google";
import { Button } from "@/components/ui/button";

const andika: { className: string } = Andika({
  subsets: ["latin"],
  weight: "400",
});

const NotFound: FC = () => {
  return (
    <main
      className={cn(
        andika.className,
        "flex min-h-screen flex-col items-center justify-center bg-zinc-900"
      )}
    >
      <div className="bg-grid-gray-200/50 dark:bg-grid-gray-800/50 absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative space-y-6 px-4 text-center">
        <motion.h1
          className="text-6xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-3xl font-semibold text-zinc-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="mx-auto max-w-md text-xl text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-lg border-2 border-indigo-500 bg-indigo-500 text-zinc-200 hover:bg-transparent"
          >
            <Link href="/" className="text-base">
              Go back home
            </Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 text-zinc-400 lg:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      ></motion.div>
    </main>
  );
};

export default NotFound;
