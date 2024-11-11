import { useEffect, useState } from "react";
import WEEKDAYS from "../../data/WEEKDAYS.json";
import QuestionTitle from "../UI/QuestionTitle";
import HomeBtn from "../UI/HomeBtn";
import NumbersSettings from "../Settings/NumbersSettings";
import Input from "../UI/Input";
import Results from "../UI/Results";

export default function WeekdaysPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [answerInKorean, setAnswerInKorean] = useState(false);
  const [rightAnswer, setRightAnswer] = useState<boolean>();
  const [inputTxt, setInputTxt] = useState("");
  const [changeDay, setChangeDay] = useState(0);

  useEffect(() => {
    setRightAnswer(undefined);
    setInputTxt("");

    let randNum = Math.floor(Math.random() * WEEKDAYS.length);
    console.log(WEEKDAYS[randNum]);
    setSelectedDay(randNum);
  }, [answerInKorean, changeDay]);

  const checkUserAnswer = (e: any) => {
    if (e.key !== "Enter") return;

    if (answerInKorean) {
      if (e.target.value === WEEKDAYS[selectedDay].dayKRN) {
        setRightAnswer(true);
      } else {
        setRightAnswer(false);
      }
    } else {
      if (e.target.value.toLowerCase() === WEEKDAYS[selectedDay].dayENG) {
        setRightAnswer(true);
      } else {
        setRightAnswer(false);
      }
    }
  };

  return (
    <div className="m-8 pt-6 h-screen grid max-h-screen items-start">
      <div>
        <QuestionTitle
          answerInKorean={answerInKorean}
          showRomanQuestion={WEEKDAYS[selectedDay].dayENG}
          showKoreanQuestion={WEEKDAYS[selectedDay].dayKRN}
        />

        <Input
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
          checkUserAnswer={checkUserAnswer}
          rightAnswer={rightAnswer}
        />

        <Results
          rightAnswer={rightAnswer}
          answer={
            answerInKorean
              ? WEEKDAYS[selectedDay].dayKRN
              : WEEKDAYS[selectedDay].dayENG
          }
          setChange={setChangeDay}
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
