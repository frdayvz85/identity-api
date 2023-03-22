import DocumentationTabs from "@/components/DocumentationTabs";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";
import { FC } from "react";
import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Identity API | Documentation",
  description: "Free & open-source text identity API",
};

const page: FC = ({}) => {
  return (
    <div className="conainer max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/identity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
