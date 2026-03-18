import svgPaths from "./svg-ny9lxp0vg1";
import imgTableImages from "figma:asset/69115701eb59753545c34c08b5df63d986702686.png";
import imgAvatar from "figma:asset/42dbfd026d8568d0ce833af9d48120375cb2c5d1.png";

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="bg-[#ffefee] content-stretch flex items-center justify-center p-[8px] relative rounded-[5px] shrink-0" data-name=".Icon placeholder">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
              <path d={svgPaths.p14cf7c80} fill="var(--fill-0, #E33B32)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#272d37] text-[24px] tracking-[-0.24px] w-[min-content]">Would you like to reject the count?</p>
    </div>
  );
}

function TableImages() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[40px]" data-name="Table Images">
      <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute left-1/4 max-w-none size-1/2 top-1/4" src={imgTableImages} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.5px] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function MdiBarcodeOff() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:barcode-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:barcode-off">
          <path d={svgPaths.p153f9a00} fill="var(--fill-0, #252525)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#e9f8f1] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#a9e3c7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[14px] whitespace-nowrap">Active</p>
      </div>
      <div className="bg-[#efeff1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Item control type">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <MdiBarcodeOff />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">Non-Serialized</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[15px] text-ellipsis whitespace-nowrap">P-15891</p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-full items-start relative shrink-0">
      <Heading />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[341px]">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TableImages />
      <div className="flex flex-row items-center self-stretch">
        <Frame4 />
      </div>
    </div>
  );
}

function Frame11() {
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
      <Frame11 />
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
    <div className="content-stretch flex flex-col h-[42px] items-start justify-between relative shrink-0 w-[200px]" data-name="Component 44">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[12px] w-[min-content]">Submitted Count</p>
      <Frame />
    </div>
  );
}

function Frame2() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">$ 22.50</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start justify-between relative shrink-0 w-[200px]" data-name="Component 43">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[12px] whitespace-nowrap">Change in Valuation</p>
      <Frame1 />
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

function Frame3() {
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
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[200px]" data-name="Component 36">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[12px] w-[min-content]">Counted By</p>
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-start flex flex-wrap gap-[14px_24px] items-start relative shrink-0 w-[428px]">
      <Component2 />
      <div className="content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[42px] items-start justify-between relative shrink-0 w-[200px]" data-name="Component 42">
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
    <div className="bg-[#fafbfc] content-center flex flex-wrap gap-[18px_28px] items-center p-[10px] relative rounded-[6px] shrink-0 w-[448px]" data-name="Item Status">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Frame5 />
      <Frame12 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <ItemStatus />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame10 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Checkbox">
            <rect fill="var(--fill-0, #ECF4FC)" height="20" rx="10" width="20" x="1" y="1" />
            <rect height="20" rx="10" stroke="var(--stroke-0, #0E69E2)" strokeWidth="2" width="20" x="1" y="1" />
            <circle cx="11" cy="11" fill="var(--fill-0, #0A77FF)" id="Inner Circle" r="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AlignToText() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="header">
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0 w-[20px]" data-name="Checkbox">
        <AlignToText />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">Reject and recount</p>
    </div>
  );
}

function CheckboxText() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Checkbox & Text">
      <div aria-hidden="true" className="absolute border border-[#0e69e2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[12px] relative w-full">
        <Header />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[14px] w-[min-content]">Sets this line item back to Pending in the current plan so it can be counted again.</p>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[16px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#eaebf0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function AlignToText1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="header">
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-name="Checkbox">
        <AlignToText1 />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">Reject and keep system count</p>
    </div>
  );
}

function CheckboxText1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Checkbox & Text">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[12px] relative w-full">
        <Header1 />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[14px] w-[min-content]">Cancels the line item in the current plan to maintain the prior system count.</p>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[16px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#eaebf0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function AlignToText2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="header">
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-name="Checkbox">
        <AlignToText2 />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">Reject and create a new plan</p>
    </div>
  );
}

function CheckboxText2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Checkbox & Text">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[12px] relative w-full">
        <Header2 />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[14px] w-[min-content]">Cancels the line item in the current plan, then creates a new cycle count plan for this item in all locations.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[448px]">
      <CheckboxText />
      <CheckboxText1 />
      <CheckboxText2 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0" data-name="Text content">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

export default function RejectCount() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-start p-[24px] relative rounded-[8px] size-full" data-name="Reject Count">
      <div aria-hidden="true" className="absolute border-2 border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_0px_rgba(16,24,40,0.1),0px_4px_6px_0px_rgba(16,24,40,0.1)]" />
      <TextContent />
      <div className="content-stretch flex gap-[12px] items-end justify-center relative shrink-0 w-[448px]" data-name=".Modal actions">
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
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Confirm Count Rejection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}