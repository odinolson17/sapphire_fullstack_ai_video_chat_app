import { nameFormatting } from "../nameFormatting";

describe('Testing the formating of the user\'s name', () => {
  
  it('Test that an all capital name gets formatted correctly', () => {
    const testAllCapitalName: string = nameFormatting('ALLEN');
    expect(testAllCapitalName).toBe('Allen');
    expect(testAllCapitalName).not.toBe('ALLEN');
    expect(testAllCapitalName).not.toBe('allen');
    const nameWithTwoWords: string = nameFormatting('LOU JANE');
    expect(nameWithTwoWords).toBe('Lou Jane');
  });

  it ('Test that an all lower case name gets formatted correctly', () => {
    const testLowerCase: string = nameFormatting('allen');
    expect(testLowerCase).toBe('Allen');
    expect(testLowerCase).not.toBe('ALLEN');
    expect(testLowerCase).not.toBe('allen');
    const twoWords: string = nameFormatting('lou jane');
    expect(twoWords).toBe('Lou Jane');
  });

  it('Test that a name with Crazy Letters is correct', () => {
    const crazyCase: string = nameFormatting('aLlEN');
    expect(crazyCase).toBe('Allen');
    const anotherCrazyCase: string = nameFormatting('MaRY jaNE');
    expect(anotherCrazyCase).toBe('Mary Jane');
  });

  it('Test a very long name', () => {
    const longName = 'suzy Jane maRie LuCy richardsSON';
    const inputedName: string = nameFormatting(longName);
    expect(inputedName).toBe('Suzy Jane Marie Lucy Richardsson');
  });
});