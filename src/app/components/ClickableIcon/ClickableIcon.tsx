import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mediaPath } from "@/app/util";
import { rockSalt } from "@/app/fonts/fonts.";

interface ClickableIconProps {
  src: string;
  alt: string;
  link: string;
  label: string;
  size?: number;
  className?: string;
}

const ClickableIcon: React.FC<ClickableIconProps> = ({
  src,
  alt,
  link,
  label,
  size = 64,
  className = "",
}) => {
  return (
    <Link href={link} target={link.startsWith("http") ? "_blank" : "_self"}>
      <div className={`flex flex-col items-center ${className}`}>
        <Image
          src={mediaPath(src)}
          alt={alt}
          width={size}
          height={size}
          unoptimized
          className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
        />
        <span
          className={`mt-1 text-center  dark:text-white text-sky-800 ${rockSalt.className}`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default ClickableIcon;
