import svgPaths from "./svg-03c7i830mg";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[13px] whitespace-nowrap">2 Locations</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">Total Location in Plan</p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[13px] whitespace-nowrap">3 Items</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">Counted Line Items</p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[13px] whitespace-nowrap">9 Items</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">Pending Line Items</p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[13px] whitespace-nowrap">3 Items</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">Awaiting Approval Line Items</p>
      <Frame3 />
    </div>
  );
}

function ItemStatus() {
  return (
    <div className="bg-[#f7f7f8] relative rounded-[6px] shrink-0 w-full" data-name="Item Status">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-start flex flex-wrap gap-[14px_24px] items-start p-[10px] relative w-full">
        <Frame7 />
        <Frame9 />
        <Frame8 />
        <Frame10 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#272d37] text-[24px] tracking-[-0.24px] w-full">Would you like to cancel the plan?</p>
      <ItemStatus />
    </div>
  );
}

function Frame4() {
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
      <Frame6 />
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
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-name="Checkbox">
        <AlignToText />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">{`Discard Counts & Cancel`}</p>
    </div>
  );
}

function CheckboxText() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Checkbox & Text">
      <div aria-hidden="true" className="absolute border border-[#0e69e2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[12px] relative w-full">
        <Header />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[14px] w-[min-content]">Close this plan and undo all counts and inventory adjustments recorded in it.</p>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[20px]" data-name="Checkbox">
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
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0 w-[20px]" data-name="Checkbox">
        <AlignToText1 />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">Mark as Closed (Incomplete)</p>
    </div>
  );
}

function CheckboxText1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Checkbox & Text">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[12px] relative w-full">
        <Header1 />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[14px] w-[min-content]">Keep all counts and adjustments already recorded, and set the plan status to Closed (Incomplete) and its remaining line items are Cancelled.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <CheckboxText />
      <CheckboxText1 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text content">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function CancelPlanInProgress() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-start p-[24px] relative rounded-[8px] size-full" data-name="Cancel Plan (In Progress)">
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
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Confirm Plan Cancellation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}