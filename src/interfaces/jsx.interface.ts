import React, { FormEvent, ReactNode } from 'react';
import { Router } from 'next/router';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type ILayout = 'master' | 'test' | 'auth' | 'dash';

export interface ICompBaseProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export interface IBaseFieldProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
  name: string;
  placeholder: string;
}

export interface IBasePasswordFieldProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
  name: string;
  placeholder: string;
  iconRender?: (visible: boolean) => ReactNode;
}

export interface IBaseButtonProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
  title: string;
  icon?: ReactNode;
  size?: SizeType;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface IPageBaseProps extends ICompBaseProps {
  routeProps: Router;
  pageProps?: {
    layout: ILayout;
    name?: string;
  };
}

export interface ILayoutBaseProps {
  mainComp: any;
  routeProps: Router;
  pageProps?: any;
}

//Custom Props Interfaces
export interface IIRosterTitleProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
  title: string;
  icon?: ReactNode;
  size?: SizeType;
  loading?: boolean;
  totalCount: string;
  extraTitle: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface IGetStaticPropsCtx {}
