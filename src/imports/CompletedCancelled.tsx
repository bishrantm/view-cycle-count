import svgPaths from "./svg-2i10t15ks8";

export default function CompletedCancelled({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col items-start justify-center p-[4px] relative rounded-[6px] shadow-[0px_10px_15px_0px_rgba(16,24,40,0.1),0px_4px_6px_0px_rgba(16,24,40,0.1)]"} data-name="Completed, Cancelled">
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name=".List Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[16px] py-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="visibility">
              <div className="absolute inset-[18.75%_4.17%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5">
                  <path d={svgPaths.p36c97980} fill="var(--fill-0, #68727D)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex h-[17px] items-center relative shrink-0" data-name="Text input">
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Paragraph container">
                  <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px] whitespace-nowrap">{`View Plan Details `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name=".List Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[16px] py-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="print">
              <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
                  <g id="Vector">
                    <path d={svgPaths.p3d6bb580} fill="var(--fill-0, #68727D)" />
                    <path d={svgPaths.p2519ee40} fill="var(--fill-0, #68727D)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="content-stretch flex h-[17px] items-center relative shrink-0" data-name="Text input">
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Paragraph container">
                  <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px] whitespace-nowrap">Print Count Sheet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_4px_0px_rgba(156,156,156,0.1),inset_0.4px_0.7px_2.5px_0px_rgba(156,156,156,0.2),inset_-0.3px_-0.4px_2.8px_0px_rgba(156,156,156,0.4)]" />
    </div>
  );
}