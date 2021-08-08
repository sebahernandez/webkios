import { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
import { GET_CLIENTE_ID } from '../utils/graphql/query/clients.query';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'features/user-profile/settings/settings';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { SEO } from 'components/seo';
import Footer from 'layouts/footer/footer';
import ErrorMessage from 'components/error-message/error-message';
import config from 'setting/config'; 

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const cid =  config().SUBSCRIPTION_ID;
const ProfilePage: NextPage<Props> = ({ deviceType }) => {
  const { data, error, loading } = useQuery(GET_CLIENTE_ID, 
    {
      variables: {
        clientid: cid,
        id: 18
      }
    });
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <SEO title="Profile - PickBazar" description="Profile Details" />
      <ProfileProvider initData={data.cliente[0]}>
        <Modal>
           <PageWrapper>
           <SidebarSection>
              <Sidebar />
            </SidebarSection>
           <ContentBox>
               <SettingsContent deviceType={deviceType} /> 
            </ContentBox> 
 
          </PageWrapper> 
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default ProfilePage;
