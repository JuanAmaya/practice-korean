import { useState } from "react";
import SettingsTooth from "../assets/SettingsTooth";
import SettingOptions from "./UI/SettingOptions";
import { AnimatePresence, motion } from "framer-motion";
import XMark from "../assets/XMark";

type VerbsSettingsProps = {
  casualPoliteness: boolean;
  politePoliteness: boolean;
  formalPoliteness: boolean;
  setCasualPoliteness: React.Dispatch<React.SetStateAction<boolean>>;
  setPolitePoliteness: React.Dispatch<React.SetStateAction<boolean>>;
  setFormalPoliteness: React.Dispatch<React.SetStateAction<boolean>>;
  pastTense: boolean;
  presentTense: boolean;
  futureTense: boolean;
  setPastTense: React.Dispatch<React.SetStateAction<boolean>>;
  setPresentTense: React.Dispatch<React.SetStateAction<boolean>>;
  setFutureTense: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function VerbsSettings({
  casualPoliteness,
  politePoliteness,
  formalPoliteness,
  setCasualPoliteness,
  setPolitePoliteness,
  setFormalPoliteness,
  pastTense,
  presentTense,
  futureTense,
  setPastTense,
  setPresentTense,
  setFutureTense,
}: VerbsSettingsProps) {
  const POLITENESS = [
    {
      id: 0,
      name: "Casual",
      setPoliteness: setCasualPoliteness,
      politeness: casualPoliteness,
    },
    {
      id: 1,
      name: "Polite",
      setPoliteness: setPolitePoliteness,
      politeness: politePoliteness,
    },
    {
      id: 2,
      name: "Formal",
      setPoliteness: setFormalPoliteness,
      politeness: formalPoliteness,
    },
  ];

  const TENSE = [
    {
      id: 3,
      name: "Past",
      setPoliteness: setPastTense,
      politeness: pastTense,
    },
    {
      id: 4,
      name: "Present",
      setPoliteness: setPresentTense,
      politeness: presentTense,
    },
    {
      id: 5,
      name: "Future",
      setPoliteness: setFutureTense,
      politeness: futureTense,
    },
  ];

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center"
      >
        <button
          onClick={() => setShowSettings((prev) => !prev)}
          className={`border-2 border-brownKRN rounded-md hover:bg-brownKRN transition-colors ${
            showSettings ? "bg-brownKRN" : "bg-whiteKRN"
          }`}
        >
          <SettingsTooth
            styles={`hover:text-whiteKRN transition-colors ${
              showSettings ? "text-whiteKRN" : "text-brownKRN"
            }`}
          />
        </button>
      </motion.div>

      <AnimatePresence>
        {showSettings && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={"modal"}
              className="fixed left-0 top-0 w-screen h-screen bg-black/40 z-10"
              onClick={() => setShowSettings(false)}
            />
            <motion.div
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              exit={{ y: 400 }}
              key={"settings"}
              className="bg-whiteKRN border-t-2 border-brownKRN fixed bottom-0 left-0 w-screen pb-8 z-20"
            >
              <div className="flex justify-between p-2 mx-auto max-w-2xl px-7">
                <span className="text-2xl font-bold">Settings</span>
                <button onClick={() => setShowSettings(false)}>
                  <XMark />
                </button>
              </div>
              <div className="flex justify-around max-w-xl mx-auto">
                <SettingOptions title="Politeness" optionsData={POLITENESS} />
                <div className="w-1 bg-brownKRN m-4" />
                <SettingOptions title="Tense" optionsData={TENSE} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
