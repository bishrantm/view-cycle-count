import { cardHeaderIcons as svgPaths } from "./icons";

function Healper() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Healper">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Search and add items, locations, or categories to include.</p>
      <div className="content-stretch flex gap-[2px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Learn More Button">
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] tracking-[0.1px]">Learn more</p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[22.92%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 8.66667">
              <path d={svgPaths.p3153d880} fill="var(--fill-0, #2C8AFF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative z-[2]" data-name="Heading">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px] w-full whitespace-pre-wrap">Choose what to count</p>
      <Healper />
    </div>
  );
}

export default function CardHeader() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center pb-[10px] pt-[16px] px-[16px] relative rounded-tl-[12px] rounded-tr-[12px] size-full" data-name="Card Header">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Heading />
      </div>
    </div>
  );
}