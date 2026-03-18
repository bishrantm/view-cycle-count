import { priorityIcons as svgPaths } from "./icons";
type PriorityProps = {
  className?: string;
  property1?: "Critical" | "Standard" | "Low";
};

function Priority({ className, property1 = "Low" }: PriorityProps) {
  const isCritical = property1 === "Critical";
  const isLow = property1 === "Low";
  return (
    <div className={className || "content-stretch flex items-start relative"}>
      <div className={`content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0 ${isCritical ? "bg-[#ffefee]" : isLow ? "bg-[#f7f7f8]" : "bg-[#ecf4fc]"}`} data-name="Label">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[6px] ${isCritical ? "border-[#fea19b]" : isLow ? "border-[#eaebf0]" : "border-[#90c2ff]"}`} />
        <p className={`font-["Figtree:Medium",sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] ${isCritical ? "text-[#db3a33]" : isLow ? "text-[#252525]" : "text-[#0e69e2]"}`}>{isCritical ? "Critical" : property1 === "Standard" ? "Standard" : "Low"}</p>
      </div>
    </div>
  );
}

export default function Priority1({ className }: { className?: string }) {
  return (
    <div className={className || "-translate-x-1/2 bg-white relative rounded-[12px] w-[200px]"} data-name="Priority">
      <div className="content-stretch flex gap-[4px] items-end overflow-clip py-[4px] relative rounded-[inherit] w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Dropdown content">
          <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] relative size-full">
                <Priority className="content-stretch flex items-start relative shrink-0" property1="Critical" />
              </div>
            </div>
          </div>
          <div className="bg-[#ecf4fc] h-[40px] relative shrink-0 w-full" data-name="List Item">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
                <Priority className="content-stretch flex items-start relative shrink-0" property1="Standard" />
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Essentials/check">
                  <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-[29.17%]" data-name="Icon">
                    <div className="absolute inset-[-13.64%_-9.37%_-10.81%_-9.37%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 9.12623">
                        <path d={svgPaths.p28e9be80} id="Icon" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] relative size-full">
                <Priority className="content-stretch flex items-start relative shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(16,24,40,0.1),0px_8px_10px_-6px_rgba(16,24,40,0.1)]" />
    </div>
  );
}