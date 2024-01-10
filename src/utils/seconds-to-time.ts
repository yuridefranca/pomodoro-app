export function secondsToTime(seconds: number): string {
  const addZerosToLeft = (value: number) => String(value).padStart(2, '0');

  const timer = {
    minutes: addZerosToLeft(Math.floor((seconds / 60) % 60)),
    seconds: addZerosToLeft(Math.floor(seconds % 60) % 60),
  };

  return `${timer.minutes}:${timer.seconds}`;
}