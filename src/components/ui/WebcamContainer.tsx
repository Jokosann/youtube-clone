import { useStore } from '../../libs/zustand';
import Webcam from 'react-webcam';
import { ImCross } from 'react-icons/im';

const WebcamContainer = () => {
  const { webcam, setWebcam } = useStore();

  return (
    <>
      {webcam && (
        <div className="flex justify-center items-center px-6 bg-black/50 w-full min-h-screen fixed inset-0 z-[99] backdrop-blur-sm">
          <div className="relative w-full max-w-4xl aspect-[1/1.6] xs:aspect-[1/1] sm:aspect-[2/1.7] md:aspect-video rounded-lg mx-auto box-border">
            <div className="relative border-2 border-gray-300 rounded-xl overflow-hidden">
              <div className="absolute top-0 w-full h-11 border-b-2 border-gray-300 bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
                <div
                  onClick={setWebcam}
                  className="absolute top-0 right-0 z-[999] w-10 aspect-square grid place-content-center rounded-full cursor-pointer"
                >
                  <ImCross className="text-black" />
                </div>
                <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>

              <div className="w-full aspect-[1/1.6] xs:aspect-[1/1] sm:aspect-[2/1.7] md:aspect-video bg-white/70">
                <Webcam
                  className="w-full h-full object-cover"
                  videoConstraints={{
                    facingMode: 'user',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebcamContainer;
