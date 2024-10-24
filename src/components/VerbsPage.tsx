import Button from "./UI/Button";
import VERBS from "../data/VERBS.json";
import { useEffect, useState } from "react";
import HappyFace from "../assets/HappyFace";
import SadFace from "../assets/SadFace";

type Conjugations = {
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

  useEffect(() => {
    setRightAnswer(undefined);
    let randNumVerb = Math.floor(Math.random() * VERBS.length);
    let randNumTense = Math.floor(Math.random() * 2);
    let randNumPoliteness = Math.floor(Math.random() * 2);

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
      console.log("Correct");
      setRightAnswer(true);
    } else {
      console.log("Incorrect");
      setRightAnswer(false);
    }
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

      <div className="min-h-72">
        {rightAnswer && (
          <div className="flex flex-col items-center p-8">
            <HappyFace styles={"text-greenKRN"} />
            <span className="uppercase text-greenKRN font-semibold text-3xl">
              Correct!
            </span>
          </div>
        )}
        {rightAnswer === false && (
          <div className="flex flex-col items-center p-8">
            <SadFace styles={"text-redKRN"} />
            <span className="uppercase text-redKRN font-semibold text-3xl">
              Wrong
            </span>
            <div className="flex flex-col text-center mt-2">
              <span className="text-2xl">The answer was</span>
              <span className="text-2xl font-bold">
                {selectedPoliteness?.conjugation}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 max-w-screen-sm mx-auto">
        <input
          type="text"
          className="border-2 rounded-md border-brownKRN text-2xl px-2 py-1 bg-transparent w-full text-center placeholder:text-brownKRN/60"
          placeholder="Write here"
          onKeyDown={checkUserAnswer}
          disabled={rightAnswer !== undefined}
        />

        {rightAnswer !== undefined && <Button setChangeVerb={setChangeVerb} />}
      </div>
    </div>
  );
}
