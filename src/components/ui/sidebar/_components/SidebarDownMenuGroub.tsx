import { cn } from '@/lib/utils';
import { ISidebarMenuGroub } from '@/types';

type IProps = {
  data: ISidebarMenuGroub;
  state: {
    sideActive: string;
    setSideActive: React.Dispatch<React.SetStateAction<string>>;
  };
};

const SidebarDownMenuGroub = ({ data, state }: IProps) => {
  return (
    <div
      onClick={() => state.setSideActive(data.name)}
      className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 px-4 py-3 rounded-lg"
    >
      {state.sideActive === data.name ? data.iconActive : data.icon}
      <p className={cn('text-[10px]', { 'font-medium': state.sideActive === data.name })}>{data.name}</p>
    </div>
  );
};

export default SidebarDownMenuGroub;
