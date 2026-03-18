import { illustrationSvgPaths as svgPaths } from "./illustrations";
import imgItemSelection from "figma:asset/dda0da91175068085981e24d2f47466addea51df.png";

export default function ItemSelection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] isolate items-start justify-center relative rounded-[12px] size-full" data-name="Item Selection">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full z-[3]" data-name="Card Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] isolate items-center pb-[24px] pt-[16px] px-[16px] relative w-full">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative z-[2]" data-name="Heading">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
                  <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px]">Choose items to count</p>
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Healper">
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Search items and select them for counting.</p>
                    <div className="content-stretch flex gap-[2px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Learn More Button">
                      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] tracking-[0.1px]">Learn more</p>
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                        <div className="absolute inset-[22.92%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                            <path d={svgPaths.p15306e80} fill="var(--fill-0, #2C8AFF)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex gap-[12px] items-center pl-[8px] pr-[16px] py-[6px] relative rounded-[36px] shrink-0" data-name="Date Selector">
                  <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                  <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Avatars">
                    <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection} />
                      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Name">
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[16px] w-[min-content] whitespace-pre-wrap">Unassigned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[37px] relative shrink-0 w-full z-[2]" data-name="Search Bar">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
            <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[8px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Search">
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Text input">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Essentials/zoom/search">
                        <div className="absolute inset-[8.33%]" data-name="Icon">
                          <div className="absolute inset-[-6.67%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1111 15.1111">
                              <path d={svgPaths.p1c91b980} id="Icon" stroke="var(--stroke-0, #C1C3C7)" strokeLinecap="round" strokeWidth="1.77778" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#a1a4ac] text-[14px] text-left">{`Enter item, serial number location  or category`}</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-center pb-[40px] pt-[32px] relative shrink-0 w-full z-[1]" data-name="Iluustration + Copy">
        <div className="h-[138px] overflow-clip relative shrink-0 w-[186px]" data-name="Address-bro 1">
          <div className="-translate-x-1/2 absolute h-[138px] left-[calc(50%+0.5px)] top-0 w-[175px]" data-name="Purchase_Orders">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175 138">
              <g id="Purchase_Orders">
                <g id="Group">
                  <path d={svgPaths.p2a65d300} id="Vector" stroke="var(--stroke-0, #E5E5E7)" strokeWidth="0.98" />
                  <g id="Group_2">
                    <path d={svgPaths.p20144c00} fill="var(--fill-0, #E5E5E7)" id="Vector_2" />
                    <path d={svgPaths.p15fe9500} fill="var(--fill-0, #E5E5E7)" id="Vector_3" />
                    <path d={svgPaths.p32535b00} fill="var(--fill-0, #E5E5E7)" id="Vector_4" />
                  </g>
                  <path d={svgPaths.p1c768f00} fill="var(--fill-0, #E5E5E7)" id="Vector_5" />
                </g>
                <g id="Group_3">
                  <path d={svgPaths.pefa1580} id="Vector_6" stroke="var(--stroke-0, #E5E5E7)" strokeWidth="0.98" />
                  <g id="Group_4">
                    <path d={svgPaths.p138880} fill="var(--fill-0, #E5E5E7)" id="Vector_7" />
                    <path d={svgPaths.p369f9680} fill="var(--fill-0, #E5E5E7)" id="Vector_8" />
                    <path d={svgPaths.p4bdff00} fill="var(--fill-0, #E5E5E7)" id="Vector_9" />
                  </g>
                  <path d={svgPaths.p50f7500} fill="var(--fill-0, #E5E5E7)" id="Vector_10" />
                </g>
                <g id="Group_5">
                  <path d={svgPaths.p1b70e300} id="Vector_11" stroke="var(--stroke-0, #E5E5E7)" strokeWidth="0.98" />
                  <g id="Group_6">
                    <path d={svgPaths.p12197080} fill="var(--fill-0, #E5E5E7)" id="Vector_12" />
                    <path d={svgPaths.p33fa5d00} fill="var(--fill-0, #E5E5E7)" id="Vector_13" />
                    <path d={svgPaths.p2613f600} fill="var(--fill-0, #E5E5E7)" id="Vector_14" />
                  </g>
                  <path d={svgPaths.p28ff9a00} fill="var(--fill-0, #E5E5E7)" id="Vector_15" />
                </g>
                <path d={svgPaths.pcdf6300} fill="var(--fill-0, #E5E5E7)" id="Vector_16" />
                <path d={svgPaths.pfdea600} fill="var(--fill-0, #E5E5E7)" id="Vector_17" />
                <path d={svgPaths.p19c5cdf0} fill="var(--fill-0, #E5E5E7)" id="Vector_18" />
                <path d={svgPaths.p2ed14400} fill="var(--fill-0, #E5E5E7)" id="Vector_19" />
              </g>
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] relative shrink-0 text-center w-[680px]">
          <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#252525] text-[15px]">Ready to plan a count?</p>
          <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#68727d] text-[14px] w-[374px] whitespace-pre-wrap">Search items or locations, choose a count basis (ABC, location, item), then set due date/time and recurrence.</p>
        </div>
      </div>
    </div>
  );
}