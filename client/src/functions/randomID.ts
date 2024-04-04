export const randomID = () => {
  const number: string = (Math.floor(Math.random() * 99999)).toString();
  const numbertwo: string = (Math.floor(Math.random() * 99999)).toString();
  const numberthree: string = (Math.floor(Math.random() * 99999)).toString();
  const numberfour: string = (Math.floor(Math.random() * 99999)).toString();
  return number + numbertwo + numberthree + numberfour;
}