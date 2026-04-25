import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = '' }) => {
  const siteUrl = 'https://www.grownk.com';
  const url = `${siteUrl}${path}`;
  const defaultTitle = 'GrownK - Your story. Their screen. Our strategy.';
  const defaultDescription = "At GrownK we don't just market, we build brand with you. Digital marketing, social media management, and brand strategy services.";

  const seo = {
    title: title ? `${title} | GrownK` : defaultTitle,
    description: description || defaultDescription,
    url: url,
  };

  return (
    <Helmet>
      {/* Basic tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter tags */}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
};

export default SEO;
