"use client";
import React from "react";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";

interface TimesTableDescriptionProps {
  title: string;
  description: string | React.ReactNode;
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
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl.src);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = imagealt || "times-table.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <section>
      <style jsx>{`
        @keyframes upDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-upDown {
          animation: upDown 1.5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      <div>
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-[60px]">
          {/* Text Section */}
          <div className="basis-1/2">
            <h2 className="text-lg md:text-3xl font-extrabold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {description}
            </p>
            <ul className="space-y-5">
              {points.map((point, index) => {
                const [boldPart, ...rest] = point.split(" – ");
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
          </div>

          {/* Image + Animated Button */}
          <div className="basis-1/2 flex justify-center w-full rounded-xl border border-gray-300 p-4 shadow-lg shadow-blue-100">
            <div className="flex flex-col items-end">
              <div className="rounded-xl shadow-lg">
                <Image
                  src={imageUrl}
                  alt={imagealt}
                  className="rounded-xl shadow-lg h-[520px] w-[300px]"
                />
              </div>
              <button
                onClick={handleDownload}
                className="cursor-pointer flex gap-1.5 mt-6 px-6 py-3 text-black border-t border-amber-50 font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300"
              >
                {downloadText}
                <div className="animate-upDown  border-b border-amber-50">
                  <ArrowDownToLine />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimesTableDescription;
