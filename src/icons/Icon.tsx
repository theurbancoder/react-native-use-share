import React from 'react';

import EmailIcon from './EmailIcon';
import SmsIcon from './SmsIcon';
import LinkedInIcon from './LinkedInIcon';
import CopyIcon from './CopyIcon';
import TwitterIcon from './TwitterIcon';
import MoreIcon from './MoreIcon';
import { ShareType } from '../interfaces';
import WhatsAppIcon from './WhatsAppIcon';

interface Props {
  name: ShareType;
  size: number;
}

const Icon = ({ name, size }: Props) => {
  switch (name) {
    case 'email': {
      return <EmailIcon size={size} />;
    }
    case 'sms': {
      return <SmsIcon size={size} />;
    }
    case 'linkedin': {
      return <LinkedInIcon size={size} />;
    }
    case 'copy': {
      return <CopyIcon size={size} />;
    }
    case 'twitter': {
      return <TwitterIcon size={size} />;
    }
    case 'more': {
      return <MoreIcon size={size} />;
    }
    case 'whats-app': {
      return <WhatsAppIcon size={size} />;
    }
    default:
      return null;
  }
};

export default Icon;
