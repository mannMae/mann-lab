import {
  IoFlask,
  IoFlaskOutline,
  IoHome,
  IoHomeOutline,
  IoNewspaper,
  IoNewspaperOutline,
} from 'react-icons/io5';
import { TbAppWindow, TbAppWindowFilled } from 'react-icons/tb';
import { PiUserListFill, PiUserList } from 'react-icons/pi';

export const routes = [
  {
    name: 'HOME',
    url: '/',
    icons: [<IoHomeOutline size="20" />, <IoHome size="20" />],
  },
  {
    name: 'ABOUT',
    url: '/about',
    icons: [<PiUserList size="20" />, <PiUserListFill size="20" />],
  },
  {
    name: 'PORTFOLIO',
    url: '/portfolio',
    icons: [<IoNewspaperOutline size="20" />, <IoNewspaper size="20" />],
  },
  {
    name: 'P.APPS',
    url: '/papps',
    icons: [<TbAppWindow size="20" />, <TbAppWindowFilled size="20" />],
  },
  {
    name: 'RESEARCHES',
    url: '/researches',
    icons: [<IoFlaskOutline size="20" />, <IoFlask size="20" />],
  },
];
