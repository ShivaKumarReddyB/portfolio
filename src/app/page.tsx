"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { mediaPath } from "@/app/util";
import { rockSalt } from "@/app/fonts/font";
import { AboutMe } from "@/app/components/AboutMe/AboutMe";
import WorkExperience from "@/app/components/WorkExperience/WorkExperience";
import ContactCard from "@/app/components/Card/ContactCard";
import SkillSection from "@/app/components/Skills/SkillSection";

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(true);
  const skillsSectionRef = useRef(null);

  const skills = [
    {
      label: "JavaScript",
      size: 64,
      alt: "JavaScript",
      src: "/javascript.png",
    },
    { label: "React", size: 64, alt: "React", src: "/react.png" },
    { label: "Angular", size: 64, alt: "Angular", src: "/angular.png" },
    { label: "Node.js", size: 64, alt: "Node.js", src: "/nodejs.png" },
    { label: "Java", size: 64, alt: "Java", src: "/java.png" },
    {
      label: "Spring Boot",
      size: 64,
      alt: "Spring Boot",
      src: "/springboot.png",
    },
    { label: "Python", size: 64, alt: "Python", src: "/python.png" },
    { label: "AWS", size: 64, alt: "AWS", src: "/aws.png" },
    { label: "Kafka", size: 64, alt: "Kafka", src: "/kafka.png" },
    { label: "Next.js", size: 64, alt: "Next.js", src: "/nextjs.png" },
    {
      label: "Tailwind CSS",
      size: 64,
      alt: "Tailwind CSS",
      src: "/tailwindcss.png",
    },
    { label: "HTML5", size: 64, alt: "HTML5", src: "/html5.png" },
    { label: "CSS3", size: 64, alt: "CSS3", src: "/css3.png" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sectionShow");
          } else {
            entry.target.classList.remove("sectionShow");
          }
        });
      },
      { threshold: 0.5 },
    );

    // Observe all elements with the 'sectionHidden' class
    const hiddenElements = document.querySelectorAll(".sectionHidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <main className="min-h-screen flex flex-col p-5 bg-neutral-100 dark:bg-neutral-900 pt-20">
        {/* Header */}
        <header className="flex justify-between w-[95%] mx-auto fixed top-0 left-0 right-0 p-3 bg-neutral-100 dark:bg-neutral-900 z-10">
          <h1 className={`${rockSalt.className} dark:text-white text-sky-800`}>
            Bakkannagari
          </h1>
          <button
            onClick={() => setDarkMode((prevState) => !prevState)}
            aria-label="Toggle Dark Mode"
          >
            <Image
              src={mediaPath(isDarkMode ? "/lightbulb.png" : "/bulb.png")}
              alt="Theme Toggle"
              width={35}
              height={35}
              className="rounded-full"
            />
          </button>
        </header>

        <div className="relative mt-[60px]">
          {/* Intro Section (ContactCard and AboutMe) */}
          <section className="relative bottom-[80px] grid grid-cols-2 gap-16 sectionHidden">
            <div className="sectionHidden animate-slideInFromLeft">
              <ContactCard />
            </div>
            <div className="sectionHidden animate-slideInFromRight">
              <AboutMe />
            </div>
          </section>

          {/* Skills and Work Experience Section */}
          <section
            ref={skillsSectionRef}
            className="grid grid-cols-2 gap-16 sectionHidden"
          >
            <div className="sectionHidden">
              <SkillSection icons={skills} />
            </div>
            <div className="sectionHidden">
              <WorkExperience />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
