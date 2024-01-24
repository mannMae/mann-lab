import { MainLayout } from 'components/Layout';
import { Applist } from '../components';
import { Title, Wrapper } from './Apps.style';

export const Apps = () => {
  return (
    <>
      <MainLayout>
        <Wrapper>
          <Title>앱 목록</Title>
          <Applist />
        </Wrapper>
      </MainLayout>
    </>
  );
};
