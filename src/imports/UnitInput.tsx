export default function UnitInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Unit Input">
      <div className="content-stretch cursor-pointer flex flex-col gap-[6px] items-start relative shrink-0 w-[125px]" data-name="Input field">
        <div className="content-stretch flex items-start overflow-clip relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 w-full" data-name="Input">
          <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px]" data-name="Input box">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
                  <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#c1c3c7] text-[15px]">Enter</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
          </div>
          <div className="bg-[#fafbfc] relative rounded-br-[6px] rounded-tr-[6px] self-stretch shrink-0" data-name="Dropdown">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[6px] h-full items-center justify-center p-[10px] relative">
                <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">EA</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}