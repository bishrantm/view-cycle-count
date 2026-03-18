import svgPaths from "./svg-dchoewt2we";
import imgTagDropdownV2 from "figma:asset/ec2f130e96497d8522ff19df6f5a5053eabf2155.png";

export default function TagDropdownV() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Tag Dropdown v2">
      <div className="content-stretch flex flex-col gap-[6px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <button className="bg-white cursor-pointer relative rounded-[6px] shrink-0 w-full" data-name="Text input">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between pl-[12px] pr-[6px] py-[6px] relative w-full">
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[2px]" data-name="Text Cursor Blinker">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTagDropdownV2} />
                </div>
                <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c1c3c7] text-[15px] text-left whitespace-nowrap">Enter up to Serial Unit</p>
              </div>
              <div className="bg-[#ecf4fc] content-stretch cursor-pointer flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button" role="button" tabIndex="0">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                      <path d={svgPaths.p12ead040} fill="var(--fill-0, #0A77FF)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] text-left tracking-[0.1px] whitespace-nowrap">Add</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </button>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(16,24,40,0.1),0px_8px_10px_-6px_rgba(16,24,40,0.1)]" />
    </div>
  );
}