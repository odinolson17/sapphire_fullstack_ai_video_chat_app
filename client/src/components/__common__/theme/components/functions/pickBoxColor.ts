export const pickBoxColor = (color: string): string => {
  switch (color) {
    case 'electric-pink':
      return 'electric-pink-box';
    case 'cloud-blue':
      return 'cloud-blue-box';
    case 'purple-haze':
      return 'purple-haze-box';
    case 'galaxy-black':
      return 'galaxy-black-box';
    case 'bubblegum-pink':
      return 'bubblegum-pink-box';
    case 'ocean-blue':
      return 'ocean-blue-box';
    case 'ivory-white':
      return 'ivory-white-box';
    case 'forest-green':
      return 'forest-green-box';
    default:
      return 'electric-pink-box';
  }
};