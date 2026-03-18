import svgPaths from "./svg-v5hmbatvtd";
import imgImage from "figma:asset/b07cda0f64927643b9d6b1fd52c0c539c1086835.png";
import imgTableImages from "figma:asset/9edf3ae748122d6ad61287f140b75382b5902a6a.png";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px]">Select Item’s in Location</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative z-[2]" data-name="Heading">
      <Frame2 />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full z-[2]" data-name="Card Header">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[12px] relative w-full">
          <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px] z-[3]" data-name="modal_close">
            <div className="absolute left-[6px] size-[12px] top-[6px]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path clipRule="evenodd" d={svgPaths.p9096200} fill="var(--fill-0, black)" fillRule="evenodd" id="Union" opacity="0.5" />
              </svg>
            </div>
          </button>
          <Heading />
        </div>
      </div>
    </div>
  );
}

function ItemImage() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[86px]" data-name="Item Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[-3.66%_-5%]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-ellipsis w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#252525] text-[16px]">WH-A01</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[14px] w-[min-content] whitespace-pre-wrap">Loading Dock 3, Central Distribution Center</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]">
      <Frame19 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <ItemImage />
      <Frame15 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function TextInput() {
  return (
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
          <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#68727d] text-[14px] whitespace-pre-wrap">Search items in this location</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
    </div>
  );
}

function SearchItemsCycleCountTaskCreation() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Search items - cycle count task creation">
      <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shadow-[0px_0px_0px_0px_#b2d5ff] shrink-0 w-full" data-name="Search">
        <TextInput />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SearchItemsCycleCountTaskCreation />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip relative shrink-0 w-full">
      <div className="bg-[#ecf4fc] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[16px]">All</p>
      </div>
      <div className="bg-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px]">Active</p>
      </div>
      <div className="bg-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px]">Inactive</p>
      </div>
      <div className="bg-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px]">Serialized</p>
      </div>
      <div className="bg-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px]">Non-Serialized</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame1 />
    </div>
  );
}

function Checkbox() {
  return (
    <button className="bg-[#0a77ff] block cursor-pointer relative rounded-[6px] shrink-0 size-[16px]" data-name="Checkbox">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[10px] top-1/2" data-name="Essentials/check">
        <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-21.82%_-15%_-17.3%_-15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 6.37623">
              <path d={svgPaths.p129efda0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

function AlignToText() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[14px] w-full whitespace-pre-wrap">Count all 3 Items in this location</p>
    </div>
  );
}

function EntryMode() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] shrink-0 w-full" data-name="Entry Mode">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[8px] relative w-full">
          <div className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Checkbox">
            <AlignToText />
            <TextContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[#0a77ff] relative rounded-[6px] shrink-0 size-[20px]" data-name="Checkbox">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[12px] top-1/2" data-name="Essentials/check">
        <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-18.18%_-12.5%_-14.42%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7.29289">
              <path d={svgPaths.pb22ca00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlignToText1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox1 />
    </div>
  );
}

function TableImages() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
      <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTableImages} />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.5px] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function MdiBarcodeOff() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:barcode-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:barcode-off">
          <path d={svgPaths.p153f9a00} fill="var(--fill-0, #252525)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
      </div>
      <div className="bg-[#efeff1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Item control type">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <MdiBarcodeOff />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Non-Serialized</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-15891</p>
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
      <Heading1 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
      <TableImages />
      <Frame5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <Frame6 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">10,000 EA</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[63px] items-start relative shrink-0 w-[512px]">
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-name="Checkbox">
        <AlignToText1 />
      </div>
      <Frame21 />
    </div>
  );
}

function PickDropCards() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Pick/Drop Cards">
      <Frame16 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-[#0a77ff] relative rounded-[6px] shrink-0 size-[20px]" data-name="Checkbox">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[12px] top-1/2" data-name="Essentials/check">
        <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-18.18%_-12.5%_-14.42%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7.29289">
              <path d={svgPaths.pb22ca00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlignToText2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox2 />
    </div>
  );
}

function TableImages1() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
      <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTableImages} />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.5px] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function MdiBarcodeOff1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:barcode-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:barcode-off">
          <path d={svgPaths.p153f9a00} fill="var(--fill-0, #252525)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
      </div>
      <div className="bg-[#efeff1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Item control type">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <MdiBarcodeOff1 />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Non-Serialized</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-15891</p>
      <Frame12 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
      <Heading2 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
      <TableImages1 />
      <Frame8 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <Frame7 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">10,000 EA</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[63px] items-start relative shrink-0 w-[512px]">
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-name="Checkbox">
        <AlignToText2 />
      </div>
      <Frame22 />
    </div>
  );
}

function PickDropCards1() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Pick/Drop Cards">
      <Frame17 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[#0a77ff] relative rounded-[6px] shrink-0 size-[20px]" data-name="Checkbox">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[12px] top-1/2" data-name="Essentials/check">
        <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-18.18%_-12.5%_-14.42%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7.29289">
              <path d={svgPaths.pb22ca00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlignToText3() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox3 />
    </div>
  );
}

function TableImages2() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
      <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTableImages} />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.5px] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function MdiBarcodeOff2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:barcode-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:barcode-off">
          <path d={svgPaths.p153f9a00} fill="var(--fill-0, #252525)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Parts</p>
      </div>
      <div className="bg-[#efeff1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Item control type">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <MdiBarcodeOff2 />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Non-Serialized</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-15891</p>
      <Frame13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
      <Heading3 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
      <TableImages2 />
      <Frame10 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <Frame9 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">10,000 EA</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[63px] items-start relative shrink-0 w-[512px]">
      <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-name="Checkbox">
        <AlignToText3 />
      </div>
      <Frame23 />
    </div>
  );
}

function PickDropCards2() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Pick/Drop Cards">
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <EntryMode />
      <PickDropCards />
      <PickDropCards1 />
      <PickDropCards2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative w-[540px]">
      <Frame26 />
      <Frame20 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative z-[2]">
      <Frame25 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0">
      <div className="bg-white relative rounded-[6px] shrink-0 w-[69px]" data-name="Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-full">
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Cancel</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#0a77ff] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.1px] whitespace-nowrap">
          <p className="leading-[20px]">Add Item(s)</p>
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[12px] items-center justify-end left-0 px-[16px] py-[12px] rounded-bl-[12px] rounded-br-[12px] top-[913px] w-[573px] z-[1]" data-name="Modal_footer">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-solid border-t inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px relative text-[#252525] text-[0px] text-[16px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`0 `}</span>
        <span className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] text-[#68727d]">Item(s) Selected</span>
      </p>
      <Frame />
    </div>
  );
}

function ModalContent() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[24px] isolate items-start min-h-px min-w-px overflow-clip p-[16px] relative z-[1]" data-name="Modal_content">
      <Frame4 />
      <ModalFooter />
    </div>
  );
}

export default function SelectItemsInLocation() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative rounded-bl-[12px] rounded-tl-[12px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)] size-full" data-name="Select Item’s in Location">
      <CardHeader />
      <ModalContent />
    </div>
  );
}