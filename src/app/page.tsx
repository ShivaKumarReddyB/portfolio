"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);
  const mediaPath = (path: string): string => {
    return process.env.NEXT_PUBLIC_IS_GITHUB === "true"
      ? `/portfolio${path}`
      : path;
  };
  console.log(mediaPath("/portfolio"));
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <main className="flex min-h-screen flex-col p-5 bg-neutral-100 dark:bg-neutral-900">
        <button
          onClick={() => setDarkMode((prevState) => !prevState)}
          className={"absolute right-10 bg-neutral-100  dark:bg-neutral-900 "}
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
        <h1 className={"dark:text-white text-sky-800"}> Shiva Kumar Reddy B</h1>
      </main>
    </div>
  );
}

// Reusable Skill Component
