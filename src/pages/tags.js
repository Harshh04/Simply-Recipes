import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import SEO from "../components/SEO";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulGatsbyTutorial.nodes);
  return (
    <Layout>
      <SEO title="Tags Page" description="This is Tags page" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const tagSlug = slugify(text, { lower: true });
            return (
              <Link to={`/tags/${tagSlug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>({value} recipe)</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulGatsbyTutorial {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
