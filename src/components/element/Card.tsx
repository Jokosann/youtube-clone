import { EllipsisVertical } from 'lucide-react';

const Card = () => {
  return (
    <div className="w-full h-full space-y-3">
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://i.ytimg.com/vi/uezmvBiPgCc/hqdefault.jpg"
          alt="test card"
          className="w-full aspect-[2/1.15] object-cover"
        />
      </div>
      <div className="flex">
        <div className="w-12 h-full mr-3 overflow-hidden rounded-full">
          <img
            src="https://i.ytimg.com/vi/wRJmkKGRelU/hqdefault.jpg"
            alt="test card"
            className="w-full aspect-square rounded-full object-cover"
          />
        </div>
        <div className="max-w-full w-full">
          <p className="line-clamp-2 mb-[5px] font-medium">
            Lorem ipsum dolor sit amet const adipi elit. Tenetur sunt reprehenderit sequi sapiente
            expedita! Odio eos mollitia maiores consequatur debitis.
          </p>
          <p className="text-sm text-gray-600">Joko Santoso</p>
          <div className="text-sm flex items-center gap-1 text-gray-600">
            <p>3.5M views</p>
            <div className="w-[4px] aspect-square rounded-full bg-gray-600" />
            <p>5 mounth ago</p>
          </div>
        </div>
        <div>
          <div className="w-8 aspect-square flex items-start justify-end rounded-full cursor-pointer">
            <EllipsisVertical size={20} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
