import svgPaths from "./svg-02ygwgskkn";
import imgItemDetails from "figma:asset/2bbe2f6875f0243664a668c035b6de655f106dd4.png";

export default function ItemDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center py-[10px] relative rounded-[6px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)] size-full" data-name="Item Details">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center px-[12px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="overflow-clip relative rounded-[6px] shrink-0 size-[86px]" data-name="Item Image">
                <div className="absolute inset-[-3.66%_-5%]" data-name="image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgItemDetails} />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#252525] w-[280px]" data-name="Header">
                    <p className="font-['Figtree:SemiBold',sans-serif] font-semibold h-[19px] relative shrink-0 text-[16px] w-full">P-00891</p>
                    <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-full">Ventilated, drilled front brake disc, 320 mm, for mid-size sedan</p>
                  </div>
                  <button className="bg-[#f7f7f8] content-stretch cursor-pointer flex items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Label">
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#252525] text-[0px] text-left whitespace-nowrap">
                      <span className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] text-[14px]">3,000 EA</span>
                      <span className="leading-[normal] text-[16px]">{` to Count`}</span>
                    </p>
                  </button>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Extra Info">
                  <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                    <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px] whitespace-nowrap">Parts</p>
                  </div>
                  <div className="bg-[#e9f8f1] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                    <div aria-hidden="true" className="absolute border border-[#a9e3c7] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[14px] whitespace-nowrap">Active</p>
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
                    <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap">Non-Serialized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end px-[10px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip pr-[4px] relative rounded-[6px] shrink-0" data-name="Button">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                  <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12">
                      <g id="Vector">
                        <path d={svgPaths.p386c0a00} fill="var(--fill-0, black)" />
                        <path d={svgPaths.p3f690f00} fill="var(--fill-0, black)" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#68727d] text-[14px] tracking-[0.1px] whitespace-nowrap">Print Item Count Sheet</p>
              </div>
              <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
                <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
                    <div className="absolute inset-[20.83%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                        <path d={svgPaths.p4fe5600} fill="var(--fill-0, #68727D)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Full Screen View</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}