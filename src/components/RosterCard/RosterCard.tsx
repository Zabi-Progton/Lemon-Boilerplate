import React from 'react';
import cx from 'classnames';
import { IBaseButtonProps, IIRosterTitleProps } from '@/interfaces';
import styles from './style.module.less';
import { Button, Space, Card } from 'antd';

interface IProps extends IBaseButtonProps {}
interface IIProps extends IIRosterTitleProps {}

const ModifiedCardTitle: React.FC<IIProps> = ({
  title,
  totalCount,
  extraTitle,
}) => {
  return (
    <div className={cx(styles['roster-card-header'])}>
      <div>{title}</div>
      <div className={cx(styles['roster-card-header-extra'])}>
        {totalCount}
        <div className={cx(styles['extra-title'])}>{extraTitle}</div>
      </div>
    </div>
  );
};

export const RosterCard: React.FC<IProps> = ({
  title,
  size,
  className,
  onClick,
  loading,
}) => {
  return (
    <Space
      direction="vertical"
      className={cx(styles['roster-card-base'], className)}
    >
      <Card
        className={cx(styles['roster-card-wrapper'])}
        title={
          <ModifiedCardTitle
            className={cx(styles['roster-card-head'])}
            extraTitle="Total"
            title={'Departures'}
            totalCount={'230'}
          />
        }
        loading={loading}
      >
        <div className={cx(styles['roster-card-content-scrollable'])}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolorum ipsam architecto eaque ad non vitae repellendus blanditiis,
          ducimus distinctio culpa quam repellat eum suscipit incidunt ab porro
          pariatur. Quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolorum ipsam architecto eaque ad non vitae repellendus blanditiis,
          ducimus distinctio culpa quam repellat eum suscipit incidunt ab porro
          pariatur. Quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolorum ipsam architecto eaque ad non vitae repellendus blanditiis,
          ducimus distinctio culpa quam repellat eum suscipit incidunt ab porro
          pariatur. Quibusdam.
        </div>
        <div className={cx(styles['roster-card-footer'])}>
          <span>Updated: 2 hours ago</span>
        </div>
      </Card>
    </Space>
  );
};
