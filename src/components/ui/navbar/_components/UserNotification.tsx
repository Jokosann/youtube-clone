import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

import { ScrollArea } from '@/components/ui/ScrollArea';
import Notifications from '../../svg/Notifications';
import Settings from '../../svg/Settings';
import UserNotificationMenu from './UserNotificationMenu';

const UserNotification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="hidden w-10 aspect-square rounded-full overflow-hidden xs:grid place-content-center cursor-pointer hover:bg-gray-100">
          <Notifications active={false} className="w-10 aspect-square" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="hidden xs:block rounded-xl w-screen sm:w-[480px] max-h-[650px] -mt-1 md:-mt-10 mr-16 md:mr-28">
        <DropdownMenuLabel className="h-[49px] flex items-center justify-between gap-4 p-4">
          <p className="text-base font-normal">Notifications</p>
          <div className="w-10 h-10 grid place-content-center rounded-full overflow-hidden hover:bg-gray-100 cursor-pointer">
            <Settings />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-500/20" />
        <ScrollArea className="w-full h-[calc(100vh-180px)] xs:h-[calc(100vh-145px)]">
          {Array.from({ length: 10 }).map((_, index) => (
            <UserNotificationMenu key={index} />
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNotification;
