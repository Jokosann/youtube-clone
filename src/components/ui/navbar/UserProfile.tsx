import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

import { ScrollArea } from '@/components/ui/ScrollArea';

import Profile from '/images/user1.png';

function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img src={Profile} alt="Profile" className="w-8 aspect-square rounded-full cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] max-h-screen -mt-9 mr-12 sm:mr-14">
        <DropdownMenuLabel className="h-[104px]">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="w-full h-[calc(100vh-200px)]">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Keyboard shortcuts</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>New Team</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Log out</span>
          </DropdownMenuItem>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserProfile;
