import {
  IoHome,
  IoHomeOutline,
  IoNewspaper,
  IoNewspaperOutline,
} from 'react-icons/io5';
import { TbAppWindow, TbAppWindowFilled } from 'react-icons/tb';
import { PiUserListFill, PiUserList } from 'react-icons/pi';
import { IoSearchCircleOutline, IoSearchCircle } from 'react-icons/io5';

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
    name: 'APPS',
    url: '/apps',
    icons: [<TbAppWindow size="20" />, <TbAppWindowFilled size="20" />],
  },
  {
    name: 'RESEARCHES',
    url: '/researches',
    icons: [<IoSearchCircleOutline size="20" />, <IoSearchCircle size="20" />],
  },
];
