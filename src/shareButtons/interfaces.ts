export type ShareType =
  | 'Mail'
  | 'Sms'
  | 'LinkedIn'
  | 'Copy'
  | 'Twitter'
  | 'More';

export interface ShareProps {
  title?: string;
  message?: string;
  url?: string;
}
