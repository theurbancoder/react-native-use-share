import React from 'react';

import Sms from './Sms';
import Twitter from './Twitter';
import LinkedIn from './LinkedIn';
import Email from './Email';
import Copy from './Copy';
import More from './More';
import WhatsApp from './WhatsApp';
import { ShareProps, ShareType } from './../interfaces';

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
