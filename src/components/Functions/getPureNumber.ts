export const getPureNumber = (numPassed: number) => {
  let tenths = Math.floor(numPassed / 10);
  let oneFig = Math.floor(numPassed - tenths * 10);
  let pureNumber = "";

  switch (tenths) {
    case 1:
      pureNumber += "열";
      break;

    case 2:
      pureNumber += "스물";
      break;

    case 3:
      pureNumber += "서른";
      break;

    case 4:
      pureNumber += "마흔";
      break;

    case 5:
      pureNumber += "쉰";
      break;

    case 6:
      pureNumber += "예순";
      break;

    case 7:
      pureNumber += "일흔";
      break;

    case 8:
      pureNumber += "여든";
      break;

    case 9:
      pureNumber += "아흔";
      break;
  }

  switch (oneFig) {
    case 0:
      pureNumber += "영";
      break;

    case 1:
      pureNumber += "하나";
      break;

    case 2:
      pureNumber += "둘";
      break;

    case 3:
      pureNumber += "셋";
      break;

    case 4:
      pureNumber += "넷";
      break;

    case 5:
      pureNumber += "다섯";
      break;

    case 6:
      pureNumber += "여섯";
      break;

    case 7:
      pureNumber += "일곱";
      break;

    case 8:
      pureNumber += "여덟";
      break;

    case 9:
      pureNumber += "아홉";
      break;
  }

  return pureNumber;
};
