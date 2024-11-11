import { useEffect, useState } from "react";
import Input from "../UI/Input";
import HomeBtn from "../UI/HomeBtn";
import { getPureNumber } from "../Functions/getPureNumber";
import Results from "../UI/Results";
import NumbersSettings from "../Settings/NumbersSettings";
import QuestionTitle from "../UI/QuestionTitle";

export default function NumbersPage() {
  const [selectedPureNumber, setSelectedPureNumber] = useState<string>();
  const [selectedIntNumber, setSelectedIntNumber] = useState<number>();
  const [inputTxt, setInputTxt] = useState("");
  const [rightAnswer, setRightAnswer] = useState<boolean>();
  const [changeNumber, setChangeNumber] = useState(0);
  const [answerInKorean, setAnswerInKorean] = useState(false);

  useEffect(() => {
    setRightAnswer(undefined);
    setInputTxt("");

    let randNum = Math.floor(Math.random() * (99 - 0) + 0);
    setSelectedIntNumber(randNum);

    let pureNumber = getPureNumber(randNum);

    setSelectedPureNumber(pureNumber);
  }, [changeNumber, answerInKorean]);

  const checkUserAnswer = (e: any) => {
    if (e.key !== "Enter") return;

    if (answerInKorean) {
      if (e.target.value === selectedPureNumber) {
        setRightAnswer(true);
      } else {
        setRightAnswer(false);
      }
    } else {
      let userValue = Number(e.target.value);
      let userNumber = getPureNumber(userValue);

      if (userNumber == selectedPureNumber) {
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
    <div className="m-8 pt-6 h-screen grid max-h-screen items-start">
      <div>
        <QuestionTitle
          answerInKorean={answerInKorean}
          showRomanQuestion={selectedIntNumber}
          showKoreanQuestion={selectedPureNumber}
        />

        <Input
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
          checkUserAnswer={checkUserAnswer}
          rightAnswer={rightAnswer}
        />

        <Results
          rightAnswer={rightAnswer}
          answer={answerInKorean ? selectedPureNumber : selectedIntNumber}
          setChange={setChangeNumber}
        />
      </div>

      <div className="flex justify-center gap-8">
        <HomeBtn />
        <NumbersSettings
          answerInKorean={answerInKorean}
          setAnswerInKorean={setAnswerInKorean}
        />
      </div>
    </div>
  );
}
