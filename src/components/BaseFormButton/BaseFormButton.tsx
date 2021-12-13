import React from 'react';
import cx from 'classnames';
import { IBaseButtonProps } from '@/interfaces';
import styles from './style.module.less';
import { Button } from 'antd';

interface IProps extends IBaseButtonProps {}

export const BaseFormButton: React.FC<IProps> = ({ title, size, className, onClick, loading }) => {
  return (
    <Button type="primary" size={size} className={cx(styles['base-button'], className)} onClick={onClick} loading={loading}>
      <span>
        <span>{title}</span>
      </span>
    </Button>
  );
};
