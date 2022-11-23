// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Achievement } from "../../typings";

const query = groq`
  *[_type == "achievement"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  achievement: Achievement[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const achievement: Achievement[] = await sanityClient.fetch(query);

  res.status(200).json({ achievement });
}