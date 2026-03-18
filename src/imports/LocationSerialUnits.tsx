import svgPaths from "./svg-yf7cbu1f0w";
import imgImage from "figma:asset/b07cda0f64927643b9d6b1fd52c0c539c1086835.png";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px]">Select Units to Count</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative z-[2]" data-name="Heading">
      <Frame1 />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Card Header">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[12px] relative size-full">
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-ellipsis w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[#252525] text-[16px]">WH-A01</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[14px] w-[min-content] whitespace-pre-wrap">Loading Dock 3, Central Distribution Center</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <ItemImage />
      <Frame20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]">
      <Frame22 />
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
          <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#a1a4ac] text-[14px] whitespace-pre-wrap">Search serial number</p>
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

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SearchItemsCycleCountTaskCreation />
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
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[14px] w-full whitespace-pre-wrap">Count all 15 units in this locations</p>
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

function AlignToText1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">001</p>
      <p className="relative shrink-0 text-[#68727d]">100219-44</p>
    </div>
  );
}

function Checkbox2() {
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

function AlignToText2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">002</p>
      <p className="relative shrink-0 text-[#68727d]">100219-43</p>
    </div>
  );
}

function Checkbox3() {
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

function AlignToText3() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">003</p>
      <p className="relative shrink-0 text-[#68727d]">100219-42</p>
    </div>
  );
}

function Checkbox4() {
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

function AlignToText4() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">006</p>
      <p className="relative shrink-0 text-[#68727d]">100219-39</p>
    </div>
  );
}

function Checkbox5() {
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

function AlignToText5() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">004</p>
      <p className="relative shrink-0 text-[#68727d]">100219-41</p>
    </div>
  );
}

function Checkbox6() {
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

function AlignToText6() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">013</p>
      <p className="relative shrink-0 text-[#68727d]">100219-32</p>
    </div>
  );
}

function Checkbox7() {
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

function AlignToText7() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">007</p>
      <p className="relative shrink-0 text-[#68727d]">100219-38</p>
    </div>
  );
}

function Checkbox8() {
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

function AlignToText8() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">008</p>
      <p className="relative shrink-0 text-[#68727d]">100219-37</p>
    </div>
  );
}

function Checkbox9() {
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

function AlignToText9() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">010</p>
      <p className="relative shrink-0 text-[#68727d]">100219-35</p>
    </div>
  );
}

function Checkbox10() {
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

function AlignToText10() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">011</p>
      <p className="relative shrink-0 text-[#68727d]">100219-34</p>
    </div>
  );
}

function Checkbox11() {
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

function AlignToText11() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">009</p>
      <p className="relative shrink-0 text-[#68727d]">100219-36</p>
    </div>
  );
}

function Checkbox12() {
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

function AlignToText12() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">005</p>
      <p className="relative shrink-0 text-[#68727d]">100219-40</p>
    </div>
  );
}

function Checkbox13() {
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

function AlignToText13() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">012</p>
      <p className="relative shrink-0 text-[#68727d]">100219-33</p>
    </div>
  );
}

function Checkbox14() {
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

function AlignToText14() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">014</p>
      <p className="relative shrink-0 text-[#68727d]">100219-31</p>
    </div>
  );
}

function Checkbox15() {
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

function AlignToText15() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="Align to Text">
      <Checkbox15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex font-['Figtree:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px]">
      <p className="relative shrink-0 text-[#a1a4ac] w-[30px] whitespace-pre-wrap">015</p>
      <p className="relative shrink-0 text-[#68727d]">100219-30</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(8,fit-content(100%))] relative shrink-0 w-full">
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText1 />
            </div>
            <Frame2 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText2 />
            </div>
            <Frame3 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText3 />
            </div>
            <Frame4 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText4 />
            </div>
            <Frame5 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText5 />
            </div>
            <Frame6 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-7 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText6 />
            </div>
            <Frame7 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText7 />
            </div>
            <Frame8 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText8 />
            </div>
            <Frame9 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText9 />
            </div>
            <Frame10 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-6 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText10 />
            </div>
            <Frame11 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText11 />
            </div>
            <Frame13 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText12 />
            </div>
            <Frame14 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-6 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText13 />
            </div>
            <Frame15 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-2 h-[34px] justify-self-stretch relative rounded-[4px] row-7 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText14 />
            </div>
            <Frame16 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 h-[34px] justify-self-stretch relative rounded-[4px] row-8 shrink-0" data-name="Checkbox Unit">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
              <AlignToText15 />
            </div>
            <Frame17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <EntryMode />
      <Frame24 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full z-[2]">
      <Frame19 />
      <Frame12 />
    </div>
  );
}

function ModalContent() {
  return (
    <div className="bg-white h-[976px] relative shrink-0 w-full" data-name="Modal_content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] isolate items-start p-[16px] relative size-full">
          <Frame23 />
          <Frame18 />
          <div className="flex h-[618px] items-center justify-center relative shrink-0 w-0 z-[1]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[618px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 618 1">
                    <line id="Line 1471" stroke="url(#paint0_linear_32_48890)" x2="618" y1="0.5" y2="0.5" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_48890" x1="21.7536" x2="129.533" y1="1.5" y2="1.50001">
                        <stop stopColor="#F7F7F8" />
                        <stop offset="1" stopColor="#E5E5E5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <p className="leading-[20px]">Update Units To Count</p>
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[12px] items-center justify-end left-0 px-[16px] py-[12px] rounded-bl-[12px] rounded-br-[12px] w-[471px]" data-name="Modal_footer">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-solid border-t inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <Frame />
    </div>
  );
}

export default function LocationSerialUnits() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between relative rounded-bl-[12px] rounded-tl-[12px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)] size-full" data-name="Location Serial Units">
      <CardHeader />
      <ModalContent />
      <ModalFooter />
    </div>
  );
}