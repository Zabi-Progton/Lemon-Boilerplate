import cx from 'classnames';
import React from 'react';
import { FiPercent } from 'react-icons/fi';
import { Typography, Button, Row, Col, Divider } from 'antd';
import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, HugeIcon, PageWrapper } from '@/components';
import styles from './styles.module.less';
import { useAppDispatch, useAppSelector, useDarkMode } from '@/hooks';
import { decrement, increment, selectCount } from '@/features/login';
import { selectKanye, getKanyeQuote } from '@/features/quotes/quotesSlice';
import { RosterCard } from '@/components/RosterCard/RosterCard';

const { Text } = Typography;
interface IProps extends IPageBaseProps {}

export const Admin: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const { data, pending, error } = useAppSelector(selectKanye);

  return (
    <PageWrapper
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${Admin.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.pageProps?.name} />
      <>
        <Row gutter={[30, 10]}>
          <Col lg={8} md={12}>
            <Text type="secondary">Redux linking (Using redux-toolkit)</Text>
            <Divider />
            <h2>The current count is: {count}</h2>
            <p>
              Testing how redux works in Next SSR using increment/decrement
              counter
            </p>
            <Row>
              <Col span={12}>
                <Button type="primary" onClick={() => dispatch(increment())}>
                  Increment +
                </Button>
              </Col>
              <Col span={12}>
                <Button type="primary" onClick={() => dispatch(decrement())}>
                  Decrement -
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={8} md={12}>
            <Text type="secondary">
              Redux thunk API fetch (Using redux-toolkit)
            </Text>
            <Divider />
            <Text ellipsis style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              Quote will come here: {data.quote}
            </Text>
            <Text ellipsis type="warning" style={{ marginBottom: '1em' }}>
              Quote will come here: {data.quote}
            </Text>
            <Row>
              <Col span={24}>
                <Button
                  type="primary"
                  onClick={() => dispatch(getKanyeQuote())}
                  loading={pending}
                >
                  Fetch async code
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={8} md={12} style={{paddingTop: 0}}>
          <Text type="secondary">
              Basic Roster Card Component
            </Text>
            <Divider />
            <RosterCard
              title="Login"
              onClick={() => {}}
              loading={false}
            />
          </Col>
          <Col lg={24} md={24} style={{paddingTop: 0}}>
          <Text type="secondary">
              Custom sortable table component + Select + Expandable rows + Pagination + Per/row actions
            </Text>
            <Divider />
            <RosterCard
              title="Login"
              onClick={() => {}}
              loading={false}
            />
          </Col>
          <Col lg={24} md={24} style={{paddingTop: 0}}>
          <Text type="secondary">
              Custom sortable table component + Select + Expandable rows + Pagination + Per/row actions
            </Text>
            <Divider />
            <RosterCard
              title="Login"
              onClick={() => {}}
              loading={false}
            />
          </Col>
        </Row>
      </>
    </PageWrapper>
  );
};
