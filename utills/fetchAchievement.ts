import { Achievement } from "../typings";

export const fetchAchievement = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAchievement`
  );

  const data = await res.json();
  const experiences: Achievement[] = data.achievement;

  // console.log("fetching", experiences);

  return experiences;
};