import HappyFace from "../../assets/HappyFace";
import SadFace from "../../assets/SadFace";
import { Conjugations } from "../VerbsPage";
import Button from "./Button";

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
    <div>
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

      {rightAnswer !== undefined && <Button setChangeVerb={setChangeVerb} />}
    </div>
  );
}
