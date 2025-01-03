"use client";

import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { andika } from "@/lib/fonts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound: FC = () => {
  return (
    <main
      className={cn(
        andika.className,
        "flex min-h-screen flex-col items-center justify-center"
      )}
    >
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
          className="text-3xl font-semibold text-zinc-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="mx-auto max-w-md text-xl text-zinc-400"
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
            className="rounded-lg border-2 border-indigo-600 bg-indigo-600 text-zinc-100 hover:bg-transparent"
          >
            <Link href="/" className="text-base font-semibold">
              Go back home
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
