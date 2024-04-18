import { blue, blueGrey, green, pink, purple } from '@mui/material/colors';

export default function colors (theme: string) {
  
  switch (theme) {
    case 'electric-pink':
      return pink[50];
    case 'cloud-blue':
      return blueGrey[900];
    case 'purple-haze':
      return purple[50];
    case 'galaxy-black':
      return blue[50];
    case 'bubblegum-pink':
      return pink[50];
    case 'ocean-blue':
      return blue[50];
    case 'ivory-white':
      return blueGrey[700];
    case 'forest-green':
      return green[50];
    default:
      return pink[50];
  };

};