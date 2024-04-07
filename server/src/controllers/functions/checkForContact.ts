export function checkForContact (user: any, friendEmail: string) {
  const toCheck = user.textchats;
  for (let i = 0; i < toCheck.length; i++) {
    if (toCheck[i].friendsemail === friendEmail) {
      return true;
    }
  }
  return false;
}