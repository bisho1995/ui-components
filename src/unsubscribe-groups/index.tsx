import React from 'react';

import Actions, { Action } from '../actions';
import Card from '../card';
import Icon from '../icon';

import Styles from '../styles/card.module.scss';
import cn from '../utilities/classnames';

export interface UnsubscribeGroupCardProps {
  id: number;
  name: string;
  description: string;
  unsubscribes: number;
  isDisplayedOnPreferencesPage?: boolean;
  onClickEdit: (event: any) => void;
  onClickPreview: (event: any) => void;
  onClickUploadCsv: (event: any) => void;
  onClickExport: (event: any) => void;
  onClickManuallyAdd: (event: any) => void;
}

export const UnsubscribeGroupCard: React.SFC<UnsubscribeGroupCardProps> = ({
  id,
  name,
  description,
  unsubscribes,
  isDisplayedOnPreferencesPage,
  onClickEdit: handleEdit,
  onClickPreview: handlePreview,
  onClickUploadCsv: handleUploadCsv,
  onClickExport: handleExport,
  onClickManuallyAdd: handleManualAdd,
  ...attributes
}) => {
  return (
    <Card centered title={name} body={description} {...attributes}>
      {isDisplayedOnPreferencesPage && (
        <p className={cn('card-unsub-prefs', Styles['card-unsub-prefs'])}>
          <Icon type="check-circle" />
          Included in opt out preferences
        </p>
      )}
      <p className={cn('card-unsubs', Styles['card-unsubs'])}>
        <strong>Unsubscribes</strong>
        {unsubscribes}
      </p>
      <p className={cn('card-id', Styles['card-id'])}>
        <strong>ID</strong>
        &nbsp;{id}
      </p>
      <Actions vertical>
        <Action title="Edit" icon="pencil" onClick={handleEdit} />
        <Action title="Preview" icon="view" onClick={handlePreview} />
        <Action title="Upload a CSV" icon="export" onClick={handleUploadCsv} />
        <Action title="Export" icon="download" onClick={handleExport} />
        <Action
          title="Manually Add"
          icon="contacts-alt"
          onClick={handleManualAdd}
        />
      </Actions>
    </Card>
  );
};

export { UnsubscribeGroupAddEdit } from './add-edit';
export { CreateNewGroupCard } from './create-new-group-card';
export default UnsubscribeGroupCard;
