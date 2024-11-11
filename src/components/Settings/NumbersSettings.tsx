import { useState } from "react";
import SettingsTooth from "../../assets/SettingsTooth";
import XMark from "../../assets/XMark";
import SwitchOption from "./SwitchOption";
import { AnimatePresence, motion } from "framer-motion";

type NumberSettingsProps = {
  answerInKorean: boolean;
  setAnswerInKorean: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const SettingsVariants = {
  hidden: {
    y: 400,
  },
  visible: {
    y: 0,
  },
};

export default function NumbersSettings({
  answerInKorean,
  setAnswerInKorean,
}: NumberSettingsProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setShowSettings((prev) => !prev)}
          className={`border-3 border-brownKRN rounded-md hover:bg-brownKRN transition-colors p-1 ${
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

      <AnimatePresence>
        {showSettings && (
          <>
            <motion.div
              className="fixed left-0 top-0 w-screen h-screen bg-black/40 z-10"
              onClick={() => setShowSettings(false)}
              variants={ModalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />

            <motion.div
              className="bg-whiteKRN border-t-2 border-brownKRN fixed bottom-0 left-0 w-screen pb-8 z-20"
              variants={SettingsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex justify-between p-2 mx-auto max-w-2xl px-7 mb-4">
                <span className="text-2xl font-bold">Settings</span>
                <button onClick={() => setShowSettings(false)}>
                  <XMark />
                </button>
              </div>

              <div className="flex justify-around max-w-xl mx-auto">
                <SwitchOption
                  activeOption={answerInKorean}
                  setActiveOption={setAnswerInKorean}
                  option1="English"
                  option2="Korean"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
