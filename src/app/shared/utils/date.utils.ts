import { addHours, format, parse } from 'date-fns';

export function convertTime(timeString: string) {
  const date = parse(timeString, 'hh:mm a', new Date());
  const convertedTime = format(date, 'HH:mm');
  return convertedTime;
}

export function formatDate(date: Date) {
  return format(date, 'yyyy-MM-dd');
}

export function getCurrentTime() {
  return format(new Date(), 'HH:mm');
}

export function getTimeInFuture(hours: number) {
  return format(addHours(new Date(), hours), 'HH:mm');
}
