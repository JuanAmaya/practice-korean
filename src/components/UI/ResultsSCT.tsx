import { Conjugations } from "../VerbsPage";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

type ResultsProps = {
  rightAnswer: boolean | undefined;
  selectedPoliteness: Conjugations;
  setChangeVerb: React.Dispatch<React.SetStateAction<number>>;
};

export default function ResultsSCT({
  rightAnswer,
  selectedPoliteness,
  setChangeVerb,
}: ResultsProps) {
  return (
    <AnimatePresence>
      {rightAnswer && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"Happy"}
          className="flex flex-col items-center p-8"
        >
          <span className="text-greenKRN font-semibold text-3xl">
            Correct! :&#41;
          </span>
        </motion.div>
      )}
      {rightAnswer === false && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"Wrong"}
          className="flex flex-col items-center p-8"
        >
          <span className="text-redKRN font-semibold text-3xl">
            Wrong :&#40;
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            }}
            className="flex flex-col text-center mt-2"
          >
            <span className="text-2xl">The answer was</span>
            <span className="text-2xl font-bold">
              {selectedPoliteness?.conjugation}
            </span>
          </motion.div>
        </motion.div>
      )}

      {rightAnswer !== undefined && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            }}
            exit={{ opacity: 0 }}
            key={"ResultsButton"}
            className="max-w-lg mx-auto"
          >
            <Button setChangeVerb={setChangeVerb} />{" "}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
