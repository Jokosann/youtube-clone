import { useSearchParams } from 'react-router-dom';

import DetailLayout from '@/layouts/DetailLayout';
import { Button } from '@/components/ui/Button';
import Share from '@/components/ui/svg/Share';
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import Download from '@/components/ui/svg/Download';
import { Ellipsis } from 'lucide-react';
import { DataVideoYoutube } from '@/types/video';
import { Channel } from '@/types/channel';
import { formatViewCount } from '@/utils/formatViewCount';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { formatPublishTimeDetail } from '@/utils/formatPublishTime';

const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const moreRef = useRef<HTMLDivElement | null>(null);

  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);
  const [video, setVideo] = useState<DataVideoYoutube | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMoreClick = () => {
    if (moreRef.current) {
      moreRef.current.style.height = isExpanded ? '112px' : 'auto';
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    const fetchVideoDetail = async () => {
      try {
        const response = await fetchApiFromYoutubeData('/videos', {
          part: 'snippet,contentDetails,statistics',
          id: videoId,
        });
        setVideo(response?.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideoDetail();
  }, [videoId]);

  useEffect(() => {
    if (video) {
      const fetchChannel = async () => {
        try {
          const response = await fetchApiFromYoutubeData('/channels', {
            part: 'snippet,contentDetails,statistics',
            id: video?.snippet?.channelId,
          });
          setChannel(response?.items[0]);
        } catch (error) {
          console.log(error);
        }
      };

      fetchChannel();
    }
  }, [video]);

  // console.log({ video, channel });

  return (
    <DetailLayout>
      <div className="max-w-screen-2xl w-full mx-auto mb-[1000px]">
        <div className="w-full lg:w-[65%]">
          {/* video */}
          <div className="w-full h-full aspect-video overflow-hidden">
            <div className="w-full h-full object-cover">
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
            <div className="text-lg sm:text-xl font-bold text-[rgb(15,15,15)] mt-4">
              {video?.snippet?.title}
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-2 md:-mt-2">
              <div className="flex items-center">
                <div className="w-10 center flex-shrink-0 mr-3">
                  <img
                    src={channel?.snippet?.thumbnails?.medium?.url}
                    alt="test"
                    className="w-10 aspect-square rounded-full"
                  />
                </div>

                <div className="mr-6">
                  <p className="font-medium">{channel?.snippet?.title}</p>
                  <p className="text-[#606060] text-xs">
                    {formatViewCount(Number(channel?.statistics?.subscriberCount))} subscribers
                  </p>
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
                    <span className="text-sm">
                      {formatViewCount(Number(video?.statistics?.likeCount))}
                    </span>
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
          <div ref={moreRef} className="relative w-full h-28 rounded-xl overflow-hidden">
            <div className="bg-[#f2f2f2] p-3  text-sm">
              <div className="font-medium space-x-2">
                <span>{formatViewCount(Number(video?.statistics?.viewCount))} views</span>
                <span>{video && formatPublishTimeDetail(video?.snippet?.publishedAt)}</span>
                <span className="text-[#0961d4]">
                  {video?.snippet?.tags && `#${video?.snippet?.tags[0]}`}
                </span>
                <span className="text-[#0961d4]">
                  {video?.snippet?.tags && `#${video?.snippet?.tags[1]}`}
                </span>
                <span className="text-[#0961d4]">
                  {video?.snippet?.tags && `#${video?.snippet?.tags[2]}`}
                </span>
              </div>
              <pre className="text-wrap mb-6">{video?.snippet?.description}</pre>
              <div className="flex flex-wrap justify-start gap-x-1 mb-4">
                {video?.snippet?.tags &&
                  video?.snippet?.tags.map((item: string, i: number) => (
                    <p key={i} className="text-[#0961d4]">
                      #{item}
                    </p>
                  ))}
              </div>

              <div onClick={handleMoreClick} className="cursor-pointer pt-2 font-medium">
                Show less
              </div>
            </div>

            {!isExpanded && (
              <div
                onClick={handleMoreClick}
                className="absolute bottom-0 right-0 bg-gradient-to-l from-[#f2f2f2] from-90% to-transparent text-sm font-medium py-1 px-4 cursor-pointer"
              >
                ...more
              </div>
            )}
          </div>
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
