import { assigneeSelectionIcons as svgPaths } from "./icons";
import imgAssigneeSelection from "figma:asset/38645a583214c47cdb3aeb006e43f0855f4eebcf.png";
import imgAssigneeSelection1 from "figma:asset/481da77b5267774461fe85683bf581ad433609d9.png";
import imgAssigneeSelection2 from "figma:asset/7df6d7f2d05485dbb4517c5c6a6af854d012577a.png";
import imgAssigneeSelection3 from "figma:asset/c46613c187ee11e9efa95305d71a5def7568832a.png";
import imgAssigneeSelection4 from "figma:asset/73ee5d4d01065644e7eebed1a39dfb979ff21794.png";

export default function AssigneeSelection() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col gap-[18px] items-start justify-center p-[20px] relative size-full" data-name="Assignee Selection">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[20px] tracking-[-0.2px]">Select assignee to add to the plan</p>
        </div>
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="modal_close">
          <div className="absolute left-[6px] size-[12px] top-[6px]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path clipRule="evenodd" d={svgPaths.p9096200} fill="var(--fill-0, black)" fillRule="evenodd" id="Union" opacity="0.5" />
            </svg>
          </div>
        </button>
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-h-px min-w-px py-[10px] relative rounded-[8px] w-full" data-name="Delivery date">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)]" />
        <div className="h-[34px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[16px] items-start pl-[16px] relative size-full">
            <button className="cursor-pointer h-[34px] relative shrink-0" data-name=".Tab base">
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip py-[8px] relative rounded-[inherit]">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                  <div className="absolute inset-[14.58%_6.25%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 17">
                      <g id="Vector">
                        <path d={svgPaths.p2fc0f400} fill="var(--fill-0, #68727D)" />
                        <path d={svgPaths.p296a9b00} fill="var(--fill-0, #68727D)" />
                        <path d="M21 1H12V8H21V1Z" fill="var(--fill-0, #68727D)" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[14px] text-left">With Permission</p>
              </div>
              <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
            </button>
            <div className="h-[34px] relative shrink-0" data-name=".Tab base">
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip py-[10px] relative rounded-[inherit]">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="boxes-2">
                  <div className="-translate-y-1/2 absolute aspect-[20/20.00016212463379] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p212ff80} fill="var(--fill-0, #0A77FF)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Without Permission</p>
              </div>
              <div aria-hidden="true" className="absolute border-[#0e69e2] border-b-2 border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[28px] items-center px-[20px] relative w-full">
              <div className="bg-[#fdf6ea] relative rounded-[6px] shrink-0 w-full" data-name="Available locations on item">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="error">
                        <div className="absolute inset-[8.33%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                            <path d={svgPaths.pa780b80} fill="var(--fill-0, #EFA22F)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#8f611c] text-[14px] whitespace-pre-wrap">Users without permission will get temporary access to this plan only. Access is revoked when the plan is no longer active.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Search items - cycle count task creation">
                    <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shadow-[0px_0px_0px_0px_#b2d5ff] shrink-0 w-full" data-name="Search">
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Text input">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Essentials/zoom/search">
                              <div className="absolute inset-[8.33%]" data-name="Icon">
                                <div className="absolute inset-[-6.67%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1111 15.1111">
                                    <path d={svgPaths.p1c91b980} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.77778" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#a1a4ac] text-[14px] whitespace-pre-wrap">Search with username</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Without Permission</p>
                    <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">05</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
                      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[12px] relative" data-name="Individual chat">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
                          <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
                            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAssigneeSelection} />
                            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Stephenson Steward</p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
                                  <path d={svgPaths.p34d08d70} fill="var(--fill-0, black)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Add</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
                      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
                          <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
                            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAssigneeSelection1} />
                            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Karls Manberg</p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
                                  <path d={svgPaths.p34d08d70} fill="var(--fill-0, black)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Add</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
                      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
                          <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
                            <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
                              <div className="absolute bg-[#e8d6ca] inset-0 rounded-[128px]" />
                              <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAssigneeSelection2} />
                            </div>
                            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Stuart Little</p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
                                  <path d={svgPaths.p34d08d70} fill="var(--fill-0, black)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Add</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
                      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
                          <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
                            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAssigneeSelection3} />
                            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Jeans Janice</p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
                                  <path d={svgPaths.p34d08d70} fill="var(--fill-0, black)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Add</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
                      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
                          <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
                            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAssigneeSelection4} />
                            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Tom Channing</p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
                                  <path d={svgPaths.p34d08d70} fill="var(--fill-0, black)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Add</p>
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
      </div>
    </div>
  );
}