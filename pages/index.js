import { useEffect, useState } from "react";
import Head from "next/head";
import ReactGA from "react-ga";
import request from "../util/requests/request";
import SensitivityInput from "../components/SensitivityInput";
import SensitivityOutput from "../components/SensitivityOutput";
import LoadoutAccordion from "../components/LoadoutAccordion";
import Modal from "../components/Modal";

import { calculateTurnModifier } from "../util/sensitivity";
import {
  extractTable,
  mapArmorVestsData,
  mapHelmetsData,
  mapRigsData,
  mapVisorsData,
} from "../util/data";
import ItemCard from "../components/ItemCard";
import { buttonClass } from "../util/css";

/**
 * todo list
 * - add a cron job to check if each page has changed and then notify me if they have
 */

/**
 * Names
 * Tarkov Gear Sensitivity Calculator
 * Tarkov Turn Speed Fix
 * Tarkov Turn Speed Calculator
 */

export default function Home({ armorVests, rigs, helmets, visors }) {
  const [dpi, setDpi] = useState(undefined);
  const [hipfire, setHipfire] = useState(undefined);
  const [aimed, setAimed] = useState(undefined);

  const [vest, setVest] = useState(undefined);
  const [helmet, setHelmet] = useState(undefined);
  const [rig, setRig] = useState(undefined);
  const [visor, setVisor] = useState(undefined);

  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    // close modal if visited
    if (!!window.localStorage.getItem("user_settings")) {
      setModalIsOpen(false);
    }

    // google analytics
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID, {
      debug: true,
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
    ReactGA.pageview("/");
    console.log("reactga was initialised");
  }, []);

  return (
    <div>
      <Head>
        <title>Tarkov Gear Sensitivity Calculator</title>
        <meta
          name="description"
          content="Equipment/Armor Mouse Sensitivity Calculator to fix armor affecting turn speed in Escape from Tarkov"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}></Modal>
      <main className="border-box flex items-center justify-center h-screen w-screen overflow-hidden font-bender box-border">
        <div className="w-full h-full max-h-screen max-w-screen bg-background">
          <div className="flex items-start">
            <div
              id="sidebar"
              className="max-w-sidebar flex flex-col justify-between p-4 bg-background text-white border-r-2 h-screen border-outline overflow-y-auto "
            >
              <div>
                <div className="flex justify-between mb-4">
                  <h1 className="font-bold text-2xl">
                    Tarkov Gear Sensitivity Calculator
                  </h1>
                  <button
                    className={buttonClass}
                    onClick={() => {
                      setModalIsOpen(true);
                    }}
                  >
                    ?
                  </button>
                </div>
                <SensitivityInput
                  dpi={dpi}
                  setDpi={setDpi}
                  hipfire={hipfire}
                  setHipfire={setHipfire}
                  aimed={aimed}
                  setAimed={setAimed}
                  change={calculateTurnModifier(vest, rig, helmet, visor)}
                />
                <SensitivityOutput
                  dpi={dpi}
                  hipfire={hipfire}
                  aimed={aimed}
                  modifier={calculateTurnModifier(vest, rig, helmet, visor)}
                />
              </div>

              <div className="grid grid-cols-2">
                {vest && (
                  <ItemCard
                    item={vest}
                    folder="vests"
                    classes=" hover:bg-danger group"
                    onClick={() => {
                      setVest(undefined);
                    }}
                  />
                )}
                {rig && (
                  <ItemCard
                    item={rig}
                    folder="rigs"
                    classes=" hover:bg-danger group"
                    onClick={() => {
                      setRig(undefined);
                    }}
                  />
                )}
                {helmet && (
                  <ItemCard
                    item={helmet}
                    folder="helmets"
                    classes=" hover:bg-danger group"
                    onClick={() => {
                      setHelmet(undefined);
                    }}
                  />
                )}
                {visor && (
                  <ItemCard
                    item={visor}
                    folder="visors"
                    classes=" hover:bg-danger group"
                    onClick={() => {
                      setVisor(undefined);
                    }}
                  />
                )}
              </div>
            </div>
            <div
              id="loadout"
              className="w-full relative h-screen overflow-y-auto"
            >
              <LoadoutAccordion
                {...{
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
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const armorVestsRes = await request("Armor_vests");
  const rigsRes = await request("Chest_rigs");
  const helmetsRes = await request("Headwear");
  const visorsRes = await request("Gear_components#Visors");

  return {
    props: {
      armorVests: mapArmorVestsData(
        extractTable({ htmlPage: armorVestsRes, tablePos: 0 })
      ),
      rigs: mapRigsData(extractTable({ htmlPage: rigsRes, tablePos: 0 })),
      helmets: mapHelmetsData(
        extractTable({ htmlPage: helmetsRes, tablePos: 1 })
      ),
      visors: mapVisorsData(
        extractTable({
          htmlPage: visorsRes,
          tablePos: 3,
        })
      ),
    },
  };
};
