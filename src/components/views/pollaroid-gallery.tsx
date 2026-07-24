import PROFILE_PICTURE_1 from "../../assets/pollarroid-pic-1.png";
import PROFILE_PICTURE_2 from "../../assets/pollarroid-pic-3.jpeg";
import PROFILE_PICTURE_3 from "../../assets/pollarroid-pic-2.jpeg";
import PIN_IMAGE from "../../assets/drawing-pin.png";


const PolaroidGallery = () => {
  return (
    <div className="sm:flex hidden items-center justify-center mb-10 mt-20 mx-auto">
      <div className="relative flex items-center justify-center w-full max-w-4xl">
        {/* Left Polaroid */}
        <div className="relative z-10 transform -rotate-[12deg] translate-x-10 translate-y-10">
          <PolaroidFrame image={PROFILE_PICTURE_1} />
        </div>
        
        {/* Center Polaroid (Overlaps Left and Right) */}
        <div className="relative z-20 transform rotate-[0deg]  -translate-y-10 shadow-lg">
          <PolaroidFrame image={PROFILE_PICTURE_2} />
        </div>

        {/* Right Polaroid (Overlaps Left) */}
        <div className="relative z-10 transform rotate-[12deg] -translate-x-10 translate-y-10">
          <PolaroidFrame image={PROFILE_PICTURE_3} />
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
            className="w-16 h-16 object-cover grayscales contrast-125 brightness-90 user-select-none pointer-events-none transition-transform duration-300 group-hover:scale-110"
          />
      </div>

      {/* The Polaroid Paper */}
      <div className="bg-white p-4 pt-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100">
        <div className="w-64 h-72 overflow-hidden bg-gray-200 group">
          <img
            src={image}
            alt="Portrait"
            className="w-full h-full object-cover transition-all duration-300 contrast-125 brightness-90 *:group-hover:scale-110 user-select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PolaroidGallery;
