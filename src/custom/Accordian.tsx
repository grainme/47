/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

export default function CustomAccordian(props: {
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-JB text-[12px]">
          {props.title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="font-GS">{props.description}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
