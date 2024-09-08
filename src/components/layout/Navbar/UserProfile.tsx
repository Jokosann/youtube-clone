import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

import { ScrollArea } from '@/components/ui/ScrollArea';

import Profile from '/images/user1.png';
import { listUserProfile } from '@/data/constants';
import ProfileMenuGroub from '@/components/layout/Navbar/ProfileMenuGroub';

function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center">
          <img src={Profile} alt="Profile" className="w-8 aspect-square rounded-full cursor-pointer" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] max-h-screen -mt-1 mr-4 xs:-mt-10 xs:mr-12 sm:mr-14 rounded-xl">
        <DropdownMenuLabel className="h-[104px] flex gap-4 p-4">
          <div>
            <img
              src={Profile}
              alt="Profile"
              className="w-10 aspect-square rounded-full cursor-pointer"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-normal">Joko Santoso</span>
            <span className="text-base font-normal mb-2">@jokosann16</span>
            <span className="font-normal text-blue-600 cursor-pointer">View tour channel</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-500/20" />
        <ScrollArea className="w-full h-[calc(100vh-180px)] xs:h-[calc(100vh-145px)]">
          <ProfileMenuGroub data={listUserProfile.account} />
          <DropdownMenuSeparator className="bg-gray-500/20" />

          <ProfileMenuGroub data={listUserProfile.member} />
          <DropdownMenuSeparator className="bg-gray-500/20" />

          <ProfileMenuGroub data={listUserProfile.edit} />
          <DropdownMenuSeparator className="bg-gray-500/20" />

          <ProfileMenuGroub data={listUserProfile.services} />
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserProfile;
