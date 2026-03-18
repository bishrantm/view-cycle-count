import svgPaths from "./svg-th52rrl8x7";

function Frame2() {
  return (
    <div className="h-[34px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-start pl-[16px] relative size-full">
        <button className="cursor-pointer h-[34px] relative shrink-0" data-name=".Tab base">
          <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip py-[8px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="multi-location">
              <div className="absolute inset-[12.5%_4.17%_4.17%_12.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p102b6400} fill="var(--fill-0, #68727D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[14px] text-left">Lot</p>
          </div>
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
        </button>
        <div className="h-[34px] relative shrink-0" data-name=".Tab base">
          <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip py-[10px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                  <path d={svgPaths.p2fcac600} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Location</p>
          </div>
          <div aria-hidden="true" className="absolute border-[#0e69e2] border-b-2 border-solid inset-0 pointer-events-none" />
        </div>
        <button className="cursor-pointer h-[34px] relative shrink-0" data-name=".Tab base">
          <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip py-[10px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="boxes-2">
              <div className="-translate-y-1/2 absolute aspect-[20/20.00016212463379] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p212ff80} fill="var(--fill-0, #68727D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[14px] text-left">All Serial Units</p>
          </div>
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
        </button>
      </div>
    </div>
  );
}

function ToggleBase() {
  return (
    <div className="bg-[#0a77ff] content-stretch flex h-[16px] items-center justify-end p-[2px] relative rounded-[16px] shrink-0 w-[27.2px]" data-name="Toggle Base">
      <div className="bg-white rounded-[128px] shadow-[0px_0.8px_1.6px_-0.8px_rgba(16,24,40,0.1),0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)] shrink-0 size-[12px]" data-name="Button" />
    </div>
  );
}

function AlignToText() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Align to Text">
      <ToggleBase />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Count all Locations</p>
    </div>
  );
}

function EntryMode() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] shrink-0 w-full" data-name="Entry Mode">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center pl-[12px] pr-[8px] py-[10px] relative w-full">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Toggle">
            <div className="content-stretch flex gap-[14px] items-center relative self-stretch shrink-0 w-[304px]" data-name="Toggle">
              <AlignToText />
              <TextContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] relative shrink-0 w-[200px]" data-name="Line Item">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A01</p>
        <p className="min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">Loading Dock 3, Central Distribution Center</p>
      </div>
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">1,000 EA</p>
      </div>
      <div className="bg-[#ecf4fc] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] tracking-[0.1px]">View Units</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[489px]">
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] relative shrink-0 w-[200px]" data-name="Line Item">
        <p className="relative shrink-0 text-[#252525] text-[15px]">LOT-1120000</p>
        <p className="min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">Prime Location Lot 47A</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#e9f8f1] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#a9e3c7] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[14px]">Active</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">250 EA</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[489px]">
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] relative shrink-0 w-[200px]" data-name="Line Item">
        <p className="relative shrink-0 text-[#252525] text-[15px]">LOT-1120012</p>
        <p className="min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">Prime Location Lot 47A</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#ffefee] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#fea19b] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[14px]">Quarantine</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">250 EA</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Frame4 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] relative shrink-0 w-[200px]" data-name="Line Item">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A02</p>
        <p className="min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">Loading Dock 3, Central Distribution Center</p>
      </div>
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">1,000 EA</p>
      </div>
      <div className="bg-[#ecf4fc] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] tracking-[0.1px]">View Units</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[489px]">
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] relative shrink-0 w-[200px]" data-name="Line Item">
        <p className="relative shrink-0 text-[#252525] text-[15px]">LOT-1120000</p>
        <p className="min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">Prime Location Lot 47A</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#e9f8f1] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#a9e3c7] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[14px]">Active</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">500 EA</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[489px]">
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] relative shrink-0 w-[200px]" data-name="Line Item">
        <p className="relative shrink-0 text-[#252525] text-[15px]">LOT-1120012</p>
        <p className="min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">Prime Location Lot 47A</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#ffefee] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#fea19b] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[14px]">Quarantine</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">500 EA</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[14px] relative w-full">
        <EntryMode />
        <Frame12 />
      </div>
    </div>
  );
}

export default function SerializedLots() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center pb-[16px] pt-[6px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.1)] size-full" data-name="Serialized Lots">
      <Frame2 />
      <Frame8 />
    </div>
  );
}