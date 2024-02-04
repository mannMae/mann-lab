import { Inner, Wrapper } from './AppLayout.style';
import { ButtomNavigation } from './ButtomNavigation';
import { Header } from './Header';
import { SideNavigation } from './SideNavigation';

export const AppLayout = ({ children, title }) => {
  return (
    <Wrapper>
      <Inner>
        <Header isAppHeader={true} title={title} />
        {children}
        <ButtomNavigation />
      </Inner>
    </Wrapper>
  );
};
