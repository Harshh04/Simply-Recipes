import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulGatsbyTutorial(sort: { title: ASC }) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulGatsbyTutorial.nodes;
  return (
    <section className="recipes-container page">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
