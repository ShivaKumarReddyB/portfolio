"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "@/app/components/Card/Card";
import { mediaPath } from "@/app/util";
import { rockSalt } from "@/app/fonts/fonts.";

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(true);
  console.log({
    me: mediaPath("/portfolio"),
    evn: process.env.NEXT_PUBLIC_IS_GITHUB,
  });
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <main className=" min-h-screen flex-col p-5 bg-neutral-100 dark:bg-neutral-900">
        {" "}
        {/* todo:change is this to fixed position*/}
        <div className={"flex justify-between w-full "}>
          <h1 className={`${rockSalt.className} dark:text-white text-sky-800`}>
            {" "}
            Bakkannagari{" "}
          </h1>
          <button
            onClick={() => setDarkMode((prevState) => !prevState)}
            //className={"absolute right-10 bg-neutral-100  dark:bg-neutral-900 "}
          >
            {isDarkMode ? (
              <Image
                src={mediaPath("/lightbulb.png")}
                alt="Profile Picture"
                width={35}
                height={35}
                className="rounded-full"
              />
            ) : (
              <Image
                src={mediaPath("/bulb.png")}
                alt="Profile Picture"
                width={35}
                height={35}
                className="rounded-full"
              />
            )}
          </button>
        </div>
        <Card />
      </main>
    </div>
  );
}
