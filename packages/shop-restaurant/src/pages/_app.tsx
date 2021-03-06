import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "site-settings/site-theme/default";
import { AppProvider } from "contexts/app/app.provider";
import { AuthProvider } from "contexts/auth/auth.provider";
import { LanguageProvider } from "contexts/language/language.provider";
import { CartProvider } from "contexts/cart/use-cart";
import { useApollo } from "utils/apollo";
import { useMedia } from "utils/use-media";
import { ApolloProvider, useQuery } from '@apollo/client';

// External CSS import here
import "rc-drawer/assets/index.css";
import "rc-table/assets/index.css";
import "rc-collapse/assets/index.css";
import "react-multi-carousel/lib/styles.css";
import "components/multi-carousel/multi-carousel.style.css";
import "react-spring-modal/dist/index.css";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "components/scrollbar/scrollbar.css";
import "@redq/reuse-modal/lib/index.css";
import "swiper/swiper-bundle.min.css";
import { GlobalStyle } from "assets/styles/global.style"; 
// Language translation messages
import { messages } from "site-settings/site-translation/messages";
import "typeface-lato";
import "typeface-poppins";
import { GET_SUSCRIPCION_X_HOST } from 'utils/graphql/query/suscripcion.query'; 
import Cookies  from 'universal-cookie'; 
import { useEffect, useState } from "react";

// need to provide types
const DemoSwitcher = dynamic(
  () => import("components/demo-switcher/switcher-btn")
);

const cookie = new Cookies()
const AppLayout = dynamic(() => import("layouts/app-layout"));

export default function ExtendedApp({ Component, pageProps }) {
  let host = ''
  const mobile = useMedia("(max-width: 580px)");
  const tablet = useMedia("(max-width: 991px)");
  const desktop = useMedia("(min-width: 992px)");
  const apolloClient = useApollo(pageProps.initialApolloState);
  
  
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <LanguageProvider messages={messages}>
          <CartProvider>
            <AppProvider>
              <AuthProvider>
                <AppLayout>
                  <Component
                    {...pageProps}
                    deviceType={{ mobile, tablet, desktop }}
                  />
               {/*    <DemoSwitcher /> */}
                </AppLayout>
              </AuthProvider>
            </AppProvider>
          </CartProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
