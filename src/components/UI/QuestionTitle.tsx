import { motion } from "framer-motion";

type QuestionTitleProps = {
  answerInKorean: boolean;
  showRomanQuestion: number | string | undefined;
  showKoreanQuestion: string | undefined;
};

const questionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function QuestionTitle({
  answerInKorean,
  showKoreanQuestion,
  showRomanQuestion,
}: QuestionTitleProps) {
  return (
    <motion.span
      className="flex justify-center text-center text-6xl font-bold pb-20 capitalize"
      variants={questionVariants}
      initial="hidden"
      animate="visible"
      key={showRomanQuestion}
    >
      {answerInKorean && showRomanQuestion}
      {answerInKorean === false && showKoreanQuestion}
    </motion.span>
  );
}
