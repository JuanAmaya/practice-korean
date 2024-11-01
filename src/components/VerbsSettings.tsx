import { useState } from "react";
import SettingsTooth from "../assets/SettingsTooth";
import SettingOptions from "./UI/SettingOptions";

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
      <div className="flex justify-end mb-4">
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
      </div>

      {showSettings && (
        <div className="bg-whiteKRN border-2 border-brownKRN rounded-md flex justify-around max-w-lg mx-auto mb-4">
          <SettingOptions title="Politeness" optionsData={POLITENESS} />
          <div className="w-1 bg-brownKRN m-4" />
          <SettingOptions title="Tense" optionsData={TENSE} />
        </div>
      )}
    </>
  );
}
