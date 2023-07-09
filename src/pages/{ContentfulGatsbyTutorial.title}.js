import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";
import slugify from "slugify";
import SEO from "../components/SEO";

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.allContentfulGatsbyTutorial.nodes[0];

  const pathToImage = getImage(image);
  const { tags, tools, instructions, ingredients } = content;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <h2>{title}</h2>
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h5>{title}</h5>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => {
                  const tagSlug = slugify(tag, { lower: true });
                  return (
                    <Link to={`/tags/${tagSlug}`} key={index} className="tag">
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            {/* rest of the content */}
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($title: String) {
    allContentfulGatsbyTutorial(filter: { title: { eq: $title } }) {
      nodes {
        content {
          tags
          ingredients
          instructions
          tools
        }
        description {
          description
        }
        prepTime
        image {
          gatsbyImageData
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            aspectRatio: 1.5
            width: 100
          )
        }
        cookTime
        title
      }
    }
  }
`;

export default RecipeTemplate;
