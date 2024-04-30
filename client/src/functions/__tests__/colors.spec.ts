import colors from "../colors";
import { blueGrey, pink } from '@mui/material/colors';

describe('Testing the colors functionality', () => {

  it('Testing for correct color output', () => {
    expect(colors('electric-pink')).toBe(pink[50]);
    expect(colors('ivory-white')).toBe(blueGrey[700]);
    expect(colors('ivory-white')).not.toBe(blueGrey[50]);
  });
});