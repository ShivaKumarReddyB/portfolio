import React from "react";
import Image from "next/image";
import { mediaPath } from "@/app/util";
import ClickableIcon from "@/app/components/ClickableIcon/ClickableIcon";
import { permanentMarker, kalamFont } from "@/app/fonts/font";

const ContactCard: React.FC = () => {
  const contactSection = () => {
    const aboutIcons = [
      {
        label: "LinkedIn",
        size: 48,
        link: "http://www.linkedin.com/in/shivakumarreddyb",
        alt: "LinkedIn",
        src: "/linkedin.svg",
      },
      {
        label: "GitHub",
        size: 48,
        link: "https://github.com/ShivaKumarReddyB",
        alt: "GitHub",
        src: "/git.svg",
      },
      {
        label: "Email",
        size: 48,
        link: "mailto:bakkannagarishivareddy@gmail.com",
        alt: "Mail",
        src: "/gmail.svg",
      },
    ];
    return (
      <div className={"flex absolute bottom-[10%] left-[35%] space-x-4"}>
        {aboutIcons.map(({ label, src, size, alt, link }) => (
          <ClickableIcon
            src={src} // replace with actual path
            alt={alt}
            link={link}
            size={size}
            label={label}
            key={alt}
          />
        ))}
      </div>
    );
  };

  const ProfileSection = () => {
    return (
      <div className=" relative h-[inherit] w-[inherit]">
        <Image
          src={mediaPath("/avatar.JPG")}
          alt={"avatar"}
          width={250}
          height={250}
          className={` absolute top-[25%] left-[8%] w-[200px] h-[200px] object-cover rounded-full ${kalamFont.className}`}
        />
        <div
          className={
            "absolute top-[25%] left-[42%] dark:text-white text-sky-800"
          }
        >
          <p className={` text-5xl ${permanentMarker.className} `}>
            Shiva Kumar Reddy Bakkannagari
          </p>
          <p className={`italic hover:font-bold ${kalamFont.className} `}>
            Full stack Developer
          </p>
          <p className={`${kalamFont.className}`}>Durham, NC</p>
        </div>
        {contactSection()}
      </div>
    );
  };
  return (
    <div className=" shadow-inner shadow-slate-900  w-[600px] h-[450px] bg-[rgba(217,217,217,0.1)] border border-black rounded-[50px] box-border">
      <ProfileSection />
    </div>
  );
};

export default ContactCard;
