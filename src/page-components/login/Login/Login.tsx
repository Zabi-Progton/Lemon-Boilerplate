import cx from 'classnames';
import React from 'react';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, HugeIcon, PageWrapper } from '@/components';
import { config } from '@/configs';

import styles from './styles.module.less';
import { useDarkMode } from '@/hooks';
import { Col, Row, Typography, Button, Image } from 'antd';
import { BaseTextField } from '@/components/BaseTextField/BaseTextField';
import { Formik } from 'formik';
import { Form, Input, InputNumber, Checkbox } from 'formik-antd';
import { BasePasswordField } from '@/components/BasePasswordField/BasePasswordField';
import { BaseFormButton } from '@/components/BaseFormButton/BaseFormButton';

const { Title, Text } = Typography;

interface Values {
  email: string;
  password: string;
}
interface IProps extends IPageBaseProps {}

export const Login: React.FC<IProps> = (props) => {
  useDarkMode()
  return (
    <PageWrapper
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${Login.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={config.pkg.name} disableSiteName />
      <div className={cx(styles['login-card-base'], props.className)}>
        <div className={cx(styles['login-card-header'], props.className)}>
          <Row justify="center" align="middle" gutter={[6, 6]}>
            <Col span={24}>
              <Title level={4}>Login</Title>
            </Col>
            <Col span={24}>
              <Text type="secondary">
                Login to your admin/personal account to get started. Login to
                your admin/personal account to get started
              </Text>
            </Col>
          </Row>
        </div>
        <div className={cx(styles['login-card-content'], props.className)}>
          <Row align="middle" gutter={[6, 6]}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                rememberMe: false,
              }}
              validate={(values) => {
                const errors: Partial<Values> = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email,
                  )
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  console.log(3000);
                }, 2000);
              }}
              render={({ isSubmitting, handleSubmit }) => (
                <Form style={{ width: '100%' }} wrapperCol={{ span: 24 }}>
                  {/* every formik-antd component must have the 'name' prop set: */}
                  <Row gutter={[10, 10]}>
                    <Col span={24}>
                      <BaseTextField name="email" placeholder="Email" />
                    </Col>
                    <Col span={24}>
                      <BasePasswordField
                        name="password"
                        placeholder="Password"
                      />
                    </Col>
                    {/* <Col span={24}>
                    <Checkbox name='rememberMe' style={{display: 'flex', padding: '1rem'}}>Remember me</Checkbox>
                    </Col> */}
                    <Col span={24} style={{paddingTop: '1.5rem'}}>
                      <BaseFormButton
                        title="Login"
                        onClick={() => handleSubmit()}
                        loading={isSubmitting}
                      />
                    </Col>
                  </Row>
                </Form>
              )}
            />
          </Row>
        </div>
        <div className={cx(styles['login-card-footer'], props.className)}>
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
        </div>
      </div>
    </PageWrapper>
  );
};
