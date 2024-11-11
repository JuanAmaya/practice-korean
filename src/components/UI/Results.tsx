import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

type AnswerTitleProps = {
  rightAnswer: boolean | undefined;
  answer: string | number | undefined;
};

type ResultsProps = {
  setChange: React.Dispatch<React.SetStateAction<number>>;
} & AnswerTitleProps;

const resultsVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const answerWasVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

export default function Results({
  rightAnswer,
  answer,
  setChange,
}: ResultsProps) {
  return (
    <AnimatePresence>
      {rightAnswer && <AnswerTitle rightAnswer={rightAnswer} answer={answer} />}
      {rightAnswer == false && (
        <AnswerTitle rightAnswer={rightAnswer} answer={answer} />
      )}

      {rightAnswer !== undefined && (
        <motion.div
          className="max-w-lg mx-auto"
          variants={answerWasVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Button setChange={setChange} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AnswerTitle({ rightAnswer, answer }: AnswerTitleProps) {
  return (
    <motion.div
      className="flex flex-col items-center p-8"
      variants={resultsVariants}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <span
        className={`font-semibold text-3xl ${
          rightAnswer ? "text-greenKRN" : "text-redKRN"
        }`}
      >
        {rightAnswer && "Correct! :)"}
        {rightAnswer === false && "Wrong :("}
      </span>

      {rightAnswer === false && (
        <motion.div
          className="flex flex-col text-center mt-2"
          variants={answerWasVariants}
        >
          <span className="text-2xl">The answer was</span>
          <span className="text-2xl font-bold capitalize">{answer}</span>
        </motion.div>
      )}
    </motion.div>
  );
}
