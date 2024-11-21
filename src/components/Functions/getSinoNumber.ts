const SINO_NUMS_ONEDIG = ["일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const SINO_NUMS_MORED = ["십", "백", "천", "만"];

export const getSinoNumber = (numPassed: number) => {
  let sinoNumber = "";
  let arrNum = numPassed.toString().split("");

  for (let i = arrNum.length - 1; i >= 0; i--) {
    if (numPassed === 0) {
      sinoNumber = "영";
      break;
    } else if (numPassed === 10) {
      sinoNumber = SINO_NUMS_MORED[0];
      break;
    } else if (numPassed === 100) {
      sinoNumber = SINO_NUMS_MORED[1];
      break;
    } else if (numPassed === 1000) {
      sinoNumber = SINO_NUMS_MORED[2];
      break;
    } else if (numPassed === 10000) {
      sinoNumber = SINO_NUMS_MORED[3];
      break;
    } else if (numPassed === 100000) {
      sinoNumber = SINO_NUMS_MORED[0] + SINO_NUMS_MORED[3];
      break;
    } else if (numPassed === 1000000) {
      sinoNumber = SINO_NUMS_MORED[1] + SINO_NUMS_MORED[3];
      break;
    }

    if (arrNum.length - i === 7) {
      sinoNumber = SINO_NUMS_MORED[1] + sinoNumber;
    } else if (arrNum.length - i === 6 && Number(arrNum[i]) !== 0) {
      sinoNumber = SINO_NUMS_MORED[0] + sinoNumber;
    } else if (arrNum.length - i === 5) {
      sinoNumber = SINO_NUMS_MORED[3] + " " + sinoNumber;
    } else if (arrNum.length - i === 4 && Number(arrNum[i]) !== 0) {
      sinoNumber = SINO_NUMS_MORED[2] + sinoNumber;
    } else if (arrNum.length - i === 3 && Number(arrNum[i]) !== 0) {
      sinoNumber = SINO_NUMS_MORED[1] + sinoNumber;
    } else if (arrNum.length - i === 2 && Number(arrNum[i]) !== 0) {
      sinoNumber = SINO_NUMS_MORED[0] + sinoNumber;
    }

    switch (Number(arrNum[i])) {
      case 1:
        if (i === arrNum.length - 1 || arrNum.length - i === 5) {
          sinoNumber = SINO_NUMS_ONEDIG[0] + sinoNumber;
        }
        break;

      case 2:
        sinoNumber = SINO_NUMS_ONEDIG[1] + sinoNumber;
        break;

      case 3:
        sinoNumber = SINO_NUMS_ONEDIG[2] + sinoNumber;
        break;

      case 4:
        sinoNumber = SINO_NUMS_ONEDIG[3] + sinoNumber;
        break;

      case 5:
        sinoNumber = SINO_NUMS_ONEDIG[4] + sinoNumber;
        break;

      case 6:
        sinoNumber = SINO_NUMS_ONEDIG[5] + sinoNumber;
        break;

      case 7:
        sinoNumber = SINO_NUMS_ONEDIG[6] + sinoNumber;
        break;

      case 8:
        sinoNumber = SINO_NUMS_ONEDIG[7] + sinoNumber;
        break;

      case 9:
        sinoNumber = SINO_NUMS_ONEDIG[8] + sinoNumber;
        break;
    }
  }

  return sinoNumber;
};
