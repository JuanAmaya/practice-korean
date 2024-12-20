import VERBS from "../../data/VERBS.json";
import { useEffect, useState } from "react";
import Input from "../UI/Input";
import VerbsSettings from "../Settings/VerbsSettings";
import { motion } from "framer-motion";
import HomeBtn from "../UI/HomeBtn";
import Results from "../UI/Results";
import PageWrapper from "../UI/PageWrapper";
import { getTensePoliteness } from "../Functions/getTensePoliteness";

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

const verbVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
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

    randNumTense = getTensePoliteness({
      opt1: pastTense,
      opt2: presentTense,
      opt3: futureTense,
      randNum: randNumTense,
      setDefault: setPastTense,
    });

    randNumPoliteness = getTensePoliteness({
      opt1: casualPoliteness,
      opt2: politePoliteness,
      opt3: formalPoliteness,
      randNum: randNumPoliteness,
      setDefault: setCasualPoliteness,
    });

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
    } else {
      setRightAnswer(false);
    }
    e.target.blur();
  };

  return (
    <PageWrapper>
      <motion.div variants={verbVariants} initial="hidden" animate="visible">
        {selectedVerb !== undefined && (
          <motion.div
            key={selectedVerb.verb}
            variants={verbVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
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
              variants={verbVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
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

        <Results
          rightAnswer={rightAnswer}
          answer={selectedPoliteness?.conjugation}
          setChange={setChangeVerb}
          title="Verb"
        />
      </motion.div>

      <div className="flex justify-center gap-8">
        <HomeBtn />
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
    </PageWrapper>
  );
}
