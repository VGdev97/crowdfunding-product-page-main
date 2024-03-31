import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardPopup from "./CardPopup";
import { cardData } from "@/constants/data";

const Card = ({ title, text, left, price, disable }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
    <div
      className={`w-full flex flex-col items-start py-[35px] px-[30px] border-[#f4f4f4] border-[1px] shadow-lg rounded-[8px] mb-[30px] ${
        disable ? "out-of-stock" : ""
      }`}
    >
      <div className="w-full flex justify-between items-center mb-[20px]">
        <h6 className="text-[17px] font-bold">{title}</h6>
        <p className="text-[14px] text-[#3cb4ab] font-semibold">
          Pledge {price} or more
        </p>
      </div>
      <p className="text-[14px] text-[#aaaaaa] leading-[26px] mb-[30px]">
        {text}
      </p>
      <div className="w-full flex justify-between items-center">
        <p className="text-[26px] font-bold flex items-center gap-[8px]">
          {left}{" "}
          <span className="text-[13px] font-light text-[#aaaaaa]">left</span>
        </p>
        <Button
          variant="secondary"
          disabled={disable}
          className={`${
            disable
              ? "bg-[#272727] text-[#aaaaaa] cursor-not-allowed"
              : "bg-[#157a74] text-primary-foreground rounded-[20px] hover:bg-[#157a74]/90"
          }`}
        >
          {!disable && (
            <Dialog>
              <DialogTrigger>Select Reward</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-[20px] font-bold">
                    Back this project
                  </DialogTitle>
                  <DialogTitle className="text-[14px] text-[#848484] font-light">
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world?
                  </DialogTitle>
                  <DialogDescription>
                    {cardData.map((data, index) => (
                      <CardPopup
                        key={index}
                        title={data?.title}
                        price={data?.price}
                        text={data?.text}
                        left={data?.left}
                        disable={data?.disable}
                        index={index}
                        isSelected={index === selectedCardIndex}
                        onSelect={handleCardSelect}
                      />
                    ))}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          {disable && <span>Out of stock</span>}
        </Button>
      </div>
    </div>
  );
};

export default Card;
