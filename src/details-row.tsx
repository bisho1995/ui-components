import React, { Fragment } from 'react';
import Icon from './icon';
import Styles from './styles/details-row.module.scss';
import { Tooltip } from './tooltip';
import cn from './utilities/classnames';

export interface DetailsRowProps {
  className?: string;
  title?: string;
  available?: boolean;
  tooltipContent?: string;
  children?: React.ReactNode;
}

export const DetailsRow: React.SFC<DetailsRowProps> = ({
  className,
  title,
  available,
  tooltipContent,
  children,
  ...attributes
}) => {
  return (
    <p
      className={cn(
        Styles['details-row'],
        Styles.title,
        className,
        available ? null : Styles.steel
      )}
      {...attributes}
    >
      <Icon
        className={cn(
          Styles['details-row'],
          Styles[available ? 'mantis' : 'steel']
        )}
        type={available ? 'check' : 'x-legacy'}
      />
      <p className={cn('small', Styles['details-row'], Styles.spacing)}>
        {tooltipContent ? (
          <Tooltip
            direction="right"
            content={tooltipContent}
            className="has-underline"
            length="medium"
          >
            {' '}
            {title}
          </Tooltip>
        ) : (
          title
        )}
      </p>
    </p>
  );
};

DetailsRow.defaultProps = {
  available: false,
};

export default DetailsRow;
