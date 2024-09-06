import { EllipsisVertical } from 'lucide-react';
import User from '/images/user2.png';

const UserNotificationMenu = () => {
  return (
    <div className="p-4 relative cursor-pointer hover:bg-gray-100">
      <div className="flex justify-between pr-8">
        <div className="w-[75px] flex items-start overflow-hidden mr-2">
          <img src={User} alt="user" className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div className="max-w-full w-full space-y-2 pr-4">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque officia repudiandae ullam
            cumque consequuntur earum id!
          </p>
          <p className="text-xs text-[#707070]">2 Hour ago</p>
        </div>
        <div className="w-[86px] aspect-video">
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
