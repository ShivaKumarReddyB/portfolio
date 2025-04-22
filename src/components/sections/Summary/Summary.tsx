import { useState } from "react";
import Image from "next/image";
import StickyTab from "@/components/ui/Navigation/StickyNote/StickyNote";
import ShrinkSummary from "@/assets/svg/ShrinkSummary.svg";
import "./Summary.scss";

export const Summary = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const summaryHeader = () => {
    return (
      <div className="summary-header">
        <button className="summary-square" onClick={() => setIsOpen(false)} />{" "}
        {/* TODO: should throw some funky message  */}
        <button
          className="summary-triangle"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <Image src={ShrinkSummary} alt="Shrink Summary Icon" />
        </button>
      </div>
    );
  };

  return (
    <div className="summary-container">
      <StickyTab
        id={"summary-tab"}
        header={summaryHeader()}
        initialPosition={{ x: 350, y: 350 }}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        styles={{
          width: "fit-content",
          height: "fit-content"
        }}
      >
        {" "}
        <div className="summary-content">
          --- Professional Summary-- Software developer with six years of
          experience specializing in developing scalable single-page
          applications and optimizing complex web systems using HTML5, CSS3,
          JavaScript, and modern JavaScript frameworks/libraries like Angular,
          ReactJS, and Next.js.Experienced in integrating RESTful services with
          Express.js and Spring Boot and deploying scalable solutions onto cloud
          platforms. Skilled in using headless CMS with Gatsby.js for content
          updates, enhancing SEO with SSR and SSG techniques in Next.js, and
          ensuring robust application functionality through comprehensive
          testing with Jest and Cypress.
        </div>
      </StickyTab>
    </div>
  );
};
