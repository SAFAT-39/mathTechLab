interface ContentPointProps {
  title: string;
  description: string;
}
import React from "react";

const ContentPoint = ({ title, description }: ContentPointProps) => {
  return (
    <div className="mb-6 md:mb-8">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-lg text-primary">{description}</p>
    </div>
  );
};

export default ContentPoint;
