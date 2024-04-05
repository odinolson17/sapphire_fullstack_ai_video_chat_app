export const randomID = () => {
  const number: string = (Math.floor(Math.random() * 99999)).toString();
  const numbertwo: string = (Math.floor(Math.random() * 99999)).toString();
  const numberthree: string = (Math.floor(Math.random() * 99999)).toString();
  const numberfour: string = (Math.floor(Math.random() * 99999)).toString();
  return number + numbertwo + numberthree + numberfour;
}

export const randomIDwithLetters = () => {
  const number: string = (Math.floor(Math.random() * 99999)).toString();
  const letters: string = "abe";
  const numbertwo: string = (Math.floor(Math.random() * 99999)).toString();
  const letterstwo: string = "cji";
  const randomizer: number = Math.floor(Math.random() * 4);
  if (randomizer === 1) {
    return number + letters + numbertwo;
  } else if (randomizer === 2) {
    return letterstwo + number + numbertwo;
  } else if (randomizer === 3) {
    return numbertwo + number + letters;
  } else if (randomizer === 4) {
    return numbertwo + number + letterstwo;
  } else {
    return number + letters + letterstwo + numbertwo;
  }
};