export const getTime = () => {
  let hour: string = (new Date(Date.now()).getHours()).toString();
  if (hour.toString().length <= 1) {
    const holdingValue: string = hour;
    hour = '0' + holdingValue.toString();
  };
  let minute: string = (new Date(Date.now()).getMinutes()).toString();
  if (minute.toString().length <= 1) {
    const holdingValue: string = minute;
    minute = '0' + holdingValue.toString();
  };
  return hour + ":" + minute;
};