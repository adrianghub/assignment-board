import { Injectable } from '@angular/core';
import { InviteeDto, MeetingTypeDto } from '../models/meetings.dto';
import { InviteesType } from '../models/meetings.mode';

@Injectable()
export class MeetingsService {
  getMeetingTypes(): MeetingTypeDto[] {
    return [
      { id: 1, key: 'board' },
      { id: 2, key: 'general' },
      { id: 3, key: 'other' },
    ];
  }

  getInvitees(type: InviteesType): InviteeDto[] {
    switch (type) {
      case 'board':
        return [
          { id: 1, name: 'John Doe', position: 'Chair of the board' },
          { id: 2, name: 'Jane Doe', position: 'Board member' },
          { id: 3, name: 'Mary Mustermann', position: 'Board member' },
          { id: 4, name: 'Erik Mustermann', position: 'Service staff' },
        ];

      case 'guests':
        return [
          { id: 1, name: 'Stefan Kowalski' },
          { id: 2, name: 'Elan Podolski' },
          { id: 3, name: 'Yerzy Krawczyk' },
          { id: 4, name: 'Kacper Nowak' },
        ];
    }
  }
}
