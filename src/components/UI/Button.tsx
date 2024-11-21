type ButtonProps = {
  setChange: React.Dispatch<React.SetStateAction<number>>;
  title: string;
};

export default function Button({ setChange, title }: ButtonProps) {
  const handleNextVerb = () => {
    setChange((prev) => prev + 1);
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
      Next {title}
    </button>
  );
}
