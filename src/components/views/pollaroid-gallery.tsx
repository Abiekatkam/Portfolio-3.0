import PROFILE_PICTURE from "../../assets/profile-pic-temp.png";
import PIXALETED_PROFILE_PICTURE from "../../assets/pixaled-profile-pic.png";
import PIN_IMAGE from "../../assets/drawing-pin.png";


const PolaroidGallery = () => {
  return (
    <div className="sm:flex hidden items-center justify-center p-10 mx-auto">
      <div className="relative flex items-center justify-center w-full max-w-4xl">
        {/* Left Polaroid */}
        <div className="relative z-10 transform -rotate-[12deg] translate-x-4 translate-y-10">
          <PolaroidFrame image={PIXALETED_PROFILE_PICTURE} />
        </div>

        {/* Right Polaroid (Overlaps Left) */}
        <div className="relative z-20 transform rotate-[6deg] -translate-x-4">
          <PolaroidFrame image={PROFILE_PICTURE} />
        </div>
      </div>
    </div>
  );
};

const PolaroidFrame = ({ image }: { image: string }) => {
  return (
    <div className="relative group">
      {/* The Push Pin */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
        <img
            src={PIN_IMAGE}
            alt="Push Pin"
            className="w-16 h-16 object-cover grayscales contrast-125 brightness-90"
          />
      </div>

      {/* The Polaroid Paper */}
      <div className="bg-white p-4 pt-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100">
        <div className="w-64 h-72 overflow-hidden bg-gray-200 group">
          <img
            src={image}
            alt="Portrait"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 contrast-125 brightness-90"
          />
        </div>
      </div>
    </div>
  );
};

export default PolaroidGallery;
