import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";
import { useState } from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { format } from "date-fns";
import { Datepicker } from "@/components/edithspace-ui/Datepicker";
import { Table } from "@/components/edithspace-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const data = [
  {
    propName: "value",
    propType: "Date",
    defaultValue: "null",
    description: "Value of the datepicker",
  },
  {
    propName: "onChange",
    propType: "Function",
    defaultValue: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    propName: "className",
    propType: "String",
    defaultValue: "null",
    description: "className for the datepicker",
  },
];

const columns = [
  {
    label: "Prop Name",
    key: "propName",
  },
  {
    label: "Prop Type",
    key: "propType",
  },
  {
    label: "Default Value",
    key: "defaultValue",
  },
  {
    label: "Description",
    key: "description",
  },
];

const datepicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  return (
    <>
      <DocsSEO
        title="Date Picker - edithspace/ui"
        description="The Date Picker component lets users select a date."
        image="https://i.imgur.com/xXlUTna.png"
      />
      <DocsLayout>
        <main>
          {" "}
          <DocsHeader
            title="Date Picker"
            description="The Date Picker component lets users select a date."
          />
          <DocsPreview className="h-[30rem] items-center justify-start">
            <div className="flex flex-col gap-1">
              <Datepicker value={selectedDate} onChange={handleDateChange} />
              <p className="text-sm text-center opacity-80">
                Selected Date:{" "}
                {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "None"}
              </p>
            </div>
          </DocsPreview>
          <InstallationSteps component="Datepicker" imports={["Datepicker"]} />
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { useState } from "react";
import { Datepicker } from "@/components/edithspace-ui/Datepicker";

export const Home = () => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    const handleDateChange = (date: Date | undefined) => {
      setSelectedDate(date);
    };
    
    return (
        <>
          <Datepicker value={selectedDate} onChange={handleDateChange} />
        </>
    );
}`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default datepicker;
