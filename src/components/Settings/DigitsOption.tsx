import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

type DigitsOptionProps = {
  numDigits: number;
  setNumDigits: (num: number) => void;
};

const ModalVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
  },
};

export default function DigitsOption({
  numDigits,
  setNumDigits,
}: DigitsOptionProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleSelection = (i: number) => {
    let num = i + 1;
    setNumDigits(num);
    setOpenModal(false);
  };

  return (
    <div className="max-w-xl px-7 mx-auto pt-4">
      <span className="text-2xl underline">Digits</span>

      <div className="border-3 border-md border-brownKRN p-2 rounded-md w-fit mx-auto cursor-pointer hover:bg-brownKRN hover:text-whiteKRN transition-colors">
        <span
          className="text-2xl px-14 font-medium"
          onClick={() => setOpenModal((prev) => !prev)}
        >
          {numDigits}
        </span>
      </div>

      <AnimatePresence>
        {openModal && (
          <>
            <div
              className="fixed left-0 top-0 w-screen h-screen z-10"
              onClick={() => setOpenModal(false)}
            />

            <motion.ol
              className="absolute bg-whiteKRN -top-full left-0 right-0 flex flex-col items-center border-3 p-2 border-brownKRN rounded-md w-fit mx-auto z-20"
              variants={ModalVariants}
              initial="hidden"
              animate="visible"
              exit="out"
            >
              {[...Array(7)].map((_, i) => (
                <li
                  key={i}
                  className="py-2 px-14 hover:bg-brownKRN hover:text-whiteKRN rounded-md cursor-pointer transition-colors"
                  onClick={() => handleSelection(i)}
                >
                  <span className="text-2xl font-medium">{i + 1}</span>
                </li>
              ))}
            </motion.ol>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
