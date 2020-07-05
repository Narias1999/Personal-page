export function isNigth() {
  const time = new Date();
  return time.getHours() >= 18 || time.getHours() < 6;
}
