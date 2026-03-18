import svgPaths from "./svg-izbgmt7el2";
import imgImage from "figma:asset/4bff8feb35ceff69a5c36abe39b1724039f04346.png";
import imgImage1 from "figma:asset/b07cda0f64927643b9d6b1fd52c0c539c1086835.png";
import imgImage2 from "figma:asset/6ce65bcbb0912490ca08645e28be4b9ebc22b356.png";

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px]">Select Serial Unit to Count</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative z-[2]" data-name="Heading">
      <Frame3 />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full z-[3]" data-name="Card Header">
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

function Group() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute aspect-[42/42] bg-white left-0 right-0 top-0" />
      <div className="absolute inset-[15.32%_15.32%_12.9%_12.9%] overflow-clip" data-name="multi-location">
        <div className="absolute inset-[12.5%_4.17%_4.17%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1211 25.1211">
            <path d={svgPaths.p3ecb1000} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemImage() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[42px]" data-name="Item Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[-3.66%_-5%]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px] w-[486px] whitespace-pre-wrap">LOT-1120000</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis">Prime Location Lot 47A</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Frame35 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <ItemImage />
      <Header />
    </div>
  );
}

function ToggleBase() {
  return (
    <div className="bg-[#0a77ff] content-stretch flex h-[16px] items-center justify-end p-[2px] relative rounded-[16px] shrink-0 w-[27.2px]" data-name="Toggle Base">
      <div className="bg-white rounded-[128px] shadow-[0px_0.8px_1.6px_-0.8px_rgba(16,24,40,0.1),0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)] shrink-0 size-[12px]" data-name="Button" />
    </div>
  );
}

function AlignToText() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Align to Text">
      <ToggleBase />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Count all units in this Lot</p>
    </div>
  );
}

function EntryMode() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] shrink-0 w-full" data-name="Entry Mode">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center pl-[12px] pr-[8px] py-[10px] relative w-full">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Toggle">
            <div className="content-stretch flex gap-[14px] items-center relative self-stretch shrink-0 w-[304px]" data-name="Toggle">
              <AlignToText />
              <TextContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative w-full">
          <EntryMode />
        </div>
      </div>
    </div>
  );
}

function CountEntryCards() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[14px] pt-[10px] relative rounded-[8px] shrink-0 w-full z-[2]" data-name="Count Entry Cards">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)]" />
      <div className="relative shrink-0 w-full" data-name="Lot">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-start justify-center px-[12px] relative w-full">
            <Frame46 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
              <div className="bg-[#e9f8f1] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
                <div aria-hidden="true" className="absolute border border-[#a9e3c7] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[14px]">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[12px] overflow-clip rounded-[6px] size-[80px] top-[15.5px]">
      <div className="absolute inset-[-3.66%_-5%]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px]">WH-A01</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[192px] whitespace-pre-wrap">Zone B, Loading Dock 3, Central Distribution Center</p>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-[108px] top-[calc(50%-0.5px)]" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[80px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[-3.66%_-5%]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-white inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[16px]">WH-A02</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#68727d] text-[14px] text-ellipsis w-[192px] whitespace-pre-wrap">Zone B, Loading Dock 3, Central Distribution Center</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Frame4 />
    </div>
  );
}

function ItemsList() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Items List">
      <div className="bg-[#f3f9ff] h-[110px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)] shrink-0 w-[324px]" data-name="Cycle Count Cards">
        <Frame1 />
        <Container />
        <div className="-translate-y-1/2 absolute flex items-center justify-center left-[305.63px] size-[29.373px] top-[calc(50%-1px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-45 flex-none">
            <div className="bg-[#f3f9ff] rounded-[2px] size-[20.77px]" />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.1px_0.4px_1.8px_0px_rgba(90,185,254,0.35),inset_-0.4px_-0.2px_2.4px_0px_rgba(47,79,102,0.45)]" />
      </div>
      <div className="bg-[#fafbfc] content-stretch flex gap-[16px] h-[110px] items-center pl-[12px] pr-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Cycle Count Cards">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame2 />
        <Container1 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <ItemsList />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
      <Frame42 />
    </div>
  );
}

function ItemImage1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[42px]" data-name="Item Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[-3.66%_-5%]" data-name="image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function PartNoQuantity() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Part No + Quantity">
      <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#252525] text-[18px] whitespace-pre-wrap">WH-A01</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <PartNoQuantity />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[18px] leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[14px] text-ellipsis w-full whitespace-nowrap">Loading Dock 3, Central Distribution Center</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Header">
      <Frame36 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[300px]">
      <ItemImage1 />
      <Header1 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start justify-between px-[12px] relative w-full">
        <Frame45 />
        <button className="bg-[#f7f7f8] content-stretch cursor-pointer flex items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Label">
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-left">16 EA to Count</p>
        </button>
      </div>
    </div>
  );
}

function ItemDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-end justify-center py-[12px] relative rounded-[6px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)] shrink-0 w-full" data-name="Item Details">
      <Frame44 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[37px] relative rounded-[6px] shrink-0 w-[200px]" data-name="Text input">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Essentials/zoom/search">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1111 15.1111">
                <path d={svgPaths.p1c91b980} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.77778" />
              </svg>
            </div>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#a1a4ac] text-[14px] whitespace-pre-wrap">Search serial number</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">001</p>
      <p className="relative shrink-0 text-[#68727d]">100219-44</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">002</p>
      <p className="relative shrink-0 text-[#68727d]">100219-43</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">003</p>
      <p className="relative shrink-0 text-[#68727d]">100219-42</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">004</p>
      <p className="relative shrink-0 text-[#68727d]">100219-41</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">005</p>
      <p className="relative shrink-0 text-[#68727d]">100219-40</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">006</p>
      <p className="relative shrink-0 text-[#68727d]">100219-39</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">007</p>
      <p className="relative shrink-0 text-[#68727d]">100219-38</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">008</p>
      <p className="relative shrink-0 text-[#68727d]">100219-37</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">009</p>
      <p className="relative shrink-0 text-[#68727d]">100219-36</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">010</p>
      <p className="relative shrink-0 text-[#68727d]">100219-35</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">011</p>
      <p className="relative shrink-0 text-[#68727d]">100219-34</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">012</p>
      <p className="relative shrink-0 text-[#68727d]">100219-33</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">013</p>
      <p className="relative shrink-0 text-[#68727d]">100219-32</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">014</p>
      <p className="relative shrink-0 text-[#68727d]">100219-31</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">015</p>
      <p className="relative shrink-0 text-[#68727d]">100219-30</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">016</p>
      <p className="relative shrink-0 text-[#68727d]">100219-29</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(8,fit-content(100%))] relative shrink-0 w-full">
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame24 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame25 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame26 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame27 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame28 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame29 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame30 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame31 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[36px] justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame32 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame33 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-6 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame34 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-6 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame37 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-7 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame38 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-7 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame39 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-8 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame40 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-8 shrink-0" data-name="Serial Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <Frame41 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <TextInput />
      <Frame47 />
    </div>
  );
}

function LocationDetails() {
  return (
    <div className="bg-[#ecf4fc] content-stretch flex flex-col gap-[24px] h-full items-center p-[8px] relative rounded-[8px] shrink-0 w-[500px]" data-name="Location Details">
      <div aria-hidden="true" className="absolute border border-[#0e69e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ItemDetails />
      <Frame48 />
    </div>
  );
}

function EditMode() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative z-[1]" data-name="Edit Mode">
      <Frame23 />
      <LocationDetails />
    </div>
  );
}

function ModalContent() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] isolate items-start min-h-px min-w-px overflow-clip p-[16px] relative z-[2]" data-name="Modal_content">
      <CountEntryCards />
      <EditMode />
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
          <p className="leading-[20px]">Select Units</p>
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full z-[1]" data-name="Modal_footer">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-solid border-t inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-end px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px relative text-[#252525] text-[0px] text-[16px] whitespace-pre-wrap">
            <span className="leading-[normal]">1</span>
            <span className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] text-[#68727d]">{` Unit(s) Selected`}</span>
          </p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function LocationSerialSelection() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative rounded-bl-[12px] rounded-tl-[12px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)] size-full" data-name="Location/Serial Selection">
      <CardHeader />
      <ModalContent />
      <ModalFooter />
    </div>
  );
}