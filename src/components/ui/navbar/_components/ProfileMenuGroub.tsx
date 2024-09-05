import { IProfileMenuGoub } from '@/types';
import { DropdownMenuGroup, DropdownMenuItem } from '../../DropdownMenu';

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
