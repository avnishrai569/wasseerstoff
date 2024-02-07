const NavigationBar = () => {
  return (
    <header className="self-stretch bg-snow flex flex-row items-start justify-start pt-[0.88rem] pb-[0rem] pr-[3.75rem] pl-[6.06rem] box-border gap-[1.63rem] top-[0] z-[99] sticky max-w-full text-left text-[1rem] text-black font-headline-h6 mq1275:pl-[3rem] mq1275:pr-[1.88rem] mq1275:box-border mq900:pl-[1.5rem] mq900:box-border">
      <div className="h-[3.75rem] w-[119.56rem] relative bg-snow hidden max-w-full" />
      <div className="w-[17.13rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border text-[1.28rem] font-archivo">
        <div className="relative whitespace-nowrap z-[1]">WASSERSTOFF</div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="w-[32.5rem] rounded-lg bg-ghostwhite flex flex-row items-center justify-end py-[0.25rem] px-[0.44rem] box-border max-w-full z-[1]">
          <div className="h-[2rem] w-[32.5rem] relative rounded-lg bg-ghostwhite hidden max-w-full" />
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <div className="w-[7.13rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border text-lightslategray">
        <div className="relative tracking-[0.44px] leading-[1.5rem] font-light z-[1]">
          Statistics
        </div>
      </div>
      <div className="w-[9.56rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
        <div className="w-[6.63rem] flex flex-col items-center justify-start gap-[0.94rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.88rem] pl-[1.13rem]">
            <div className="relative tracking-[0.44px] leading-[1.5rem] font-light z-[1]">
              Overview
            </div>
          </div>
          <div className="self-stretch h-[0.19rem] relative bg-darkslateblue z-[1]" />
        </div>
      </div>
      <div className="w-[25.63rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full text-lightslategray mq1600:w-[10rem]">
        <div className="w-[15.63rem] flex flex-row items-start justify-between gap-[1.25rem] mq1600:hidden">
          <div className="relative tracking-[0.44px] leading-[1.5rem] font-light z-[1]">
            Dashboard
          </div>
          <div className="relative tracking-[0.44px] leading-[1.5rem] font-light z-[1]">
            Analytics
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/profile.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/option.svg"
        />
      </div>
    </header>
  );
};

export default NavigationBar;
