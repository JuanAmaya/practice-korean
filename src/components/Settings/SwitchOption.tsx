type SwitchOptionProps = {
  activeOption: boolean;
  setActiveOption: React.Dispatch<React.SetStateAction<boolean>>;
  option1: string;
  option2: string;
};

type OptionButtonProps = {
  title: string;
  activeFN: () => void;
  styles: string;
};

export default function SwitchOption({
  activeOption,
  setActiveOption,
  option1,
  option2,
}: SwitchOptionProps) {
  return (
    <div className="w-full">
      <ul className="grid grid-cols-2 gap-8 max-w-xl mx-auto">
        <OptionButton
          title={option1}
          activeFN={() => setActiveOption(false)}
          styles={activeOption ? "bg-redKRN" : "bg-greenKRN"}
        />
        <OptionButton
          title={option2}
          activeFN={() => setActiveOption(true)}
          styles={activeOption ? "bg-greenKRN" : "bg-redKRN"}
        />
      </ul>
    </div>
  );
}

export function OptionButton({ title, activeFN, styles }: OptionButtonProps) {
  return (
    <li
      className={`border-2 border-brownKRN rounded-md transition-colors text-3xl mx-4 flex justify-center ${styles}`}
    >
      <button onClick={activeFN}>{title}</button>
    </li>
  );
}
