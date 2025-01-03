"use client";

import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfilePhotoProps {
  styles?: string;
}

const ProfilePhoto: FC<ProfilePhotoProps> = ({ styles }) => {
  return (
    <Avatar className={`${styles}`}>
      <AvatarImage src="/images/profile-picture.webp" alt="Profile Photo" />
      <AvatarFallback className="text-sm text-black">AJ</AvatarFallback>
    </Avatar>
  );
};

export default ProfilePhoto;
