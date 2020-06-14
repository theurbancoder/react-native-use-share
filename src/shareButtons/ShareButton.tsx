import React from 'react';

import { ShareType, ShareProps } from './interfaces';
import Sms from './Sms';
import Twitter from './Twitter';
import LinkedIn from './LinkedIn';
import Mail from './Mail';
import Copy from './Copy';
import More from './More';

interface Props extends ShareProps {
  type: ShareType;
  closeShare: () => void;
}

const ShareButton = ({ type, ...props }: Props) => {
  switch (type) {
    case 'Sms':
      return <Sms {...props} />;
    case 'Twitter':
      return <Twitter {...props} />;
    case 'LinkedIn':
      return <LinkedIn {...props} />;
    case 'Mail':
      return <Mail {...props} />;
    case 'Copy':
      return <Copy {...props} />;
    case 'More':
      return <More {...props} />;
  }
};

export default ShareButton;
