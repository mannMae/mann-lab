import { ButtomNavigation } from './ButtomNavigation';
import { Header } from './Header';
import { Inner, Wrapper } from './MainLayout.style';
import { SideNavigation } from './SideNavigation';

export const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <SideNavigation />
      <Inner>
        <Header />
        {children}
        <ButtomNavigation />
      </Inner>
    </Wrapper>
  );
};
