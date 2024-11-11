import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mediaPath } from "@/app/util";
import { rockSalt } from "@/app/fonts/font";

interface ClickableIconProps {
  src: string;
  alt: string;
  label: string;
  link?: string; // Made link optional
  size?: number;
  className?: string;
}

const ClickableIcon: React.FC<ClickableIconProps> = ({
  src,
  alt,
  label,
  link,
  size = 64,
  className = "",
}) => {
  const iconContent = (
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
        className={`mt-1 text-center dark:text-white text-sky-800 ${rockSalt.className}`}
      >
        {label}
      </span>
    </div>
  );

  // Conditionally wrap in Link if the link prop is provided
  return link ? (
    <Link href={link} target={link.startsWith("http") ? "_blank" : "_self"}>
      {iconContent}
    </Link>
  ) : (
    iconContent
  );
};

export default ClickableIcon;
