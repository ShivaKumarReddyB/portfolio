import React from "react";
import { permanentMarker } from "@/app/fonts/font";
import ClickableIcon from "@/app/components/ClickableIcon/ClickableIcon";

interface SkillIcon {
  label: string;
  size: number;
  alt: string;
  src: string;
}

const SkillSection: React.FC<{ icons: SkillIcon[] }> = ({ icons }) => {
  const renderIcons = () => {
    return icons.map((icon, idx) => (
      <ClickableIcon
        src={icon.src}
        alt={icon.alt}
        label={icon.label}
        key={idx}
      />
    ));
  };
  return (
    <div>
      <h1
        className={`${permanentMarker.className} text-3xl dark:text-white text-sky-800`}
      >
        Skills
      </h1>
      <div className={"grid grid-cols-2"}>{renderIcons()}</div>
    </div>
  );
};

export default SkillSection;
