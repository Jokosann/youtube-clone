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
import History from '@/components/ui/svg/History';
import YourVideos from '@/components/ui/svg/YourVideos';
import Playlists from '@/components/ui/svg/Playlists';
import WatchLater from '@/components/ui/svg/WatchLater';
import LikedVideos from '@/components/ui/svg/LikedVideos';
import Trending from '@/components/ui/svg/Trending';
import Music from '@/components/ui/svg/Music';
import Films from '@/components/ui/svg/Films';
import Gaming from '@/components/ui/svg/Gaming';
import News from '@/components/ui/svg/News';
import Sport from '@/components/ui/svg/Sport';
import YoutubePremium from '@/components/ui/svg/YtPremium';
import YoutubeStudio from '@/components/ui/svg/YtStudio';
import YoutubeMusic from '@/components/ui/svg/YtMusic';
import YoutubeKids from '@/components/ui/svg/YtKids';
import Report from '@/components/ui/svg/Report';

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
  main: [
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
      name: 'Subscriptions',
      icon: <Subscriptions active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <Subscriptions active={true} className={cn('w-6 aspect-square')} />,
    },
  ],

  you: [
    {
      name: 'Your channel',
      icon: <YourChannel className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'History',
      icon: <History className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Playlists',
      icon: <Playlists className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Your videos',
      icon: <YourVideos className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Watch Later',
      icon: <WatchLater active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <WatchLater active={true} className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Liked videos',
      icon: <LikedVideos active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <LikedVideos active={true} className={cn('w-6 aspect-square')} />,
    },
  ],
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
  explore: [
    {
      name: 'Trending',
      icon: <Trending active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <Trending active={true} className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Music',
      icon: <Music active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <Music active={true} className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Films',
      icon: <Films active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <Films active={true} className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Gaming',
      icon: <Gaming active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <Gaming active={true} className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'News',
      icon: <News active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <News active={true} className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Sport',
      icon: <Sport active={false} className={cn('w-6 aspect-square')} />,
      iconActive: <Sport active={false} className={cn('w-6 aspect-square')} />,
    },
  ],
  more: [
    {
      name: 'Youtube Premium',
      icon: <YoutubePremium className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Youtube Studio',
      icon: <YoutubeStudio className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Youtube Music',
      icon: <YoutubeMusic className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Youtube Kids',
      icon: <YoutubeKids className={cn('w-6 aspect-square')} />,
    },
  ],
  service: [
    {
      name: 'Settings',
      icon: <Settings className={cn('w-6 aspect-square')} />,
    },
    {
      name: 'Report history',
      icon: <Report className={cn('w-6 aspect-square')} />,
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
