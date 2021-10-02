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
import { siteTermsAndServices } from 'site-settings/site-terms-and-services';
import { useQuery } from '@apollo/client';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query'; 
import config from 'setting/config';

const TermsPage: NextPage<{}> = () => {
  const { title, date, content } = siteTermsAndServices;
  const mobile = useMedia('(max-width: 580px)');

  const menuItems: string[] = [];
  content.forEach((item) => {
    menuItems.push(item.title);
  });

  const cid =  config().SUBSCRIPTION_ID;
  var { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid

        }
    }); 

  return (
    <>
      <SEO title={"Términos y Condiciones - " + (data !== undefined && data.info_shop_view !== undefined && data.info_shop_view[0].site_name)} 
       description={(data !== undefined && data.info_shop_view !== undefined && data.info_shop_view[0].description)}  />
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

export default TermsPage;
