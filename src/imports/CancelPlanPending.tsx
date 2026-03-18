import svgPaths from "./svg-pduvn80zep";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#272d37] text-[24px] tracking-[-0.24px] w-full">Would you like to cancel the plan?</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#68727d] text-[15px] w-full">This will put the status to cancelled.</p>
    </div>
  );
}

function Frame() {
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
      <Frame1 />
    </div>
  );
}

export default function CancelPlanPending() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-start p-[24px] relative rounded-[8px] size-full" data-name="Cancel Plan (pending)">
      <div aria-hidden="true" className="absolute border-2 border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_0px_rgba(16,24,40,0.1),0px_4px_6px_0px_rgba(16,24,40,0.1)]" />
      <Frame />
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