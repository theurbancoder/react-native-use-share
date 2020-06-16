import React from 'react';

import {
  Copy,
  Email,
  LinkedIn,
  More,
  Sms,
  Twitter,
  WhatsApp,
} from '../shareButtons';
import { ShareProps, ShareType } from '../interfaces';

interface Props extends ShareProps {
  type: ShareType;
  closeShare: () => void;
}

const ShareButton = ({ type, ...props }: Props) => {
  switch (type) {
    case 'sms':
      return <Sms {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'linkedin':
      return <LinkedIn {...props} />;
    case 'email':
      return <Email {...props} />;
    case 'copy':
      return <Copy {...props} />;
    case 'more':
      return <More {...props} />;
    case 'whats-app':
      return <WhatsApp {...props} />;
  }
};

export default ShareButton;
