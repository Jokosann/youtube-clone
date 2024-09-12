import { useSearchParams } from 'react-router-dom';

import DetailLayout from '@/layouts/DetailLayout';
import { Button } from '@/components/ui/Button';
import Share from '@/components/ui/svg/Share';
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { useState } from 'react';
import Download from '@/components/ui/svg/Download';
import { Ellipsis } from 'lucide-react';

const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  return (
    <DetailLayout>
      <div className="max-w-screen-2xl w-full mx-auto mb-[1000px]">
        <div className="w-full lg:w-[65%]">
          {/* video */}
          <div className="w-full h-full aspect-video overflow-hidden">
            <div className="w-full h-full  object-cover">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                className="rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* title */}
          <div>
            <div className="text-lg sm:text-xl font-bold text-[rgb(15,15,15)] pt-2">
              Laravel 11 CRUD (Create, Read, Update and Delete) Ajax with Upload Image
            </div>
            <div className="flex flex-col md:flex-row justify-between pt-2 md:pt-0">
              <div className="flex items-center">
                <div className="w-10 center flex-shrink-0 mr-3">
                  <img
                    src="https://yt3.ggpht.com/ytc/AIdro_k_3OQeqAXAvn-59DX2VXxHWAmQIRzHXTxOARyfqyVFYg=s88-c-k-c0x00ffffff-no-rj"
                    alt="test"
                    className="w-10 aspect-square rounded-full"
                  />
                </div>

                <div className="mr-6">
                  <p className="font-medium">CairoCoders</p>
                  <p className="text-[#606060] text-xs">14.7K subscribers</p>
                </div>

                <Button className="rounded-3xl h-9">Subscribe</Button>
              </div>

              <div className="py-5 flex gap-4">
                <div className="w-[150px] rounded-3xl overflow-hidden flex">
                  <Button
                    onClick={() => setLikeActive((prev) => !prev)}
                    variant="secondary"
                    className="relative w-[60%] flex-shrink-0 flex gap-1 rounded-none hover:bg-[#edecec] whitespace-nowrap"
                  >
                    {!likeActive ? (
                      <BiLike size={23} className="flex-shrink-0" />
                    ) : (
                      <BiSolidLike size={23} className="flex-shrink-0" />
                    )}
                    <span className="text-sm">154</span>
                    <div className="absolute -right-[1px] w-[2px] h-7 bg-[#e5e5e5]" />
                  </Button>
                  <Button
                    onClick={() => setDislikeActive((prev) => !prev)}
                    variant="secondary"
                    className="w-[40%] flex justify-start rounded-none hover:bg-[#e5e5e5]"
                  >
                    {!dislikeActive ? (
                      <BiDislike size={23} className="flex-shrink-0" />
                    ) : (
                      <BiSolidDislike size={23} className="flex-shrink-0" />
                    )}
                  </Button>
                </div>

                <Button variant="secondary" className="rounded-3xl hover:bg-[#e5e5e5]">
                  <Share className="mr-2" /> <span className="font-medium">Share</span>
                </Button>

                <Button
                  variant="secondary"
                  className="hidden sm:flex md:hidden xl:flex rounded-3xl hover:bg-[#e5e5e5]"
                >
                  <Download className="mr-2" /> <span className="font-medium">Download</span>
                </Button>

                <Button variant="secondary" size="icon" className="rounded-3xl hover:bg-[#e5e5e5]">
                  <Ellipsis size={20} />
                </Button>
              </div>
            </div>
          </div>
          {/* description */}
          <div></div>
          {/* comment */}
          <div></div>
        </div>
        {/* category */}
        <div></div>
      </div>
    </DetailLayout>
  );
};

export default DetailPage;
