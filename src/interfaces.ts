export type ShareType =
  | 'email'
  | 'sms'
  | 'linkedin'
  | 'copy'
  | 'twitter'
  | 'whats-app'
  | 'more';

export interface ShareProps {
  title?: string;
  message?: string;
  url?: string;
}

export type SharePosition = 'bottom' | 'right';
