interface ContentPointProps {
  title: string;
  description: string;
}
import React from "react";

const ContentPoint = ({ title, description }: ContentPointProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:border-purple-200 transition-all duration-300">
      <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
        <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 text-sm font-bold">
          {title.split('.')[0]}
        </span>
        {title.split('.').slice(1).join('.').trim()}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ContentPoint;
