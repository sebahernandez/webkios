import React from 'react';
import Head from 'next/head';

type SeoProps = {
  title: string;
  description: string;
  tags: string;
  nombre: string;
  canonical?: string;
  css?: string;
  js?: string;
  image?: string;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  tags,
  nombre,
  canonical,
  css,
  js,
  image,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width,maximum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Proper Noun" />
    <meta property="og:url" content={`${canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="keywords" content={tags}/>
    <meta name="author" content={nombre}/>
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@propernounco" />
    <meta name="twitter:creator" content="@propernounco" />
    {css && <link rel="stylesheet" href={`${css}`} />}
    {image ? (
      <meta property="og:image" content={`${image}`} />
    ) : (
      <meta
        property="og:image"
        content="https://www.propernoun.co/static/images/proper-noun-social.png"
      />
    )}
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {js && <script type="text/javascript" src={`${js}`}></script> && <script src="https://sdk.mercadopago.com/js/v2"></script>}
  </Head>
);
