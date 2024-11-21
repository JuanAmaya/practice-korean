type getTensePolitenesProps = {
  opt1: boolean;
  opt2: boolean;
  opt3: boolean;
  randNum: number;
  setDefault: React.Dispatch<React.SetStateAction<boolean>>;
};

export const getTensePoliteness = ({
  opt1,
  opt2,
  opt3,
  randNum,
  setDefault,
}: getTensePolitenesProps) => {
  let num = 0;

  if (opt1 && opt2 && opt3) {
    randNum = Math.floor(Math.random() * 3);
  } else if (opt1 && !opt2 && !opt3) {
    randNum = 1;
  } else if (!opt1 && opt2 && !opt3) {
    randNum = 0;
  } else if (!opt1 && !opt2 && opt3) {
    randNum = 2;
  } else if (opt1 && opt2 && !opt3) {
    randNum = Math.floor(Math.random() * 2);
  } else if (opt1 && !opt2 && opt3) {
    num = Math.floor(Math.random() * 2);
    if (num === 0) {
      randNum = 0;
    } else {
      randNum = 2;
    }
  } else if (!opt1 && opt2 && opt3) {
    randNum = Math.floor(Math.random() * 2) + 1;
  } else if (!opt1 && !opt2 && !opt3) {
    setDefault(true);
  }

  return randNum;
};
