import { addHours, addMinutes, format, parse } from 'date-fns';

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

export function getTimeInFuture(amount: number, unit: 'hour' | 'minute') {
  if (unit === 'minute') {
    return format(addMinutes(new Date(), amount), 'HH:mm');
  }

  return format(addHours(new Date(), amount), 'HH:mm');
}
