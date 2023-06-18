import { format, parse } from 'date-fns';

export function convertTime(timeString: string) {
  const date = parse(timeString, 'hh:mm a', new Date());
  const convertedTime = format(date, 'HH:mm');
  return convertedTime;
}

export function formatDate(date: Date) {
  return format(date, 'yyyy-MM-dd');
}
