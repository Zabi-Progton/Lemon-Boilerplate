import cx from 'classnames';
import React from 'react';
import { FiPercent } from 'react-icons/fi';
import { Input, Button, Row, Col } from 'antd';
import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, HugeIcon, PageWrapper } from '@/components';
import styles from './styles.module.less';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@/features/login';
import { selectKanye, getKanyeQuote } from '@/features/quotes/quotesSlice';

interface IProps extends IPageBaseProps {}

export const About: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const { data, pending, error } = useAppSelector(selectKanye);
  return (
    <PageWrapper
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${About.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.pageProps?.name} />
      <>
        <Row >
          <Col span={24}>
            <h2>The current count is: {count}</h2>
          </Col>
          <Col span={24}>
            <p>
              Testing how redux works in Next SSR using increment/decrement
              counter
            </p>
          </Col>
          <Row>
            <Col span={12}>
              <Button type="primary" onClick={() => dispatch(increment())}>
                Increment through redux
              </Button>
            </Col>
            <Col span={12}>    
              <Button type="primary" onClick={() => dispatch(decrement())}>
                Decrement through redux
              </Button>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col span={24}>
            <h2>Quote will come here: {data.quote}</h2>
          </Col>
          <Col span={24}>
            <p>Quote will come here: {data.quote}</p>
          </Col>
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
        </Row>
      </>
    </PageWrapper>
  );
};
