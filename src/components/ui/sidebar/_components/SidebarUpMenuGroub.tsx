import { cn } from '@/lib/utils';
import { ISidebarMenuGroub } from '@/types';

type Iprops = {
  data: {
    item: ISidebarMenuGroub;
    sidebarUpActive: string;
    setSidebarUpActive: React.Dispatch<React.SetStateAction<string>>;
  };
  children: React.ReactNode;
};

const SidebarUpMenuGroub = ({ data, children }: Iprops) => {
  const { item, sidebarUpActive, setSidebarUpActive } = data;
  return (
    <div
      onClick={() => setSidebarUpActive(item.name)}
      className={cn('flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer', {
        'bg-[#f2f2f2]': sidebarUpActive === item.name,
      })}
    >
      {children}
      <span
        className={cn('text-sm', {
          'font-medium': sidebarUpActive === item.name,
        })}
      >
        {item.name}
      </span>
    </div>
  );
};

export default SidebarUpMenuGroub;
