import React from "react";
import Image from "next/image";

interface TimesTableDescriptionProps {
  title: string;
  description: string;
  points: string[];
  imageUrl: any;
  downloadText?: string;
  imagealt: string;
}

const TimesTableDescription: React.FC<TimesTableDescriptionProps> = ({
  title,
  description,
  points,
  imageUrl,
  imagealt,
  downloadText = "Download",
}) => {
  return (
    <section>
      <div>
        {/* Gradient Background */}

        <div className="grid lg:grid-cols-2 gap-10 items-center mt-[60px]">
          {/* Text Content */}
          <div>
            <h2 className="text-lg md:text-2xl  font-extrabold text-gray-900 leading-snug mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {description}
            </p>

            {/* Benefits List */}
            <div className="space-y-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start text-lg border-b border-gray-300 "
                >
                  <div className="h-6 w-6 flex items-center justify-center bg-indigo-500 text-white rounded-full mr-3">
                    ✓
                  </div>
                  <span className="text-gray-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Image + Download Button */}
          <div className=" flex flex-col items-end ">
            <div className="rounded-lg shadow-lg">
              <Image
                src={imageUrl}
                alt={imagealt}
                className="rounded-lg shadow-lg"
              />
            </div>
            <a
              href={imageUrl}
              download
              className="mt-6 px-6 py-3 text-black border-b border-gray-300  font-semibold rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
            >
              {downloadText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimesTableDescription;
