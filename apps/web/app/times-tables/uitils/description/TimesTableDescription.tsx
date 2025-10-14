"use client";
import React from "react";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";

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
  // Function to handle image download
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl.src); // Fetch the image URL
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = imagealt || "times-table.png"; // Set default filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke blob URL to free memory
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <section>
      <div>
        <div className=" flex flex-col lg:flex-row items-center gap-10  mt-[60px]">
          {/* Text Content */}
          <div className=" basis-1/2">
            <h2 className="text-lg md:text-2xl font-extrabold text-gray-900  mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {description}
            </p>
            <ul className="space-y-5">
              {points.map((point, index) => {
                const [boldPart, ...rest] = point.split(" – "); // Splitting at '–' to make first part bold
                return (
                  <li
                    key={index}
                    className="flex items-start border-b-2 border-gray-300"
                  >
                    <span className="mr-2 text-indigo-600">✔</span>
                    <span>
                      <strong>{boldPart} –</strong> {rest.join(" – ")}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Benefits List */}
            {/* <div className="space-y-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start text-lg border-b border-gray-300"
                >
                  <div className="h-6 w-6 flex items-center justify-center bg-indigo-500 text-white rounded-full mr-3">
                    ✓
                  </div>
                  <span className="text-gray-800">{point}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Image + Download Button */}
          <div className="basis-1/2 flex justify-center w-full rounded-xl border border-gray-300 p-4 shadow-lg shadow-blue-100">
            <div className="flex flex-col items-end  ">
              <div className="rounded-xl shadow-lg ">
                <Image
                  src={imageUrl}
                  alt={imagealt}
                  className="rounded-xl shadow-lg h-[520px] w-[300px]"
                />
              </div>
              <button
                onClick={handleDownload}
                className="cursor-pointer flex gap-1 mt-6 px-6 py-3 text-black border-b border-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300"
              >
                {downloadText}
                <ArrowDownToLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimesTableDescription;
