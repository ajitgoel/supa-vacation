//This page should be accessible only if the current user is authenticated, and if so, it should list all the homes the user has added to his favorites.

//The layout and logic of this page are similar to the homes page except that the Prisma query is different.

import { getSession } from 'next-auth/react';
import Layout from '@/components/Layout';
import Grid from '@/components/Grid';
import { prisma } from '@/lib/prisma';

export async function getServerSideProps(context) {
  // TODO
}

const Favorites = ({ homes = [] }) => {
  return (
    <Layout>
      <h1 className="text-xl font-medium text-gray-800">Your listings</h1>
      <p className="text-gray-500">
        Manage your homes and update your listings
      </p>
      <div className="mt-8">
        <Grid homes={homes} />
      </div>
    </Layout>
  );
};

export default Favorites;