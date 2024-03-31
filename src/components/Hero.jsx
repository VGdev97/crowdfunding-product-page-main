import heroImage from "../assets/logo-mastercraft.svg";
import saveImage from "../assets/icon-bookmark.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="absolute top-[-70px] bg-white w-full py-[20px] px-[40px] border-[#f4f4f4] border-[1px] shadow-lg rounded-[8px]">
      <img
        src={heroImage}
        alt="hero image"
        className="absolute top-[-30px] right-[50%] translate-x-[50%]"
      />
      <h3 className="text-center mt-[30px] font-bold text-[24px]">
        Mastercraft Bamboo Monitor Riser
      </h3>
      <p className="text-center text-[15px] text-[#929292] mt-[10px]">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between items-center my-[30px]">
        <Button>Back this project</Button>
        <div className="flex items-center gap-[10px] bg-[#f4f8f9] pr-[15px] rounded-[30px] h-full cursor-pointer">
          <img src={saveImage} alt="bookmark" className="w-[50px]" />
          <p className="hidden md:flex">Bookmarked</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
