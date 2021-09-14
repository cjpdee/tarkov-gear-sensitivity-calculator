import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function AccordionPanel({ children, heading }) {
  return (
    <AccordionItem className="relative">
      <AccordionItemHeading>
        <AccordionItemButton className="flex top-0 justify-between p-4 bg-background hover:bg-highlight transition-colors duration-75 border-b-2 border-outline text-white font-bold">
          {heading}
          <div>&lt;</div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div
          id="vests"
          className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-background"
        >
          {children}
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
