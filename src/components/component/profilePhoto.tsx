import React, { FC } from "react";
import Image from "next/image";

const ProfilePhoto: FC = () => {
  return (
    <div className="rounded-full border-[5px] border-[#f2f2f3] p-1">
      <Image
        className="rounded-full border"
        src={"/images/profile-picture.png"}
        width={150}
        height={150}
        alt="Photo"
        priority={true}
      />
    </div>
  );
};

export default ProfilePhoto;
