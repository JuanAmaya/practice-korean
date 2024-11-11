type InputProps = {
  setInputTxt: React.Dispatch<React.SetStateAction<string>>;
  inputTxt: string;
  checkUserAnswer: (e: any) => void;
  rightAnswer: boolean | undefined;
};

export default function Input({
  setInputTxt,
  inputTxt,
  checkUserAnswer,
  rightAnswer,
}: InputProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTxt(e.target.value);
  };

  return (
    <div className="max-w-screen-sm mx-auto mt-8">
      <input
        type="text"
        className="border-3 rounded-md border-brownKRN text-2xl px-2 py-1 bg-transparent w-full text-center placeholder:text-brownKRN/60"
        placeholder="Write here"
        onKeyDown={checkUserAnswer}
        onInput={handleInput}
        disabled={rightAnswer !== undefined}
        value={inputTxt}
      />
    </div>
  );
}
