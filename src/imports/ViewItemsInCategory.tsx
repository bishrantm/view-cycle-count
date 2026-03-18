import svgPaths from "./svg-1an63s170d";
import imgImage from "figma:asset/6ce65bcbb0912490ca08645e28be4b9ebc22b356.png";
import imgImage1 from "figma:asset/b07cda0f64927643b9d6b1fd52c0c539c1086835.png";
import imgImage2 from "figma:asset/da311472036f9fc3b5dc484bbfb37853fc5709e8.png";
import imgTableImages from "figma:asset/9edf3ae748122d6ad61287f140b75382b5902a6a.png";
import imgTableImages1 from "figma:asset/69115701eb59753545c34c08b5df63d986702686.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px]">Category Details</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative z-[2]" data-name="Heading">
      <Frame />
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
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function PartNoQuantity() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Part No + Quantity">
      <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#252525] text-[18px] whitespace-pre-wrap">Zone A-03</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <PartNoQuantity />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[14px] text-ellipsis w-[271px] whitespace-pre-wrap">Zone B, Loading Dock 3, Central Distribution Center</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Frame3 />
    </div>
  );
}

function ItemDetails() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item Details">
      <ItemImage />
      <Header />
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
          <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#68727d] text-[14px] whitespace-pre-wrap">Search Items</p>
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SearchItemsCycleCountTaskCreation />
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

function Frame10() {
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
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
      <Heading1 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
      <TableImages />
      <Frame4 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <Frame5 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">10,000 EA</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-[63px] items-start relative shrink-0 w-[512px]">
      <Frame18 />
    </div>
  );
}

function PickDropCards() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Pick/Drop Cards">
      <Frame14 />
    </div>
  );
}

function TableImages1() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
      <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTableImages} />
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute left-1/4 max-w-none size-1/2 top-1/4" src={imgTableImages1} />
        </div>
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

function Frame11() {
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
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-15892</p>
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
      <Heading2 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
      <TableImages1 />
      <Frame7 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <Frame6 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">10,000 EA</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex h-[63px] items-start relative shrink-0 w-[512px]">
      <Frame19 />
    </div>
  );
}

function PickDropCards1() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Pick/Drop Cards">
      <Frame15 />
    </div>
  );
}

function TableImages2() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[46px]" data-name="Table Images">
      <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTableImages} />
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute left-1/4 max-w-none size-1/2 top-1/4" src={imgTableImages1} />
        </div>
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

function Frame12() {
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
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[16px] text-ellipsis">P-12858</p>
      <Frame12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0">
      <Heading3 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[355px]">
      <TableImages2 />
      <Frame9 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <Frame8 />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">5,000 EA</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[63px] items-start relative shrink-0 w-[512px]">
      <Frame20 />
    </div>
  );
}

function PickDropCards2() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex flex-col gap-[16px] items-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Pick/Drop Cards">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <PickDropCards />
      <PickDropCards1 />
      <PickDropCards2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative w-[540px]">
      <Frame13 />
      <Frame17 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative z-[1]">
      <ItemDetails />
      <Frame1 />
    </div>
  );
}

function ModalContent() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px overflow-clip p-[16px] relative z-[1]" data-name="Modal_content">
      <Frame2 />
    </div>
  );
}

export default function ViewItemsInCategory() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative rounded-bl-[12px] rounded-tl-[12px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)] size-full" data-name="View Items in Category">
      <CardHeader />
      <ModalContent />
    </div>
  );
}