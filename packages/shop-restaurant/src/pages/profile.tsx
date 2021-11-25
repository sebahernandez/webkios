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
import ErrorMessage from 'components/error-message/error-message'; 
import Cookies  from 'universal-cookie';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const cookie = new Cookies()
const cid = cookie.get('clientid')
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
       <SEO title={"Profile - " + (data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].titulo)} 
       description={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].descripcion)}
       nombre={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].nombre)}
       tags={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].tags)}  />     
   
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
