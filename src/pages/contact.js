import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const Contact = ({ data }) => {
  const recipes = data.allContentfulGatsbyTutorial.nodes;
  return (
    <Layout>
      <SEO title="Contact Page" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in Touch?</h3>
            <p>
              I'm baby locavore gochujang subway tile jean shorts sriracha
              cronut ramps kitsch tonx blog grailed. Microdosing craft beer
              disrupt messenger bag.
            </p>
            <p>Tumblr shaman four dollar toast shabby chic truffaut XOXO.</p>
            <p>
              Selfies taxidermy tacos vexillologist same everyday carry mustache
              put a bird on it bushwick deep v.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xrgwgkyw"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const data = graphql`
  query {
    allContentfulGatsbyTutorial(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`;

export default Contact;
