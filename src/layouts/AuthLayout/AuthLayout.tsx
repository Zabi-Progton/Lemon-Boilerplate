import cx from 'classnames';
import React from 'react';
import { Layout, Typography } from 'antd';
import { ILayoutBaseProps } from '@/interfaces/jsx.interface';
import styles from './styles.module.less';
import { useDarkMode } from '@/hooks';

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

export interface IProps extends ILayoutBaseProps {
  disableHeader?: boolean;
  disableFooter?: boolean;
}

export const AuthLayout: React.FC<IProps> = (props) => {
 
  return (
    <div
      id={`g-layout--${AuthLayout?.displayName}`}
      className={cx(
        styles['comp-wrapper'],
        `g-comp--${AuthLayout?.displayName}`,
      )}
    >
      <Layout>
        <Header className={cx(
        styles['auth-nav-wrapper'],
      )}>The Boilerplate</Header>
        <Content> 
          <props.mainComp
            router={props.routeProps}
            pageProps={props.pageProps}
          />
        </Content>
        <Footer>
          <Text type="secondary">Terms of Service &#8226; Privacy Policy</Text>
        </Footer>
      </Layout>
    </div>
  );
};
