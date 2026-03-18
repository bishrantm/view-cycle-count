import svgPaths from "./svg-wltaumuufa";
import imgItemSelection from "figma:asset/4bc2046dd82ac8ecf50dac73d271ca3152b554ac.png";
import imgItemSelection1 from "figma:asset/58fa559ab56378f83dc49b7fe1e5abdae07d4852.png";
import imgItemSelection2 from "figma:asset/8b5cffbce56296888a79e3124ac2c4b8fb3fc65e.png";
import imgItemSelection3 from "figma:asset/f4ad65864fcede388384567e3342d6510ecfcdd2.png";
import imgItemSelection4 from "figma:asset/da311472036f9fc3b5dc484bbfb37853fc5709e8.png";
import imgItemSelection5 from "figma:asset/9edf3ae748122d6ad61287f140b75382b5902a6a.png";
import imgItemSelection6 from "figma:asset/69115701eb59753545c34c08b5df63d986702686.png";

export default function ItemSelection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] isolate items-start relative rounded-[12px] size-full" data-name="Item Selection">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full z-[3]" data-name="Card Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] isolate items-center pb-[24px] pt-[16px] px-[16px] relative w-full">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative z-[3]" data-name="Heading">
                <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px] w-full whitespace-pre-wrap">Choose categories to count</p>
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
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="bg-white content-stretch flex gap-[12px] h-full items-center pl-[8px] pr-[16px] py-[6px] relative rounded-[36px] shrink-0 z-[1]" data-name="Date Selector">
                <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                <div className="content-stretch flex items-center pointer-events-none pr-[8px] relative shrink-0" data-name="Avatars">
                  <div className="mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                    <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                      <div className="absolute bg-[#ffb145] inset-0 rounded-[128px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection} />
                    </div>
                    <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                  </div>
                  <div className="mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                    <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                      <div className="absolute bg-[#aed3dc] inset-0 rounded-[128px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection1} />
                    </div>
                    <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                  </div>
                  <div className="mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                    <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                      <div className="absolute bg-[#44978a] inset-0 rounded-[128px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection2} />
                    </div>
                    <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-[-3px] rounded-[131px]" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Name">
                  <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[16px] w-[min-content] whitespace-pre-wrap">Assignee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[37px] relative shrink-0 w-full z-[2]" data-name="Search Bar">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Search">
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Text input">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative size-full">
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
                      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#a1a4ac] text-[14px]">Enter category</p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <div className="bg-[#f7f7f8] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Lead Icon">
                          <div className="absolute inset-[12.5%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                              <path d={svgPaths.p34dee000} fill="var(--fill-0, black)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[14px]">K</p>
                      </div>
                      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#a1a4ac] text-[14px]">for Filter</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]">
        <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
            <div className="bg-[#f3f9ff] h-[110px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)] shrink-0 w-[364px]" data-name="Count Type Thumbnails">
              <div className="-translate-y-1/2 absolute flex items-center justify-center left-[348px] size-[27.373px] top-[calc(50%+0.68px)]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="-rotate-45 flex-none">
                  <div className="bg-[#f3f9ff] rounded-[2px] size-[19.355px]" />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[12px] top-[calc(50%+0.5px)] w-[300px]" data-name="Data">
                <div className="h-[82px] relative rounded-[6px] shrink-0 w-[80px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[-3.66%_-5%]" data-name="image">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection3} />
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection4} />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pl-[12px] relative shrink-0 w-[202px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
                      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px]">Engine</p>
                      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[179px] whitespace-pre-wrap">Aeronautical engine for third units</p>
                    </div>
                  </div>
                  <div className="bg-[#ecf4fc] content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                    <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.1px_0.4px_1.8px_0px_rgba(90,185,254,0.35),inset_-0.4px_-0.2px_2.4px_0px_rgba(47,79,102,0.45)]" />
            </div>
            <div className="bg-[#fafbfc] content-stretch flex h-[110px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[364px]" data-name="Count Type Thumbnails">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="content-stretch flex items-center relative shrink-0 w-[300px]" data-name="Data">
                <div className="h-[82px] relative rounded-[6px] shrink-0 w-[80px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[-3.66%_-5%]" data-name="image">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection3} />
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection4} />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pl-[12px] relative shrink-0 w-[202px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
                      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px]">Spare Parts</p>
                      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[179px] whitespace-pre-wrap">Aeronautical engine for third units</p>
                    </div>
                  </div>
                  <div className="bg-[#ecf4fc] content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                    <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fafbfc] content-stretch flex h-[110px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[364px]" data-name="Count Type Thumbnails">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="content-stretch flex items-center relative shrink-0 w-[300px]" data-name="Data">
                <div className="h-[82px] relative rounded-[6px] shrink-0 w-[80px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[-3.66%_-5%]" data-name="image">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection3} />
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection4} />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pl-[12px] relative shrink-0 w-[202px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
                      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px]">Bottle</p>
                      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[179px] whitespace-pre-wrap">Aeronautical engine for third units</p>
                    </div>
                  </div>
                  <div className="bg-[#ecf4fc] content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                    <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fafbfc] content-stretch flex h-[110px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[364px]" data-name="Count Type Thumbnails">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="content-stretch flex items-center relative shrink-0 w-[300px]" data-name="Data">
                <div className="h-[82px] relative rounded-[6px] shrink-0 w-[80px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[-3.66%_-5%]" data-name="image">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection3} />
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection4} />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pl-[12px] relative shrink-0 w-[202px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
                      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px]">AE-3</p>
                      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[179px] whitespace-pre-wrap">Aeronautical engine for third units</p>
                    </div>
                  </div>
                  <div className="bg-[#ecf4fc] content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                    <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fafbfc] content-stretch flex h-[110px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[364px]" data-name="Count Type Thumbnails">
              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="content-stretch flex items-center relative shrink-0 w-[300px]" data-name="Data">
                <div className="h-[82px] relative rounded-[6px] shrink-0 w-[80px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[-3.66%_-5%]" data-name="image">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection3} />
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection4} />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pl-[12px] relative shrink-0 w-[202px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
                      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px]">Extra</p>
                      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[179px] whitespace-pre-wrap">Aeronautical engine for third units</p>
                    </div>
                  </div>
                  <div className="bg-[#ecf4fc] content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                    <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ecf4fc] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
            <div aria-hidden="true" className="absolute border border-[#0e69e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[14px] px-[12px] relative size-full">
              <div className="bg-white relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)] shrink-0 w-full">
                <div className="flex flex-row justify-center size-full">
                  <div className="content-stretch flex gap-[14px] items-start justify-center pb-[16px] pt-[14px] px-[14px] relative w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
                      <div className="relative rounded-[6px] shrink-0 size-[86px]" data-name="Item Image">
                        <div className="overflow-clip relative rounded-[inherit] size-full">
                          <div className="absolute inset-[-3.66%_-5%]" data-name="image">
                            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                              <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection3} />
                              <img alt="" className="absolute max-w-none object-cover size-full" src={imgItemSelection4} />
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[172px]">
                          <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-ellipsis w-full">
                            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#252525] text-[16px]">Engine</p>
                            <p className="font-['Figtree:Regular',sans-serif] font-normal min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[13px] w-[min-content] whitespace-pre-wrap">Aeronautical engine for third units</p>
                          </div>
                          <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                            <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-[#f7f7f8] content-stretch cursor-pointer flex items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Label">
                      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-left">3 Items</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.1)] shrink-0 w-full" data-name="Pick/Drop Cards">
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative w-[512px]">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
                      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
                        <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
                          <div className="absolute bg-white inset-0 rounded-[8px]" />
                          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgItemSelection5} />
                        </div>
                        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.5px] border-solid inset-0 rounded-[8px]" />
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
                          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-15891</p>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                              <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                            </div>
                            <div className="bg-[#efeff1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Item control type">
                              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <div className="relative shrink-0 size-[16px]" data-name="memory:barcode">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g id="memory:barcode">
                                    <path d={svgPaths.p13615bb1} fill="var(--fill-0, #252525)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Serialized</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
                      </div>
                    </div>
                    <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
                      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">10,000 EA</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
                    <div className="h-0 relative shrink-0 w-[540px]">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 1.00005">
                          <line id="Line 1467" stroke="var(--stroke-0, #EAEBF0)" x1="4.37114e-08" x2="540" y1="0.5" y2="0.500047" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-[512px]">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Heading">
                          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">
                            <p className="leading-[normal]">Assigned Owners</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Avatar group">
                          <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Avatars">
                            <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                                <div className="absolute bg-[#ffb145] inset-0 rounded-[128px]" />
                                <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection} />
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                            </div>
                            <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                                <div className="absolute bg-[#aed3dc] inset-0 rounded-[128px]" />
                                <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection1} />
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                            </div>
                            <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                                <div className="absolute bg-[#44978a] inset-0 rounded-[128px]" />
                                <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection2} />
                              </div>
                              <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-[-3px] rounded-[131px]" />
                            </div>
                            <div className="bg-[#0a77ff] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[130px]" />
                              <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-white">+2</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ecf4fc] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] tracking-[0.1px]">View Location</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.1)] shrink-0 w-full" data-name="Pick/Drop Cards">
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative w-[512px]">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
                      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
                        <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
                          <div className="absolute bg-white inset-0 rounded-[8px]" />
                          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgItemSelection5} />
                          <div className="absolute bg-white inset-0 rounded-[8px]" />
                          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                            <img alt="" className="absolute left-1/4 max-w-none size-1/2 top-1/4" src={imgItemSelection6} />
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.5px] border-solid inset-0 rounded-[8px]" />
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
                          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-15892</p>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                              <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                            </div>
                            <div className="bg-[#efeff1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Item control type">
                              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <div className="relative shrink-0 size-[16px]" data-name="mdi:barcode-off">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g id="mdi:barcode-off">
                                    <path d={svgPaths.p153f9a00} fill="var(--fill-0, #252525)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Non-Serialized</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
                      </div>
                    </div>
                    <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
                      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">10,000 EA</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
                    <div className="h-0 relative shrink-0 w-[540px]">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 1.00005">
                          <line id="Line 1467" stroke="var(--stroke-0, #EAEBF0)" x1="4.37114e-08" x2="540" y1="0.5" y2="0.500047" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-[512px]">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Heading">
                          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">
                            <p className="leading-[normal]">Assigned Owners</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Avatar group">
                          <div className="content-stretch flex items-center pointer-events-none pr-[8px] relative shrink-0" data-name="Avatars">
                            <div className="mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                                <div className="absolute bg-[#ffb145] inset-0 rounded-[128px]" />
                                <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection} />
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                            </div>
                            <div className="mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                                <div className="absolute bg-[#aed3dc] inset-0 rounded-[128px]" />
                                <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection1} />
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ecf4fc] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] tracking-[0.1px]">View Location</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.1)] shrink-0 w-full" data-name="Pick/Drop Cards">
                  <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative w-[512px]">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
                      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
                        <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
                          <div className="absolute bg-white inset-0 rounded-[8px]" />
                          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgItemSelection5} />
                          <div className="absolute bg-white inset-0 rounded-[8px]" />
                          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                            <img alt="" className="absolute left-1/4 max-w-none size-1/2 top-1/4" src={imgItemSelection6} />
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.5px] border-solid inset-0 rounded-[8px]" />
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
                          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-12858</p>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                              <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
                            </div>
                            <div className="bg-[#efeff1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Item control type">
                              <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <div className="relative shrink-0 size-[16px]" data-name="mdi:barcode-off">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g id="mdi:barcode-off">
                                    <path d={svgPaths.p153f9a00} fill="var(--fill-0, #252525)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Non-Serialized</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
                      </div>
                    </div>
                    <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
                      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">5,000 EA</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
                    <div className="h-0 relative shrink-0 w-[540px]">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 1.00005">
                          <line id="Line 1467" stroke="var(--stroke-0, #EAEBF0)" x1="4.37114e-08" x2="540" y1="0.5" y2="0.500047" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-[512px]">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Heading">
                          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">
                            <p className="leading-[normal]">Assigned Owners</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Avatar group">
                          <div className="content-stretch flex items-center pointer-events-none pr-[8px] relative shrink-0" data-name="Avatars">
                            <div className="mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                                <div className="absolute bg-[#ffb145] inset-0 rounded-[128px]" />
                                <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection} />
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                            </div>
                            <div className="mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
                              <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                                <div className="absolute bg-[#aed3dc] inset-0 rounded-[128px]" />
                                <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgItemSelection1} />
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ecf4fc] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] tracking-[0.1px]">View Location</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}