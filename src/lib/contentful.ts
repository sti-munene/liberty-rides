import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "", // This is the space ID. A space is like a project folder in Contentful terms
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "", // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
});
