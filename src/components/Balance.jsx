import { Progress } from "@/components/ui/progress";

const Balance = () => {
  return (
    <section className="bg-white  w-full py-[20px] px-[40px] border-[#f4f4f4] border-[1px] shadow-lg rounded-[8px] mt-[280px] lg:mt-[210px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start pb-[20px]">
          <h4 className="text-[30px] lg:text-[23px] font-bold">$89,914</h4>
          <p className="text-[14px] text-[#aaaaaa]">of $100,000 backed</p>
        </div>
        <div className="flex flex-col items-center md:items-start px-[80px] py-[20px] border-[#d9d9d9] border-t-[1px] border-b-[1px] md:border-r-[1px] md:border-l-[1px]">
          <h4 className="text-[30px] lg:text-[23px] font-bold">5,007</h4>
          <p className="text-[14px] text-[#aaaaaa]">total backers</p>
        </div>
        <div className="flex flex-col items-center md:items-start pt-[20px]">
          <h4 className="text-[30px] lg:text-[23px] font-bold">56</h4>
          <p className="text-[14px] text-[#aaaaaa]">days left</p>
        </div>
      </div>

      <Progress value={73} className="mt-[30px]" />
    </section>
  );
};

export default Balance;
