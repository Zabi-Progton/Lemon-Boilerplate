export { Admin as default } from '@/page-components/admin/Admin/Admin';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'dash',
      name: 'Admin',     
    },
  };
};
