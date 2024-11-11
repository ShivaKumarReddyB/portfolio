import { useEffect, useState } from "react";
import { permanentMarker, kalamFont } from "@/app/fonts/font";

export const AboutMe: React.FC = () => {
  const fullText = `I’m a skilled Full Stack Developer with six years of experience in React, Angular, Node.js, and AWS, dedicated to building innovative and scalable web applications. My expertise spans both front-end and back-end development, with a strong focus on delivering seamless user experiences and efficient, high-performance solutions. Currently, I’m working with Home Depot on a robust e-commerce platform, where I leverage Next.js, Redux, and AWS Lambda for dynamic applications and real-time data processing. Previously, I contributed to the HomeServe Boiler project at Cognizant, creating reusable components and optimizing app performance. I’m passionate about staying up-to-date with the latest technologies and continuously improving processes to drive value.`;

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [typingIntervalId, setTypingIntervalId] =
    useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 10);

    setTypingIntervalId(intervalId);

    return () => clearInterval(intervalId);
  }, []);

  const revealFullText = () => {
    if (typingIntervalId) {
      clearInterval(typingIntervalId);
    }
    setDisplayedText(fullText);
    setIsTyping(false);
  };

  return (
    <div className="w-[600px] h-[450px] p-[5%] dark:text-white text-sky-800 bg-[rgba(217,217,217,0.1)] border border-black rounded-[50px] animate-slideInFromLeft">
      <h1
        className={`text-3xl text-center mb-2.5 ${permanentMarker.className}`}
      >
        About Me
      </h1>
      {isTyping && (
        <button
          onClick={revealFullText}
          className="mt-4 text-white border-none px-4 py-2 hover:decoration-solid  hover:text-red-600"
        >
          Show Full Text
        </button>
      )}
      <p className={`${kalamFont.className}`}>
        {displayedText}
        <span className="typing-cursor animate-blink"></span>
      </p>
    </div>
  );
};
