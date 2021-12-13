import React from 'react';
import cx from 'classnames';

import { IBaseFieldProps } from '@/interfaces';
import { config } from '@/configs';

import styles from './style.module.less';
import { Form, Input } from 'formik-antd';


interface IProps extends IBaseFieldProps {}

const fmtVer = (v: string) => v.replace('^', '').replace('~', '');
const deps = [
  { k: 'react', v: fmtVer(config.pkg?.dependencies.react) },
  { k: 'antd', v: fmtVer(config.pkg?.dependencies.antd) },
  { k: 'next', v: fmtVer(config.pkg?.dependencies.next) },
];

export const BaseTextField: React.FC<IProps> = ({
  name,
  placeholder,
  className,
}) => {
  return (
    <Form.Item name={name} className={cx(styles['base-input-field-wrapper'])}>
      <Input
        name={name}
        placeholder={placeholder}
        className={cx(styles['base-input-field'], className)}
      />
    </Form.Item>
  );
};
