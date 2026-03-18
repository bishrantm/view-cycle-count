import svgPaths from "./svg-7u24rk9tjw";

function Scrollbar() {
  return (
    <div className="absolute h-[524px] right-[95px] top-[45px] w-0" data-name="Scrollbar">
      <div className="content-stretch flex flex-col items-start p-[10px] size-full" />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[1.143px] border-solid inset-[-1.143px] pointer-events-none rounded-[129.143px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="location_on">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 13.3333">
            <g id="Vector">
              <path d={svgPaths.p1e430ff2} fill="var(--fill-0, #0A77FF)" />
              <path d={svgPaths.p25704700} fill="var(--fill-0, #0A77FF)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px overflow-hidden relative text-[#68727d] text-[15px] text-ellipsis whitespace-nowrap">WH-A02</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <Container />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-nowrap">Zone A, Bay 2, Central Warehouse</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[44px] items-center min-h-px min-w-px relative">
      <Avatar />
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Last Counted: 15/10/2025, 2:30 PM</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="info">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p60a6c00} fill="var(--fill-0, #EFA22F)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[12px]">Selecting this location will add all its items to the plan.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#fdf6ea] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[1.143px] border-solid inset-[-1.143px] pointer-events-none rounded-[129.143px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="location_on">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 13.3333">
            <g id="Vector">
              <path d={svgPaths.p1e430ff2} fill="var(--fill-0, #0A77FF)" />
              <path d={svgPaths.p25704700} fill="var(--fill-0, #0A77FF)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px overflow-hidden relative text-[#68727d] text-[15px] text-ellipsis whitespace-nowrap">Zone A-03</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
      <Container1 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-nowrap">Zone A, Bay 2, Central Warehouse</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[44px] items-center min-h-px min-w-px relative">
      <Avatar1 />
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame7 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Last Counted: 15/10/2025, 2:30 PM</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="info">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p60a6c00} fill="var(--fill-0, #EFA22F)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[12px]">Selecting this location will add all its items to the plan.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#fdf6ea] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] size-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#0e69e2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_0px_rgba(16,24,40,0.1),0px_4px_6px_0px_rgba(16,24,40,0.1)]" />
      <Scrollbar />
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Search Cards">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative w-full">
            <Frame8 />
            <Frame2 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Search Cards">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative w-full">
            <Frame9 />
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}