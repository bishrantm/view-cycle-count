import svgPaths from "./svg-z6dgkm6otu";
import imgImage from "figma:asset/6ce65bcbb0912490ca08645e28be4b9ebc22b356.png";
import imgImage1 from "figma:asset/b07cda0f64927643b9d6b1fd52c0c539c1086835.png";
import imgAvatar from "figma:asset/42dbfd026d8568d0ce833af9d48120375cb2c5d1.png";

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="bg-[#e9f8f1] content-stretch flex items-center justify-center p-[8px] relative rounded-[5px] shrink-0" data-name=".Icon placeholder">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
              <path d={svgPaths.pf9bc8c0} fill="var(--fill-0, #27B973)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#272d37] text-[24px] tracking-[-0.24px] w-[min-content]">Would you like to approve count?</p>
    </div>
  );
}

function ItemImage() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[42px]" data-name="Item Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[-3.66%_-5%]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function PartNoQuantity() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Part No + Quantity">
      <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#252525] text-[15px]">WH-A01</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <PartNoQuantity />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis whitespace-nowrap">Loading Dock 3, Central Distribution Center</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <ItemImage />
      <Header />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_double_arrow_up">
        <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9.33333">
            <g id="Vector">
              <path d={svgPaths.p13021180} fill="var(--fill-0, #1F945C)" />
              <path d={svgPaths.p2ab2d00} fill="var(--fill-0, #1F945C)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">1100 EA</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame10 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #252525)" id="Ellipse 3573" r="2" />
        </svg>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[16px] text-right whitespace-nowrap">+100 EA</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start justify-between relative shrink-0 w-[180px]" data-name="Component 44">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[12px] w-[min-content]">Submitted Count</p>
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="keyboard_double_arrow_up">
            <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9.33333">
                <g id="Vector">
                  <path d={svgPaths.p13021180} fill="var(--fill-0, #E33B32)" />
                  <path d={svgPaths.p2ab2d00} fill="var(--fill-0, #E33B32)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">$ 22.50</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start justify-between relative shrink-0 w-[180px]" data-name="Component 43">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[12px] whitespace-nowrap">Change in Valuation</p>
      <Frame2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px] whitespace-nowrap">Maya Thompson</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <Text />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Component 36">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[12px] w-[min-content]">Counted By</p>
      <Frame4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-start flex flex-wrap gap-[14px_24px] items-start relative shrink-0 w-[384px]">
      <Component2 />
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[42px] items-start justify-between relative shrink-0 w-[180px]" data-name="Component 42">
        <p className="leading-[normal] relative shrink-0 text-[#68727d] text-[12px] w-full">Prior System Count</p>
        <div className="flex flex-col h-[24px] justify-center leading-[0] relative shrink-0 text-[#252525] text-[16px] w-full">
          <p className="leading-[normal]">1000 EA</p>
        </div>
      </div>
      <Component1 />
      <Component />
    </div>
  );
}

function ItemStatus() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] shrink-0 w-full" data-name="Item Status">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[18px_28px] items-center p-[10px] relative w-full">
          <Frame8 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <ItemStatus />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fdf6ea] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-start px-[8px] py-[6px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="error">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p18df76a0} fill="var(--fill-0, #EFA22F)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px relative text-[#604113] text-[0px] text-[14px]">
            <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[normal]">{`Note: `}</span>
            <span className="leading-[normal]">Approving will adjust on-hand for any item with a discrepancy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text content">
      <Frame7 />
      <Frame1 />
    </div>
  );
}

export default function ApproveCount() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-start p-[24px] relative rounded-[8px] size-full" data-name="Approve Count">
      <div aria-hidden="true" className="absolute border-2 border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_0px_rgba(16,24,40,0.1),0px_4px_6px_0px_rgba(16,24,40,0.1)]" />
      <TextContent />
      <div className="content-stretch flex gap-[12px] items-end justify-center relative shrink-0 w-full" data-name=".Modal actions">
        <button className="bg-white cursor-pointer relative rounded-[6px] shrink-0" data-name="Button">
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip pl-[16px] pr-[20px] py-[12px] relative rounded-[inherit]">
            <div className="bg-[#f7f7f8] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Theme=Light, Roundness=Box, Hierarchy=Primary, Type=Lead icon, Size=Small, Color=Gray">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <p className="font-['Source_Code_Pro:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-left whitespace-nowrap">esc</p>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#272d37] text-[15px] text-left whitespace-nowrap">Cancel</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#dae0e6] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)]" />
        </button>
        <div className="bg-[#0a77ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)]" data-name="Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
              <div className="bg-[#f7f7f8] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Theme=Light, Roundness=Box, Hierarchy=Primary, Type=Lead icon, Size=Small, Color=Gray">
                <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Lead Icon">
                  <div className="absolute bottom-1/4 left-[10.42%] right-[10.42%] top-1/4" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 6">
                      <path d={svgPaths.p1d069a00} fill="var(--fill-0, #252525)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Approve Count</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}