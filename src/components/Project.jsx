import Card from "./Card";

const Project = () => {
  return (
    <section className="bg-white  w-full py-[20px] px-[25px] lg:px-[40px] border-[#f4f4f4] border-[1px] shadow-lg rounded-[8px] mt-[30px] mb-[120px]">
      <div className="mb-[20px]">
        <h4 className="text-[20px] lg:text-[18px] font-bold mb-[25px]">
          About this project
        </h4>
        <p className="text-[14px] text-[#aaaaaa] leading-[26px] mb-[25px]">
          The mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="text-[14px] text-[#aaaaaa] leading-[26px] mb-[25px]">
          Featuring artisan craftmanship, the simplicity of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>
      </div>
      {/* Cards */}
      <Card
        title="Bamboo Stand"
        price="$25"
        text="You get an egonomic stand of natural bamboo. You've helped us launch our promotial campaign, and you'll be added to a special Backer memeber list."
        left="101"
      />
      <Card
        title="Black Edition Stand"
        price="$75"
        text="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        left="101"
      />
      <Card
        disable={true}
        title="Mahogany Special Edition"
        price="$200"
        text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        left="0"
      />
      {/* Dialog */}
    </section>
  );
};

export default Project;
