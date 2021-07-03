import { GetServerSideProps } from "next";

import { withSSRAuth } from "../utils/withSSRAuth";
import { setUpAPIClient } from "../services/api";


export default function Metrics() {

  return (
    <>
      <h1>Metrics</h1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setUpAPIClient(ctx);
  const response = apiClient.get('me');

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
});