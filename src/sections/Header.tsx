import { useState } from "react";
import TopHeader from "./TopHeader";

export default function Header() {
  const [MouseImagesHidden, setMouseImagesHidden] = useState(false);

  return (
    <div className="flex flex-col justify-between md:min-h-screen min-h-[94vh] py-6 px-7 bg-[#040404] text-[#ececec] select-none">
      <div className="h-full w-full flex flex-row justify-between md:items-end items-center">
        <div className="md:text-[16px] text-[14px] font-GS font-medium tracking-tight">
          marouane boufarouj
        </div>
        <div className="flex md:flex-row md:gap-[10rem] md:text-[13px] text-[11px] font-JB font-light">
          <TopHeader />
          <div className="flex gap-[1.3rem]">
            <div
              onClick={() => {
                setMouseImagesHidden(!MouseImagesHidden);
              }}
              className="cursor-pointer hover:text-[#e3e3e3] hover:underline "
            >
              REWIND-BLOW
            </div>
          </div>
        </div>
      </div>
      <div className="max-h-fit py-4 opacity-40 flex justify-center items-center">
        {MouseImagesHidden ? (
          <div className="font-JB text-[11.3px] tracking-tight font-thin flex flex-col justify-center items-center gap-3">
            <div>WELCOME!</div>
            <div>IF A FEW PEOPLE CAN SEE IT THAT HAS TO BE ENOUGH</div>
          </div>
        ) : null}
      </div>
      <div className="font-GS md:text-[23px] text-[15px] font-medium tracking-tight">
        i use design & technology to build digital experiences.
        <br />i love algorithms & problem solving.
      </div>
    </div>
  );
}
