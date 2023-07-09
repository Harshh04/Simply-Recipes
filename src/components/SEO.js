import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.siteDesc;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.siteTitle}`}
      meta={[{ name: `description`, content: metaDescription }]}
    >
      {" "}
    </Helmet>
  );
};

export default SEO;
