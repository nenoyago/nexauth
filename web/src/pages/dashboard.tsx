import { GetServerSideProps } from 'next';

import { useAuth } from '../hooks/useAuth';
import { withSSRAuth } from '../utils/withSSRAuth';
import { setUpAPIClient } from '../services/api';

import { Can } from '../components/Can';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button type="button" onClick={signOut}>
        Sign out
      </button>
      <br />

      <Can permissions={['metrics.list']}>
        <h2>Metrics</h2>
      </Can>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setUpAPIClient(ctx);
  const response = apiClient.get('me');

  return {
    props: {},
  };
});
