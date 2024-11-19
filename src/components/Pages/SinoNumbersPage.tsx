import { useEffect, useState } from "react";
import PageWrapper from "../UI/PageWrapper";
import { getSinoNumber } from "../Functions/getSinoNumber";
import QuestionTitle from "../UI/QuestionTitle";
import HomeBtn from "../UI/HomeBtn";
import NumbersSettings from "../Settings/NumbersSettings";
import Input from "../UI/Input";
import Results from "../UI/Results";

export default function SinoNumbersPage() {
  const [numDigits, setNumDigits] = useState(2);
  const [selectedIntNumber, setSelectedIntNumber] = useState<number>();
  const [selectedSinoNumber, setSelectedSinoNumber] = useState<string>();
  const [answerInKorean, setAnswerInKorean] = useState(false);
  const [inputTxt, setInputTxt] = useState("");
  const [rightAnswer, setRightAnswer] = useState<boolean>();
  const [changeNumber, setChangeNumber] = useState(0);

  useEffect(() => {
    setRightAnswer(undefined);
    setInputTxt("");

    let randNum = 0;

    if (numDigits === 1) {
      randNum = getRandNum(10);
    } else if (numDigits === 2) {
      randNum = getRandNum(100);
    } else if (numDigits === 3) {
      randNum = getRandNum(1000);
    } else if (numDigits === 4) {
      randNum = getRandNum(1000);
    } else if (numDigits === 5) {
      randNum = getRandNum(10000);
    } else if (numDigits === 6) {
      randNum = getRandNum(100000);
    } else {
      randNum = getRandNum(1000000);
    }

    let sinoNum = getSinoNumber(randNum);

    setSelectedIntNumber(randNum);
    setSelectedSinoNumber(sinoNum);
  }, [answerInKorean, changeNumber, numDigits]);

  const checkUserAnswer = (e: any) => {
    if (e.key !== "Enter") return;

    if (answerInKorean) {
      if (e.target.value === selectedSinoNumber) {
        setRightAnswer(true);
      } else {
        setRightAnswer(false);
      }
    } else {
      let userValue = Number(e.target.value);

      if (userValue === selectedIntNumber) {
        setRightAnswer(true);
        console.log("Correct");
      } else {
        setRightAnswer(false);
        console.log("Incorrect");
      }
    }

    e.target.blur();
  };

  return (
    <PageWrapper>
      <div>
        <QuestionTitle
          answerInKorean={answerInKorean}
          showRomanQuestion={selectedIntNumber}
          showKoreanQuestion={selectedSinoNumber}
        />

        <Input
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
          checkUserAnswer={checkUserAnswer}
          rightAnswer={rightAnswer}
        />

        <Results
          rightAnswer={rightAnswer}
          answer={answerInKorean ? selectedSinoNumber : selectedIntNumber}
          setChange={setChangeNumber}
        />
      </div>

      <div className="flex justify-center gap-8">
        <HomeBtn />
        <NumbersSettings
          answerInKorean={answerInKorean}
          setAnswerInKorean={setAnswerInKorean}
          numDigits={numDigits}
          setNumDigits={setNumDigits}
        />
      </div>
    </PageWrapper>
  );
}

export const getRandNum = (num: number) => {
  return Math.floor(Math.random() * num);
};
