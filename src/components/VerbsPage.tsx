import VERBS from "../data/VERBS.json";
import { useEffect, useState } from "react";
import ResultsSCT from "./UI/ResultsSCT";
import Input from "./UI/Input";
import VerbsSettings from "./VerbsSettings";
import { AnimatePresence, motion } from "framer-motion";

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
  const [casualPoliteness, setCasualPoliteness] = useState(true);
  const [politePoliteness, setPolitePoliteness] = useState(true);
  const [formalPoliteness, setFormalPoliteness] = useState(true);
  const [pastTense, setPastTense] = useState(true);
  const [presentTense, setPresentTense] = useState(true);
  const [futureTense, setFutureTense] = useState(true);

  useEffect(() => {
    setRightAnswer(undefined);
    setInputTxt("");

    let randNumVerb = Math.floor(Math.random() * VERBS.length);
    let randNumTense = 0;
    let randNumPoliteness = 0;
    let num = 0;

    if (pastTense && presentTense && futureTense) {
      randNumTense = Math.floor(Math.random() * 3);
    } else if (pastTense && !presentTense && !futureTense) {
      randNumTense = 1;
    } else if (!pastTense && presentTense && !futureTense) {
      randNumTense = 0;
    } else if (!pastTense && !presentTense && futureTense) {
      randNumTense = 2;
    } else if (pastTense && presentTense && !futureTense) {
      randNumTense = Math.floor(Math.random() * 2);
    } else if (pastTense && !presentTense && futureTense) {
      num = Math.floor(Math.random() * 2);
      if (num === 0) {
        randNumTense = 0;
      } else {
        randNumTense = 2;
      }
    } else if (!pastTense && presentTense && futureTense) {
      randNumTense = Math.floor(Math.random() * 2) + 1;
    } else if (!pastTense && !presentTense && !futureTense) {
      setPastTense(true);
    }

    if (casualPoliteness && politePoliteness && formalPoliteness) {
      randNumPoliteness = Math.floor(Math.random() * 3);
    } else if (casualPoliteness && !politePoliteness && !formalPoliteness) {
      randNumPoliteness = 0;
    } else if (!casualPoliteness && politePoliteness && !formalPoliteness) {
      randNumPoliteness = 1;
    } else if (!casualPoliteness && !politePoliteness && formalPoliteness) {
      randNumPoliteness = 2;
    } else if (casualPoliteness && politePoliteness && !formalPoliteness) {
      randNumPoliteness = Math.floor(Math.random() * 2);
    } else if (casualPoliteness && !politePoliteness && formalPoliteness) {
      num = Math.floor(Math.random() * 2);
      if (num === 0) {
        randNumPoliteness = 0;
      } else {
        randNumPoliteness = 2;
      }
    } else if (!casualPoliteness && politePoliteness && formalPoliteness) {
      randNumPoliteness = Math.floor(Math.random() * 2) + 1;
    } else if (!casualPoliteness && !politePoliteness && !formalPoliteness) {
      setCasualPoliteness(true);
    }

    setSelectedVerb(VERBS[randNumVerb]);
    setSelectedTense(VERBS[randNumVerb].vocabulary[randNumTense]);
    setSelectedPoliteness(
      VERBS[randNumVerb].vocabulary[randNumTense].conjugations[
        randNumPoliteness
      ]
    );
  }, [
    changeVerb,
    casualPoliteness,
    politePoliteness,
    formalPoliteness,
    pastTense,
    presentTense,
    futureTense,
  ]);

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
    <div className="m-8 pt-6 h-screen grid max-h-screen items-start">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {selectedVerb !== undefined && (
          <motion.div
            key={selectedVerb.verb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-6xl font-bold">{selectedVerb.verb}</span>
            <span className="text-4xl">
              &#40;{selectedVerb.definition}&#41;
            </span>
          </motion.div>
        )}

        <div className="pt-6 flex flex-col items-center text-center">
          <span className="text-2xl">Conjugate the verb in</span>
          {selectedPoliteness !== undefined && selectedTense !== undefined && (
            <motion.span
              key={selectedTense.tense}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-2xl capitalize"
            >
              {selectedPoliteness.politenessLevel} {selectedTense.tense}
            </motion.span>
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
      </motion.div>

      <VerbsSettings
        casualPoliteness={casualPoliteness}
        politePoliteness={politePoliteness}
        formalPoliteness={formalPoliteness}
        setCasualPoliteness={setCasualPoliteness}
        setPolitePoliteness={setPolitePoliteness}
        setFormalPoliteness={setFormalPoliteness}
        pastTense={pastTense}
        presentTense={presentTense}
        futureTense={futureTense}
        setPastTense={setPastTense}
        setPresentTense={setPresentTense}
        setFutureTense={setFutureTense}
      />
    </div>
  );
}
