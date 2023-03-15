import Layout from '@/components/Layout';
import ListingForm from '@/components/ListingForm';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import prisma from 'lib/prisma';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const redirect = {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
  if (!session) {
    return redirect;
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { listedHomes: true },
  });
  // Check if authenticated user is the owner of this home
  const id = context.params.id;
  const home = user?.listedHomes?.find(home => home.id === id);
  if (!home) {
    return redirect;
  }
  //when the user is owner, we are returning current home data for Edit component props.
  return {
    props: JSON.parse(JSON.stringify(home)),
  };
}
//pass above data down to ListingForm component(image, title, description, etc.) to 
//initialize editing form
const Edit = (home = null) => {
  return (
    <Layout>
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-xl font-medium text-gray-800">Edit your home</h1>
        <p className="text-gray-500">
          Fill out the form below to update your home.
        </p>
        <div className="mt-8">
          {home ? (
            <ListingForm
              initialValues={home}
              buttonText="Update home"
              redirectPath={`/homes/${home.id}`}
            />
          ) : null}
        </div>
      </div>
    </Layout>
  );
};
export default Edit;