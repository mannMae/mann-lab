import { MainLayout } from 'components/Layout';
import { Introduction } from '../components/Introduction';
import { Careers } from '../components/Careers';
import { Experiences } from '../components/Experiences';
import { Skills } from '../components/Skills';
import { Educations } from '../components/Educations';

export const About = () => {
  return (
    <>
      <MainLayout>
        <Introduction />
        <Careers />
        <Experiences />
        <Skills />
        <Educations />
      </MainLayout>
    </>
  );
};
