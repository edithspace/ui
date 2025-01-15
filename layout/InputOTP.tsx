import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { OTP } from "@/components/edithspace-ui/InputOTP";
import { useState } from "react";
import { Toast } from "@/components/edithspace-ui/Toast";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const otp = () => {
  const [otpValue, setOtpValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleOTPChange = (value: string) => {
    setOtpValue(value);
    toggleToast();
    console.log("OTP Value:", value);
  };

  return (
    <>
      <DocsSEO
        title="Input OTP - edithspace/ui"
        description="An Input component for OTP."
        image="https://i.imgur.com/xXlUTna.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Input OTP"
            description="An Input component for OTP."
          />
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <OTP setValue={handleOTPChange} />
            </div>
          </div>
          <InstallationSteps component="InputOTP" imports="InputOTP" />
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { useState } from "react";
          
export const Home = () => {
  const [otpValue, setOtpValue] = useState("");

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
     <OTP setValue={handleOTPChange} />
    </>
  );
}
`}
          />
          <Toast
             text={otpValue === "012345" ? "You cracked it genius!" : "Wrong OTP!!"}
             icon={otpValue === "012345" ? "success" : otpValue === "" ? "warning" : "error"}
            showToast={showToast}
            onCancel={toggleToast}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default otp;
