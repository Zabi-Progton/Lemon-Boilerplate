import cx from 'classnames';
import React, { useState } from 'react';
import { ILayoutBaseProps } from '@/interfaces/jsx.interface';
import { Layout, Menu, Breadcrumb, Image, Typography } from 'antd';
import {
  CheckCircleOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  TeamOutlined,
  DollarCircleOutlined,
  FolderOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;

import styles from './styles.module.less';

export interface IProps extends ILayoutBaseProps {
  disableHeader?: boolean;
  disableFooter?: boolean;
}

export const DashboardLayout: React.FC<IProps> = (props) => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(true);

  const handleMenuCollapse = (collapsed: boolean) => {
    setMenuCollapsed(!isMenuCollapsed);
  };
  return (
    <div
      id={`g-layout--${DashboardLayout?.displayName}`}
      className={cx(
        styles['comp-wrapper'],
        `g-comp--${DashboardLayout?.displayName}`,
      )}
    >
      <Layout style={{ minHeight: '100vh' }} hasSider>
        <Sider
          collapsible
          collapsed={isMenuCollapsed}
          onCollapse={handleMenuCollapse}
          trigger={null}
          style={{ height: '100vh', position: 'fixed', left: 0, zIndex: 2 }}
        >
          <div
            className="logo"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60px',
            }}
          >
            <Image
              className={cx(styles[''])}
              preview={false}
              height={18}
              src={'/assets/icons/logo.png'}
            />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {/* <Menu.Item
              key="1"
              style={{minHeight: '50px'}}
              icon={
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                  <AppstoreOutlined />
                  <p style={{fontSize: '9px'}}>Dashboard</p>
                </div>
              }
            >
              Dashboard
            </Menu.Item> */}
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              Customers
            </Menu.Item>

            <Menu.Item key="3" icon={<CalendarOutlined />}>
              Bookings
            </Menu.Item>
            <Menu.Item key="4" icon={<CheckCircleOutlined />}>
              Tasks
            </Menu.Item>
            <Menu.Item key="5" icon={<CheckCircleOutlined />}>
              Accounting
            </Menu.Item>
            <Menu.Item key="6" icon={<DollarCircleOutlined />}>
              Billing
            </Menu.Item>
            <Menu.Item key="7" icon={<FolderOutlined />}>
              Documents
            </Menu.Item>
            <Menu.Item key="8" icon={<DollarCircleOutlined />}>
              Reports
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* Remove or replace this to out above this layout block for zIndex sider */}
          <Header
             className={cx(styles['header-wrapper-dashboard'])}
          />
          <Content
             className={cx(styles['content-wrapper-dashboard'])}
          >
            <props.mainComp
              router={props.routeProps}
              pageProps={props.pageProps}
            />
            <Footer style={{ textAlign: 'center', position: 'relative' }}>
              <Text type="secondary">
                Made with care at
                <span className={cx(styles['text-image'])}>
                  <Image
                    className={cx(styles['text-with-image'])}
                    preview={false}
                    height={18}
                    src={'/assets/icons/logo.png'}
                  />
                </span>
                Progton Technologies
              </Text>
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
