import React from 'react';
import MailIcon from './MailIcon';
import SmsIcon from './SmsIcon';
import LinkedInIcon from './LinkedInIcon';
import CopyIcon from './CopyIcon';
import TwitterIcon from './TwitterIcon';
import MoreIcon from './MoreIcon';
import { ShareType } from '../interfaces';

interface Props {
  name: ShareType;
  size: number;
}

const Icon = ({ name, size }: Props) => {
  switch (name) {
    case 'Mail': {
      return <MailIcon size={size} />;
    }
    case 'Sms': {
      return <SmsIcon size={size} />;
    }
    case 'LinkedIn': {
      return <LinkedInIcon size={size} />;
    }
    case 'Copy': {
      return <CopyIcon size={size} />;
    }
    case 'Twitter': {
      return <TwitterIcon size={size} />;
    }
    case 'More': {
      return <MoreIcon size={size} />;
    }
  }
};

export default Icon;
