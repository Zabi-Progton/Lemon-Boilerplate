import React from 'react';
import cx from 'classnames';

import { IBasePasswordFieldProps } from '@/interfaces';
import { config } from '@/configs';

import styles from './style.module.less';
import { Input } from 'formik-antd';

interface IProps extends IBasePasswordFieldProps {}

const fmtVer = (v: string) => v.replace('^', '').replace('~', '');
const deps = [
  { k: 'react', v: fmtVer(config.pkg?.dependencies.react) },
  { k: 'antd', v: fmtVer(config.pkg?.dependencies.antd) },
  { k: 'next', v: fmtVer(config.pkg?.dependencies.next) },
];

export const BasePasswordField: React.FC<IProps> = ({
  name,
  placeholder,
  className,
  iconRender,
}) => {
  return (
    <Input.Password
      name={name}
      placeholder={placeholder}
      className={cx(styles['base-password-field'], className)}
      iconRender={iconRender}
    />
  );
};
