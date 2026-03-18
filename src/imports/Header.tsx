import { headerIcons as svgPaths } from "./icons";

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[10px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.03),0px_4px_8px_0px_rgba(113,128,150,0.06)] size-full" data-name="Header" style={{ backgroundImage: "linear-gradient(171.16deg, rgba(255, 255, 255, 0.04) 19.507%, rgba(228, 228, 228, 0.2) 76.404%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
        <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[944px]" data-name="Movement Name Field">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px] text-left">Describe the Plan (optional)</p>
            <div className="content-stretch flex flex-col items-start justify-center pb-[8px] relative shrink-0 w-full" data-name="Movement Name Input Area">
              <div aria-hidden="true" className="absolute border-[#c1c3c7] border-b border-dashed inset-[0_0_-0.5px_0] pointer-events-none" />
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c1c3c7] text-[20px] text-left tracking-[-0.2px]">Enter description about the plan</p>
            </div>
          </div>
        </button>
        <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-[944px]" data-name="Extra Info">
          <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
            <div className="bg-white content-stretch flex h-full items-center justify-between pl-[12px] pr-[16px] py-[6px] relative rounded-[36px] shrink-0 w-[160px]" data-name="Date Selector">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="av_timer">
                  <div className="absolute inset-[12.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path d={svgPaths.p182a900} fill="var(--fill-0, #68727D)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0" data-name="Name">
                  <p className="font-['Figtree:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#68727d] text-[13px] w-[min-content] whitespace-pre-wrap">Priority</p>
                  <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#252525] text-[14px]">Standard</p>
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow_down_ios">
                <div className="absolute flex inset-[25.69%_8.75%] items-center justify-center">
                  <div className="-rotate-90 flex-none h-[19.8px] w-[11.67px]">
                    <div className="relative size-full" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.78 13.2">
                        <path d={svgPaths.p2a58a9c0} fill="var(--fill-0, #68727D)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-white content-stretch cursor-pointer flex gap-[8px] h-[48px] items-center pl-[12px] pr-[16px] py-[6px] relative rounded-[36px] shrink-0" data-name="Date Selector">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Toggle">
                <div className="bg-[#e5e5e7] content-stretch flex h-[16px] items-center p-[2px] relative rounded-[16px] shrink-0 w-[27.2px]" data-name="Toggle Base">
                  <div className="bg-white rounded-[128px] shadow-[0px_0.8px_1.6px_-0.8px_rgba(16,24,40,0.1),0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)] shrink-0 size-[12px]" data-name="Button" />
                </div>
              </div>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[16px] text-left">Schedule Plan</p>
            </button>
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0" data-name="Select Assignee">
            <div className="bg-white h-[48px] relative rounded-[36px] shrink-0 w-full" data-name="Date Selector">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[6px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="new_label">
                    <div className="absolute inset-[18.75%_10.42%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 12.5">
                        <path d={svgPaths.p3369ec00} fill="var(--fill-0, #68727D)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Name">
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[16px] w-[min-content] whitespace-pre-wrap">Add Tags</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1.2px_1.4px_2px_0px_rgba(83,83,83,0.06),inset_-0.8px_-1.2px_1.8px_0px_rgba(137,137,137,0.12),inset_0.4px_0.8px_2px_0px_rgba(119,119,119,0.1)]" />
    </div>
  );
}