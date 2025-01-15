import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import React, { useState } from "react";

import { FaRocket } from "react-icons/fa";
import { FaMousePointer } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <>
      <div className="grow flex flex-col gap-5 border border-white border-opacity-10 p-4  bg-zinc-950 rounded-md max-w-[17rem] min-h-[15rem]  w-full justify-center ">
        <div className="p-4 bg-zinc-900 w-fit flex items-center justify-center rounded-md border-t border-t-white border-opacity-10 border-r border-r-white ">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="text-[14px] opacity-60">{description}</p>
        </div>
      </div>
    </>
  );
};

export const featuresection = () => {
  const [activeTab, setActiveTab] = useState<"manual" | "cli">("manual");

  return (
    <>
      <DocsSEO
        title="Features Section - edithspace/ui"
        description="A section to showcase features of your product."
        image="https://i.imgur.com/vHHS0HQ.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Features Section"
            description="A section to showcase features of your product."
          />
          <DocsPreview>
            <div className="flex gap-4 justify-center  flex-wrap w-full p-4">
              <FeatureCard
                title="Stunning Design"
                description=" provides components with stunning design and animations."
                icon={<FaRocket />}
              />
              <FeatureCard
                title="Easy to Use"
                description=" is easy to use and customize. It is built with Tailwind CSS."
                icon={<FaClipboard />}
              />
              <FeatureCard
                title="Customization"
                description=" provides customization options to make it easy to fit your brand."
                icon={<FaMousePointer />}
              />
            </div>
          </DocsPreview>
          {/* Tab Switch */}
          <div className="flex justify-center gap-4 border-b border-white/10 mb-6">
            <button
              onClick={() => setActiveTab("manual")}
              className={`px-6 py-2 transition-all text-sm font-medium ${activeTab === "manual"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-white/60 hover:text-white"
                }`}
            >
              Manual
            </button>
            <button
              onClick={() => setActiveTab("cli")}
              className={`px-6 py-2 transition-all text-sm font-medium ${activeTab === "cli"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-white/60 hover:text-white"
                }`}
            >
              CLI
            </button>
          </div>
          {activeTab === "manual" && (
            <>

              <CodeBlock
                free
                title="Feature Card Component"
                lang="tsx"
                filename="tsx"
                code={`interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <>
      <div className="grow flex flex-col gap-5 border border-white border-opacity-10 p-4  bg-zinc-950 rounded-md max-w-[17rem] min-h-[15rem]  w-full justify-center ">
        <div className="p-4 bg-zinc-900 w-fit flex items-center justify-center rounded-md border-t border-t-white border-opacity-10 border-r border-r-white">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="text-[14px] opacity-60">{description}</p>
        </div>
      </div>
    </>
  );
};
`}
              />
              <CodeBlock
                title="Usage"
                lang="tsx"
                code={`import { FaRocket } from "react-icons/fa";
import { FaMousePointer } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";            

<div className="flex gap-4 justify-center  flex-wrap w-full p-4">
    <FeatureCard
        title="Stunning Design"
        description=" provides components with stunning design and animations."
        icon={<FaRocket />}
    />
    <FeatureCard
        title="Easy to Use"
        description=" is easy to use and customize. It is built with Tailwind CSS."
        icon={<FaClipboard />}
    />
    <FeatureCard
        title="Customization"
        description=" provides customization options to make it easy to fit your brand."
        icon={<FaMousePointer />}
    />
</div>`}
              />

            </>
          )}
          {activeTab === "cli" && (
            <>
              <CodeBlock
                title="cli not available right now"
                lang="py"
                code={`cli of this component is comming soon`}
              />

            </>
          )}

        </main>
      </DocsLayout>
    </>
  );
};

export default featuresection;
