import { Accordion } from "react-accessible-accordion";
import { getImgName } from "../util/helpers";
import AccordionPanel from "./AccordionPanel";
import ItemCard from "./ItemCard";

export default function LoadoutAccordion({
  armorVests,
  rigs,
  helmets,
  visors,
  vest,
  setVest,
  rig,
  setRig,
  helmet,
  setHelmet,
  visor,
  setVisor,
}) {
  return (
    <Accordion allowZeroExpanded={true}>
      <AccordionPanel heading="Vests">
        {armorVests.map((armorVest) => (
          <ItemCard
            key={armorVest.name}
            folder="vests"
            item={armorVest}
            selected={vest}
            onClick={() => {
              armorVest === vest ? setVest(undefined) : setVest(armorVest);
            }}
          />
        ))}
      </AccordionPanel>

      <AccordionPanel heading="Chest Rigs">
        {rigs.map((chestRig) => (
          <ItemCard
            key={chestRig.name}
            folder="rigs"
            item={chestRig}
            selected={rig}
            onClick={() => {
              chestRig === rig ? setRig(undefined) : setRig(chestRig);
            }}
          />
        ))}
      </AccordionPanel>

      <AccordionPanel heading="Helmets">
        {helmets.map((thisHelmet) => (
          <ItemCard
            key={thisHelmet.name}
            folder="helmets"
            item={thisHelmet}
            selected={helmet}
            onClick={() => {
              thisHelmet === helmet
                ? setHelmet(undefined)
                : setHelmet(thisHelmet);
            }}
          />
        ))}
      </AccordionPanel>

      <AccordionPanel heading="Visors">
        {visors.map((thisVisor) => (
          <ItemCard
            key={thisVisor.name}
            folder="visors"
            item={thisVisor}
            selected={visor}
            onClick={() => {
              thisVisor === visor ? setVisor(undefined) : setVisor(thisVisor);
            }}
          />
        ))}
      </AccordionPanel>
    </Accordion>
  );
}