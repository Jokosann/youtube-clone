import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

import { ScrollArea } from '@/components/ui/ScrollArea';
import Notifications from '@/components/ui/svg/Notifications';
import Settings from '@/components/ui/svg/Settings';
import UserNotificationMenu from '@/components/layout/Navbar/UserNotificationMenu';
import { Button } from '@/components/ui/Button';

const UserNotification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden xs:flex">
          <Notifications active={false} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="hidden xs:block rounded-xl w-screen sm:w-[480px] h-[650px] -mt-1 md:-mt-12 mr-16 md:mr-28">
        <DropdownMenuLabel className="h-[49px] flex items-center justify-between gap-4 p-4">
          <p className="text-base font-normal">Notifications</p>
          <div className="w-10 h-10 center rounded-full overflow-hidden hover:bg-gray-100 cursor-pointer">
            <Settings />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-500/20" />
        <ScrollArea className="w-full h-[calc(100%-49px)]">
          {Array.from({ length: 20 }).map((_, index) => (
            <UserNotificationMenu key={index} />
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNotification;
