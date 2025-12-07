// DemoPage.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

import readmeUz from "../AI500-Stage2-Response-UZ.md?raw";
import readmeEn from "../AI500-Stage2-Response-EN.md?raw";
import AeroAiVideo from "../../../public/videos/AeroAi.mp4";

export default function DemoPage({ isUz, setIsUz }) {
  const readmeContent = isUz ? readmeUz : readmeEn;

  return (
    <div className="max-w-full mx-auto p-8">
      <div className="fixed ">
        <button
          onClick={() => (window.location.href = "/")} // sayt bosh sahifaga qaytadi
          className="rounded-lg bg-gray-200 hover:bg-gray-300
          gap-2 p-2 bg-background rounded-lg shadow-md"
        >
          {isUz ? "<---" : "<---"}
        </button>
      </div>
      <div className="fixed top-4 right-4  gap-2 p-2 bg-background rounded-lg z-50 shadow-md">
        <div>
          <button
            onClick={() => setIsUz(true)}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              isUz
                ? "text-green-500"
                : "text-gray-700 bg-gray-200 hover:bg-gray-300"
            }`}
          >
            UZ
          </button>
          <button
            onClick={() => setIsUz(false)}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              !isUz
                ? "text-green-500"
                : "text-white bg-gray-700 hover:bg-gray-600"
            }`}
          >
            ENG
          </button>
        </div>
        <div className="mt-2 flex flex-col">
          <button
            onClick={() =>
              window.open(
                "https://um2p9t3szr.us-east-1.awsapprunner.com/en",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-4 py-2 mt-2  text-lg font-semibold rounded-full 
                   bg-gradient-to-r from-primary to-blue-600
                   text-white shadow-lg hover:scale-105 transition duration-300"
          >
            {isUz ? "Ilova" : "App"}
          </button>
          <button
            onClick={() =>
              window.open(
                "https://t.me/agrodrone_ai_Bot_bot",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-4 py-2 mt-2  text-lg font-semibold rounded-full 
                   bg-gradient-to-r from-primary to-blue-600
                   text-white shadow-lg hover:scale-105 transition duration-300"
          >
            {isUz ? "Chat" : "Chat"}
          </button>
        </div>
      </div>

      <h1 className="text-center text-4xl font-bold mb-6">Demo</h1>
      <video
        src={AeroAiVideo}
        controls
        className="w-full max-h-[480px] md:max-h-[600px] rounded-xl mb-6 object-cover"
      />

      <div className="markdown-body p-6 rounded-lg border border-gray-300 bg-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readmeContent}
        </ReactMarkdown>
      </div>
      <section className="mt-12 mb-6 flex gap-4">
        <button
          onClick={() =>
            window.open(
              "https://um2p9t3szr.us-east-1.awsapprunner.com/en",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="px-8 py-4 text-lg font-semibold rounded-full 
                   bg-gradient-to-r from-primary to-blue-600
                   text-white shadow-lg hover:scale-105 transition duration-300"
        >
          {isUz
            ? "Ishlayotgan Ilovaga Havola"
            : "Link to the Running Application"}
        </button>
        <button
          onClick={() =>
            window.open(
              "https://t.me/agrodrone_ai_Bot_bot",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="px-4 py-2 mt-2  text-lg font-semibold rounded-full 
                   bg-gradient-to-r from-primary to-blue-600
                   text-white shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
        >
          {isUz
            ? "Savolingiz Bo'lsa Telegram botga yozing"
            : "If you have any questions, write to the Telegram bot."}
        </button>
      </section>
    </div>
  );
}
