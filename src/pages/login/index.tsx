export { Login as default } from '@/page-components/login/Login/Login';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'auth',
      name: 'Login',
    },
  };
};
