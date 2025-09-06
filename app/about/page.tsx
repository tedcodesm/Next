"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



const AboutPage = () => {
  const [username, setUsername] = useState("Ted");
  return (
    <div className="m-10 items-center  ">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>This is the About page</AccordionTrigger>
          <AccordionContent>
            Hello {username}, welcome to the About page of our Next.js
            application!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutPage;
