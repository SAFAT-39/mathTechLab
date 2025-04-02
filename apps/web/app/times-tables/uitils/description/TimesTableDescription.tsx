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
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-[60px]">
          {/* Text Content */}
          <div>
            <h2 className="text-lg md:text-2xl font-extrabold text-gray-900 leading-snug mb-4">
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
                  className="flex items-start text-lg border-b border-gray-300"
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
          <div className="flex flex-col items-end">
            <div className="rounded-lg shadow-lg">
              <Image
                src={imageUrl}
                alt={imagealt}
                className="rounded-lg shadow-lg"
              />
            </div>
            <button
              onClick={handleDownload}
              className="flex gap-1 mt-6 px-6 py-3 text-black border-b border-gray-300 font-semibold rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
            >
              {downloadText}
              <ArrowDownToLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimesTableDescription;
