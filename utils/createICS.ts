import { createEvent } from 'ics';

interface ICSDetails {
  title: string;
  description: string;
  startTime: string; // e.g. "2025-06-11T17:30:00"
  endTime: string;
  email: string;
}

const createICS = ({ title, description, startTime, endTime, email }: ICSDetails): string => {
  const toArray = (dateStr: string): [number, number, number, number, number] => {
    const date = new Date(dateStr);
    return [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes()
    ];
  };

  const event = {
    start: toArray(startTime),
    end: toArray(endTime),
    title,
    description,
    organizer: { name: 'FoundrFlow', email },
    attendees: [{ name: 'Mentor', email, rsvp: true }],
    startInputType: 'local' as const,
    endInputType: 'local' as const
  };

  const { error, value } = createEvent(event);
 if (error || !value) {
  console.error('ICS Generation Error:', error);
  throw new Error('Failed to generate .ics file');
}

return value;
};

export default createICS;
