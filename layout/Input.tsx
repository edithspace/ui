import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";
import { useState } from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Input } from "@/components/edithspace-ui/Input";
import { Table } from "@/components/edithspace-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const data = [
  {
    propName: "value",
    propType: "String",
    defaultValue: "''",
    description: "Value of the input",
  },
  {
    propName: "onChange",
    propType: "Function",
    defaultValue: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    propName: "placeholder",
    propType: "String",
    defaultValue: "''",
    description: "Placeholder for the input",
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
const input = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <DocsSEO
        title="Input - edithspace/ui"
        description="Collection of Input components with different variants."
        image="https://i.imgur.com/xXlUTna.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Input"
            description="Collection of Input components with different variants."
          />
          <DocsPreview>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter your name..."
            />
          </DocsPreview>
          <InstallationSteps component="Input" imports="Input" />

          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { useState } from "react";

export const Home = () => {
    const [value, setValue] = useState("");
    
    return (
        <>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter your name..."
            />
        </>
    );
}`}
          />
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default input;
