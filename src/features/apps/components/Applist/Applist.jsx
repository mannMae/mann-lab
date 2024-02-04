import {
  App,
  AppInfomation,
  AppThumbnail,
  AppTitle,
  Wrapper,
} from './Applist.style';

import stoneStack from 'assets/images/apps/stone-stack.jpg';
import notebook from 'assets/images/apps/notebook.jpg';
import primaryHacthes from 'assets/images/theme/background-hatches-primary.png';
import { Link } from 'react-router-dom';

export const Applist = () => {
  return (
    <Wrapper>
      <App primaryHacthes={primaryHacthes}>
        <AppInfomation>
          <AppThumbnail src={notebook} />
          <AppTitle>나에게</AppTitle>
        </AppInfomation>
      </App>
      <Link to="habit-stacks">
        <App primaryHacthes={primaryHacthes}>
          <AppInfomation>
            <AppThumbnail src={stoneStack} />
            <AppTitle>습관 쌓기</AppTitle>
          </AppInfomation>
        </App>
      </Link>
    </Wrapper>
  );
};
