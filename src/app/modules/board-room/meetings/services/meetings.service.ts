import { Injectable } from '@angular/core';
interface MeetingTypeDto {
  id: number;
  key: string;
}

@Injectable()
export class MeetingsService {
  getMeetingTypes(): MeetingTypeDto[] {
    return [
      { id: 1, key: 'board' },
      { id: 2, key: 'general' },
      { id: 3, key: 'other' },
    ];
  }
}
