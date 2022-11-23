import { GetStaticProps } from "next";
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Link from "next/link";
import Achievements from '../components/Achievements';
import { Achievement, Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utills/fetchPageInfo";
import { fetchExperiences } from "../utills/fetchExperiences";
import { fetchSkills } from "../utills/fetchSkills";
import { fetchProjects } from "../utills/fetchProjects";
import { fetchSocial } from "../utills/fetchSocials";
import { fetchAchievement } from "../utills/fetchAchievement";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  achievements: Achievement[];
};

const Home = ({
  projects, 
  skills, 
  pageInfo, 
  experiences, 
  socials, 
  achievements
}: Props) => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[black]/80 bg-[rgb(255,255,255)] text-black z-0">
      <Head>
        <title>Kayode's Portfoilo</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-start'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skill" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="achievements" className='snap-center'>
        <Achievements achievements={achievements} />
      </section>


      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media-exp1.licdn.com/dms/image/C5603AQH4P68PF-b9bQ/profile-displayphoto-shrink_400_400/0/1555113668175?e=1672876800&v=beta&t=V4Xuu-CnjERBqSaZcm-ajao4DsLxRxpDo1Uid87HhAc"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const achievements: Achievement[] = await fetchAchievement();


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      achievements
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};