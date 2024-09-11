import { EllipsisVertical } from 'lucide-react';
import User from '/images/user2.png';

const UserNotificationMenu = () => {
  return (
    <div className="p-4 relative cursor-pointer hover:bg-gray-100">
      <div className="flex gap-4 justify-between pr-8">
        <div className="flex-shrink-0">
          <img src={User} alt="user" className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div className="max-w-full w-full space-y-2">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque officia repudiandae ullam
            cumque consequuntur earum id!
          </p>
          <p className="text-xs text-[#707070]">2 Hour ago</p>
        </div>
        <div className="flex-shrink-0 w-[85px] aspect-video">
          <img
            src="https://i.ytimg.com/vi/wRJmkKGRelU/hqdefault.jpg"
            alt="tumbnaild"
            className="w-full h-auto object-center"
          />
        </div>
      </div>
      <EllipsisVertical className="absolute top-4 right-4" />
    </div>
  );
};

export default UserNotificationMenu;
