import { NextPage } from 'next';
import Sticky from 'react-stickynode';
import {
  StyledContainer,
  StyledContent,
  StyledLink,
  StyledLeftContent,
  StyledLeftInnerContent,
  StyledRightContent,
  StyledContentHeading,
} from 'features/terms-and-services/terms-and-services';
import { Heading } from 'components/heading/heading';
import { Element } from 'react-scroll';
import { SEO } from 'components/seo';
import { useMedia } from 'utils/use-media';
import { sitePrivacyPolicy } from 'site-settings/site-privacy-policy';
import { useQuery } from '@apollo/client';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';  
import Cookies  from 'universal-cookie';

const PrivacyPage: NextPage<{}> = () => {
  const { title, date, content } = sitePrivacyPolicy;
  const mobile = useMedia('(max-width: 580px)');
  const menuItems: string[] = [];
  content.forEach((item) => {
    menuItems.push(item.title);
  });
  const cookie = new Cookies()
  const cid = cookie.get('clientid')
  var { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid

        }
    }); 

  return (
    <>
      <SEO title={"Privacidad - " + (data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].titulo)} 
       description={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].titulo)}  />
      <StyledContainer>
        <Heading title={title} />

        <StyledContent>
          <StyledLeftContent>
            <Sticky top={mobile ? 68 : 150} innerZ="1">
              <StyledLeftInnerContent>
                {menuItems.map((item) => (
                  <StyledLink
                    key={item}
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-276}
                    duration={500}
                  >
                    {item}
                  </StyledLink>
                ))}
              </StyledLeftInnerContent>
            </Sticky>
          </StyledLeftContent>
          <StyledRightContent>
            {content.map((item, idx) => {
              return (
                <Element
                  name={item.title}
                  style={{ paddingBottom: 40 }}
                  key={idx}
                >
                  <StyledContentHeading>{item.title}</StyledContentHeading>
                  <div
                    className="html-content"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </Element>
              );
            })}
          </StyledRightContent>
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default PrivacyPage;
