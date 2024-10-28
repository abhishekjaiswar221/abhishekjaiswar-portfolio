"use client";

import { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

interface ProfilePhotoProps {
  styles?: string;
}

const ProfilePhoto: FC<ProfilePhotoProps> = ({ styles }) => {
  return (
    <Avatar className={`${styles}`}>
      <Image
        src={"/images/profile-picture.png"}
        alt="Profile Photo"
        width={500}
        height={500}
        quality={100}
        priority
      />
      <AvatarFallback className="text-sm text-zinc-900">AJ</AvatarFallback>
    </Avatar>
  );
};

export default ProfilePhoto;
