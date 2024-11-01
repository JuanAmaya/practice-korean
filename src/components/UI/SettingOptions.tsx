type optionsType = {
  id: number;
  name: string;
  setPoliteness: React.Dispatch<React.SetStateAction<boolean>>;
  politeness: boolean;
};

type SettingOptionsProps = {
  title: string;
  optionsData: optionsType[];
};

export default function SettingOptions({
  title,
  optionsData,
}: SettingOptionsProps) {
  return (
    <div className="w-full">
      <span className="text-2xl underline flex justify-center">{title}</span>
      <ul className="flex flex-col m-4 gap-4">
        {optionsData.map((level) => (
          <button
            onClick={() => {
              //   if (
              //     !casualPoliteness &&
              //     !politePoliteness &&
              //     formalPoliteness &&
              //     level.name == "Formal"
              //   )
              //     return;
              //   if (
              //     !casualPoliteness &&
              //     politePoliteness &&
              //     !formalPoliteness &&
              //     level.name === "Polite"
              //   )
              //     return;
              //   if (
              //     casualPoliteness &&
              //     !politePoliteness &&
              //     !formalPoliteness &&
              //     level.name === "Casual"
              //   )
              //     return;

              level.setPoliteness((prev) => !prev);
            }}
            className={`border-2 border-brownKRN rounded-md transition-colors ${
              level.politeness ? "bg-greenKRN" : "bg-redKRN"
            }`}
          >
            <li key={level.id} className="text-3xl">
              {level.name}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
}
