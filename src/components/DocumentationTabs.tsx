"use client";

import { nodejs, python } from "@/helpers/documentation-code";
import { FC } from "react";
import SimpleBar from "simplebar-react";
import Code from "./Code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

interface DocumentationTabsProps {}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full py-3">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>

      <TabsContent value="nodejs">
        <SimpleBar>
          <Code animated language="javascript" code={nodejs} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <Code animated language="python" code={python} show />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
