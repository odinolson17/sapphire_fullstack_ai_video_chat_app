import { randomID, randomIDwithLetters } from "../randomID";

describe('Testing the id making functionality', () => {

  it('Expect the responses to be unique', () => {
    const firstCallOnFirstFunction = randomID();
    const secondCallOnFirstFunction = randomID();
    expect(firstCallOnFirstFunction).not.toBe(secondCallOnFirstFunction);

    const firstCallOnSecondFunction = randomIDwithLetters();
    const secondCallOnSecondFunction = randomIDwithLetters();
    expect(firstCallOnSecondFunction).not.toBe(secondCallOnSecondFunction);
  });
  
  it('Expect length to be at least longer than four', () => {
    const onFirstFunction = randomID();
    expect(onFirstFunction.length).toBeGreaterThan(3);

    const onSecondFunction = randomIDwithLetters();
    expect(onSecondFunction.length).toBeGreaterThan(3);
  });
});