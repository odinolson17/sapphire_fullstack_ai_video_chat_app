export const nameFormatting = async (name: string) => {
  const newName: string[] = name.split(' ');
  if (newName.length === 1) {
    const splitName: string[] = newName[0].split('');
    const holdingName: string = splitName[0].toUpperCase();
    const buildingName: string[] = [];
    for (let i = 1; i < splitName.length; i++) {
      buildingName.push(splitName[i].toLowerCase());
    }
    return holdingName + buildingName.join('');
  } else {
    const endArray: string[] = [];
    for (let i = 0; i < newName.length; i++) {
      const holdingName: string = newName[i][0].toUpperCase();
      const buildingName: string[] = [];
      const splitName = newName[i].toLowerCase().split('');
      for (let j = 1; j < splitName.length; j++) {
        buildingName.push(splitName[j]);
      }
      const combinedName = buildingName.join('');
      endArray.push(holdingName + combinedName);
    }
    return endArray.join(' ');
  }
};