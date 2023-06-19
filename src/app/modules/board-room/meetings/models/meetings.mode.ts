import { InviteeDto } from './meetings.dto';

export interface MeetingType {
  id?: number;
  key: string;
  active: boolean;
}

export interface TimeRange {
  start?: string;
  end?: string;
}

export type InviteesType = 'board' | 'guests';

export type Invitee = InviteeDto;
