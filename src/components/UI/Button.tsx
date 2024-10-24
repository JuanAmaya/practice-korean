type ButtonProps = {
  setChangeVerb: React.Dispatch<React.SetStateAction<number>>;
};

export default function Button({ setChangeVerb }: ButtonProps) {
  const handleNextVerb = () => {
    setChangeVerb((prev) => prev + 1);
  };

  return (
    <button
      onClick={handleNextVerb}
      className="bg-greenKRN w-full rounded-md px-2 py-1 text-2xl transition-colors
        hover:bg-brownKRN
        hover:text-whiteKRN
        focus:bg-brownKRN
        focus:text-whiteKRN
        "
    >
      Next Verb
    </button>
  );
}
