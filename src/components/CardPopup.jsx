import { useState } from "react";
import { Button } from "./ui/button";

const CardPopup = ({
  title,
  text,
  left,
  price,
  disable,
  isSelected,
  onSelect,
  index,
}) => {
  const [pledge, setPledge] = useState("");

  const handleRadioClick = () => {
    onSelect(index);
  };

  return (
    <div>
      <div
        className={`w-full flex flex-col items-start justify-center py-[35px] px-[30px] border-[#f4f4f4] border-[1px] shadow-lg rounded-[8px] mt-[20px] mb-[30px] ${
          disable ? "out-of-stock" : ""
        } `}
      >
        <div className="flex items-start gap-[15px]">
          <div>
            <input
              type="checkbox"
              id={`checked-${index}`}
              name={`checked-${index}`}
              value={`checked-${index}`}
              className="mt-[5px] w-[25px] lg:w-[17px] h-[25px] lg:h-[17px] rounded-full appearance-none  border-[1px] border-[#aaaaaa]  checked:bg-[#3cb4ab] checked:border-[4px]  checked:border-[#e0dfdf] focus:outline-none"
              onChange={handleRadioClick}
              checked={isSelected}
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="w-full flex justify-between items-center mb-[20px]">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[10px] lg:gap-[20px]">
                <h6 className="text-[17px] font-bold text-black">{title}</h6>
                {price && (
                  <p className="text-[15px] text-[#3cb4ab] font-semibold ">
                    Pledge {price} or more
                  </p>
                )}
              </div>
              {left && (
                <p className="hidden lg:flex text-[16px] text-black font-bold">
                  {left} <span className="font-light text-[13px]">left</span>
                </p>
              )}
            </div>
            <p className="text-[14px] text-[#aaaaaa] leading-[26px] ">{text}</p>
          </div>
        </div>

        {isSelected && (
          <div className=" w-full mt-[30px] border-[#aaaaaa] border-t-[1px]">
            <div className="flex justify-between items-center mt-[20px]">
              <p>Enter your pledge</p>

              <form className="relative flex items-center gap-[15px]">
                <input
                  type="number"
                  className="border-[#aaaaaa] w-[90px] border-[1px] h-10 px-[20px] py-3 rounded-[40px] focus:border-[#157a74]"
                  value={pledge}
                  onChange={(e) => setPledge(e.target.value)}
                />
                <span className="absolute top-[25%] left-3 ">$</span>
                <Button>Continue</Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPopup;
