import { MainLayout } from 'components/Layout';
import { Introduction } from '../components/Introduction';
import { Careers } from '../components/Careers';
import { Experiences } from '../components/Experiences';
import { Skills } from '../components/Skills';
import { Educations } from '../components/Educations';
import styled from 'styled-components';

export const About = () => {
  return (
    <>
      <MainLayout>
        {/* <Introduction />
        <Careers />
        <Experiences />
        <Skills />
        <Educations /> */}
        <Frame src="https://mannmae.github.io/resume/" />
      </MainLayout>
    </>
  );
};

const Frame = styled.iframe`
  width: 100%;
  height: 100%;

  outline: none;
  border: none;
`;
