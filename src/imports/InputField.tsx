import { inputFieldIcons as svgPaths } from "./icons";

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[308px]" data-name="Text">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Search Part No., Description, Category, Location, Assignee</p>
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Input box">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[9px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
            <div className="absolute inset-[13.56%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.575 14.575">
                <path d={svgPaths.p3863c300} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
          <Text />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

export default function InputField() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[6px] items-start relative size-full" data-name="Input field">
      <InputBox />
    </div>
  );
}