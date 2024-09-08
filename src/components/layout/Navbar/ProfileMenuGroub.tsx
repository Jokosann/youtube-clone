import { IProfileMenuGoub } from '@/types/navbar-sidebar';
import { DropdownMenuGroup, DropdownMenuItem } from '../../ui/DropdownMenu';

const ProfileMenuGroub = ({ data }: { data: IProfileMenuGoub[] }) => {
  return (
    <DropdownMenuGroup>
      {data.map((item: IProfileMenuGoub, i: number) => (
        <DropdownMenuItem key={i} className="gap-4 cursor-pointer">
          {item.icon}
          <span>{item.name}</span>
        </DropdownMenuItem>
      ))}
    </DropdownMenuGroup>
  );
};

export default ProfileMenuGroub;
