export default function Footer() {
  return (
    <div className="flex flex-col justify-between min-h-[22rem] py-6 px-7 bg-[#040404] text-[#ececec] items-start">
      <div className="font-JB text-[12px]">BOUFAROUJMAROUAN@GMAIL.COM</div>
      <div className="font-JB text-[11px] font-medium tracking-tight flex flex-row gap-2 items-end md:gap-0 justify-between w-full">
        <div className="flex flex-col md:flex-row md:gap-5 gap-2">
          <a href="https://twitter.com/grainmee" target="_blank">
            [ X ]
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0172e6721ac8a4d859"
            target="_blank"
          >
            [ UPWORK ]
          </a>
          <a href="https://linkedin.com/in/marouaneboufarouj/" target="_blank">
            [ LINKEDIN ]
          </a>
          <a href="https://github.com/grainme" target="_blank">
            [ GITHUB ]
          </a>
          <a
            href="https://www.youtube.com/channel/UC5tt4esLR7Wa_fSPETa_2tg"
            target="_blank"
          >
            [ YOUTUBE ]
          </a>
        </div>
        <div className="text-[#878787]">DEV BY MAROUANE BOUFAROUJ</div>
      </div>
    </div>
  );
}
