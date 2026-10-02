import { ISection } from "@/type";
import React from "react";
import Section from "./Section";

const OtherSections = ({ sections }: { sections: ISection[] }) => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      {sections.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </div>
  );
};

export default OtherSections;
