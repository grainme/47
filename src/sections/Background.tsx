import DrawerCard from "@/custom/Drawer";

export default function Background() {
  return (
    <div className="flex flex-col justify-between min-h-screen py-6 px-7 bg-[#f9f9f9] text-[#040404] font-JB">
      <div className="h-full w-full flex md:flex-row flex-col justify-between items-start">
        <div className="text-[13px] font-normal tracking-tight">BACKGROUND</div>
        <div className="flex gap-[13rem] md:text-[13px] text-[12px] font-light md:w-[30%] pt-5 md:pt-0">
          I'm a Computer and Data Engineering student at the National School of
          Applied Sciences in Khouribga.I love solving problems, especially in
          competitive programming, where I blend coding with algorithms.I'm also
          involved in university events and clubs, contributing as a graphic
          designer and technical lead. <br /> <br />
          Whether deciphering complex algorithms or crafting captivating
          designs, my belief is simple - every project, big or small, deserves a
          touch of brilliance.
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between md:text-[15px] text-[12px]">
        <div className="flex flex-col md:w-1/3  md:px-5">
          <DrawerCard triggerName="ACADEMIC" />

          <div className="font-GS">
            we blend creativity with practical design to make your online
            presence unforgettable. whether you're promoting a product, or
            showcasing your art, we create websites that leave a lasting impact.
          </div>
        </div>
        <div className="flex flex-col md:w-1/3 md:px-5 items-start">
          <DrawerCard triggerName="PERSONAL" />

          <div className="font-GS">
            we blend creativity with practical design to make your online
            presence unforgettable. whether you're promoting a product, or
            showcasing your art, we create websites that leave a lasting impact.
          </div>
        </div>
        <div className="flex flex-col md:w-1/3 md:px-5 items-start">
          <DrawerCard triggerName="CREATIVE" />
          <div className="font-GS">
            we blend creativity with practical design to make your online
            presence unforgettable. whether you're promoting a product, or
            showcasing your art, we create websites that leave a lasting impact.
          </div>
        </div>
      </div>
    </div>
  );
}
