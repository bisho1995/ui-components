import cn from 'classnames';
import numeral from 'numeral';
import React from 'react';

import Icon from './icon';
import Styles from './styles/contact-count.module.scss';
import Tooltip from './tooltip';

export interface ContactCountProps {
  count?: string | number;
  isRight?: boolean;
  className?: string;
}

export const ContactCount: React.SFC<ContactCountProps> = ({
  count,
  isRight,
  className,
  ...attributes
}) => {
  return (
    <div
      className={cn('contact-count', Styles['contact-count'], className, {
        'is-right': isRight,
        [Styles['is-right']]: isRight,
      })}
      {...attributes}
    >
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
