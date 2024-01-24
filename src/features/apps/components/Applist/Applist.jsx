import {
  App,
  AppInfomation,
  AppThumbnail,
  AppTitle,
  Wrapper,
} from './Applist.style';

import stoneStack from 'assets/images/apps/stone-stack.jpg';
import primaryHacthes from 'assets/images/theme/background-hatches-primary.png';

export const Applist = () => {
  return (
    <Wrapper>
      <App primaryHacthes={primaryHacthes}>
        <AppInfomation>
          <AppThumbnail src={stoneStack} />
          <AppTitle>습관 쌓기</AppTitle>
        </AppInfomation>
      </App>
    </Wrapper>
  );
};
