import React from 'react';
import cn from './utilities/classnames';

import Card from './card';
import Styles from './styles/metric-card.module.scss';

export interface MetricCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  body?: string;
}

export const MetricCard: React.SFC<MetricCardProps> = ({
  body,
  children,
  className,
  title,
  ...attributes
}) => {
  return (
    <Card
      className={cn('metric-card', Styles['metric-card'], className)}
      {...attributes}
    >
      {title && <h4>{title}</h4>}
      {body && <p className={cn('card-data', Styles['card-data'])}>{body}</p>}
      {children}
    </Card>
  );
};

export default MetricCard;
