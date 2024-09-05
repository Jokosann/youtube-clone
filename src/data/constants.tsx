import { cn } from '@/lib/utils';
import User1 from '/images/user1.png';
import User2 from '/images/user2.png';
import User3 from '/images/user3.png';
import User4 from '/images/user4.png';
import User5 from '/images/user5.png';
import GoogleAccount from '@/components/ui/svg/GoogleAccount';
import YourChannel from '@/components/ui/svg/YourChannel';
import SignOut from '@/components/ui/svg/SignOut';
import Purchases from '@/components/ui/svg/Purchases';
import YtStudioLight from '@/components/ui/svg/YtStudioLight';
import YourData from '@/components/ui/svg/YourData';
import Theme from '@/components/ui/svg/Theme';
import Language from '@/components/ui/svg/Language';
import Restricted from '@/components/ui/svg/Restricted';
import Keyboard from '@/components/ui/svg/Keyboard';
import Location from '@/components/ui/svg/Location';
import Settings from '@/components/ui/svg/Settings';
import Help from '@/components/ui/svg/Help';
import Feedback from '@/components/ui/svg/Feedback';
import Home from '@/components/ui/svg/Home';
import Shorts from '@/components/ui/svg/Shorts';
import You from '@/components/ui/svg/You';
import Subscriptions from '@/components/ui/svg/Subscriptions';

export const navbarFilter = [
  'all',
  'javascript',
  'computers',
  'music',
  'gaming',
  'podcasts',
  'news',
  'live',
  'mobile lagends',
  'letto',
  'playlists',
  'gatgets',
  'albums',
  'house music',
  'comedy',
  'vocal music',
  'seminars',
  'sports',
  'resently uploaded',
  'new to you',
];

export const listSidebarDown = [
  {
    name: 'Home',
    icon: <Home active={false} className={cn('w-6 aspect-square')} />,
    iconActive: <Home active={true} className={cn('w-6 aspect-square')} />,
  },
  {
    name: 'Shorts',
    icon: <Shorts active={false} className={cn('w-6 aspect-square')} />,
    iconActive: <Shorts active={true} className={cn('w-6 aspect-square')} />,
  },
  {
    name: 'subscriptions',
    icon: <Subscriptions active={false} className={cn('w-6 aspect-square')} />,
    iconActive: <Subscriptions active={true} className={cn('w-6 aspect-square')} />,
  },
  {
    name: 'You',
    icon: <You active={false} className={cn('w-6 aspect-square')} />,
    iconActive: <Shorts active={true} className={cn('w-6 aspect-square')} />,
  },
];

export const listSidebarUp = {
  main: ['home', 'shorts', 'subscriptions'],
  you: ['your channel', 'history', 'playlists', 'your videos', 'watch later', 'liked videos'],
  subscriptions: [
    {
      name: 'Progammer Zaman Now',
      image: User1,
    },
    {
      name: 'Web Progamming UNPAS',
      image: User2,
    },
    {
      name: 'VIP CODE STUDIO',
      image: User3,
    },
    {
      name: 'VoidFnc',
      image: User4,
    },
    {
      name: 'Dea Afrizal',
      image: User5,
    },
  ],
  explore: ['trending', 'music', 'films', 'gaming', 'news', 'sport'],
  more: ['youtube premium', 'youtube studio', 'youtube music', 'youtube kids'],
  service: ['settings', 'report history', 'help', 'send feedback'],
};

export const listUserProfile = {
  account: [
    {
      name: 'Google Account',
      icon: <GoogleAccount className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Switch account',
      icon: <YourChannel className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Sign out',
      icon: <SignOut className={cn('w-6 aspect-square')} />,
    },
  ],
  member: [
    {
      name: 'Youtube Studio',
      icon: <YtStudioLight className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Purchases and memberships',
      icon: <Purchases className={cn('w-6 aspect-square')} />,
    },
  ],
  edit: [
    {
      name: 'Your data in Youtube',
      icon: <YourData className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Appearance',
      icon: <Theme className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Language',
      icon: <Language className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Restricted Mode',
      icon: <Restricted className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Location',
      icon: <Location className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Keyboard shortcuts',
      icon: <Keyboard className={cn('w-6 aspect-square')} />,
    },
  ],
  services: [
    {
      name: 'Settings',
      icon: <Settings className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Help',
      icon: <Help className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Send feedback',
      icon: <Feedback className={cn('w-6 aspect-square')} />,
    },
  ],
};
