import VERBS from "../data/VERBS.json";
import { useEffect, useState } from "react";
import ResultsSCT from "./UI/ResultsSCT";
import Input from "./UI/Input";

export type Conjugations = {
  politenessLevel: string;
  conjugation: string;
};

type Vocabulary = {
  tense: string;
  conjugations: Conjugations[];
};

type VerbType = {
  verb: string;
  definition: string;
  vocabulary: Vocabulary[];
};

export default function VerbsPage() {
  const [selectedVerb, setSelectedVerb] = useState<VerbType>();
  const [selectedTense, setSelectedTense] = useState<Vocabulary>();
  const [selectedPoliteness, setSelectedPoliteness] = useState<Conjugations>();
  const [rightAnswer, setRightAnswer] = useState<boolean>();
  const [changeVerb, setChangeVerb] = useState(0);
  const [inputTxt, setInputTxt] = useState("");

  useEffect(() => {
    setRightAnswer(undefined);
    setInputTxt("");

    let randNumVerb = Math.floor(Math.random() * VERBS.length);
    let randNumTense = Math.floor(Math.random() * 3);
    let randNumPoliteness = Math.floor(Math.random() * 3);

    setSelectedVerb(VERBS[randNumVerb]);
    setSelectedTense(VERBS[randNumVerb].vocabulary[randNumTense]);
    setSelectedPoliteness(
      VERBS[randNumVerb].vocabulary[randNumTense].conjugations[
        randNumPoliteness
      ]
    );
  }, [changeVerb]);

  const checkUserAnswer = (e: any) => {
    if (e.key !== "Enter") return;

    if (e.target.value === selectedPoliteness?.conjugation) {
      setRightAnswer(true);
      console.log("Correct");
    } else {
      setRightAnswer(false);
      console.log("Incorrect");
    }
    e.target.blur();
  };

  return (
    <div className="m-8 pt-12">
      {selectedVerb !== undefined && (
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold">{selectedVerb.verb}</span>
          <span className="text-4xl">&#40;{selectedVerb.definition}&#41;</span>
        </div>
      )}

      <div className="pt-6 flex flex-col items-center text-center">
        <span className="text-2xl">Conjugate the verb in</span>
        {selectedPoliteness !== undefined && selectedTense !== undefined && (
          <span className="font-bold text-2xl capitalize">
            {selectedPoliteness.politenessLevel} {selectedTense.tense}
          </span>
        )}
      </div>

      <Input
        setInputTxt={setInputTxt}
        inputTxt={inputTxt}
        rightAnswer={rightAnswer}
        checkUserAnswer={checkUserAnswer}
      />

      <ResultsSCT
        rightAnswer={rightAnswer}
        selectedPoliteness={selectedPoliteness!}
        setChangeVerb={setChangeVerb}
      />
    </div>
  );
}
