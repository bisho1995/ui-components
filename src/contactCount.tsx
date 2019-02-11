import numeral from 'numeral';
import React from 'react';

import Icon from './icon';
import Tooltip from './tooltip';

export interface ContactCountProps {
  count?: string;
  className?: string;
}

export const ContactCount: React.SFC<ContactCountProps> = ({
  count,
  className,
  ...attributes
}) => {
  return (
    <div className="contact-count" {...attributes}>
      <Tooltip content="Contact Count" direction="up">
        <abbr>{numeral(count).format('0,0')}</abbr>
      </Tooltip>{' '}
      <Icon type="people" size={20} />
    </div>
  );
};

ContactCount.defaultProps = {
  count: '0',
};

export default ContactCount;
