import svgPaths from "./svg-tvgj299ntc";
import imgImage from "figma:asset/2bbe2f6875f0243664a668c035b6de655f106dd4.png";

function ItemImage() {
  return (
    <div className="overflow-clip relative rounded-[6px] shrink-0 size-[57px]" data-name="Item Image">
      <div className="absolute inset-[-3.66%_-5%]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#252525] w-[280px]" data-name="Header">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold h-[19px] relative shrink-0 text-[16px] w-full">P-00891</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-full">Ventilated, drilled front brake disc, 320 mm, for mid-size sedan</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <Header />
      <button className="bg-[#f7f7f8] content-stretch cursor-pointer flex items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#252525] text-[0px] text-left whitespace-nowrap">
          <span className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] text-[14px]">2,000 EA</span>
          <span className="leading-[normal] text-[16px]">{` to Count`}</span>
        </p>
      </button>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <ItemImage />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
            <div className="absolute inset-[20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                <path d={svgPaths.p3ae1e270} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Exit Fullscreen</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
            <div className="absolute inset-[16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
                <path d={svgPaths.p2ddf63f2} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Upload</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
            <div className="absolute inset-[20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                <path d={svgPaths.p951d880} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Add New Location</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#0a77ff] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p1fe0d800} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.1px] whitespace-nowrap">
          <p className="leading-[20px]">Submit Count</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[10px] relative w-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-center leading-[normal] relative shrink-0 text-[#252525] text-[12px] whitespace-nowrap">
      <p className="relative shrink-0">1 location identified for this item.</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 underline">Take me there</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#ecf4fc] h-[28px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="add_location">
            <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
                <path d={svgPaths.p3990b900} fill="var(--fill-0, #0A77FF)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative w-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function ItemDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center py-[10px] relative rounded-[6px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)] shrink-0 w-full" data-name="Item Details">
      <Frame15 />
      <Frame16 />
      <Frame34 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium items-center justify-between leading-[normal] relative shrink-0 text-[#68727d] text-[13px] w-full">
      <p className="relative shrink-0 w-[312px]">Locations (8)</p>
      <p className="relative shrink-0 text-center whitespace-nowrap">System Count</p>
      <p className="relative shrink-0 w-[186px]">Submit Count</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[10px] items-center leading-[normal] relative shrink-0">
      <p className="relative shrink-0 text-[#a1a4ac] text-[12px] w-[32px]">0001</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Line Item/Location">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A01</p>
        <p className="overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[220px]">Loading Dock 3, Central Distribution Center</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
          <Frame25 />
          <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">1000 EA</p>
          </div>
          <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
              <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Verify Serial Unit</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[10px] items-center leading-[normal] relative shrink-0">
      <p className="relative shrink-0 text-[#a1a4ac] text-[12px] w-[32px]">0002</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Line Item/Location">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A02</p>
        <p className="overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[220px]">Loading Dock 3, Central Distribution Center</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[136px]">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Modify</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
          <Frame26 />
          <div className="bg-[#ffefee] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[13px] whitespace-nowrap">1100/1000 EA</p>
          </div>
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="info">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p60a6c00} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#252525] text-[0px] text-[12px] whitespace-nowrap">
        <span className="leading-[normal]">{`Count increased by `}</span>
        <span className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal]">+100 EA</span>
        <span className="leading-[normal]">, approval required.</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f7f7f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[10px] items-center leading-[normal] relative shrink-0">
      <p className="relative shrink-0 text-[#a1a4ac] text-[12px] w-[32px]">0003</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Line Item/Location">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A03</p>
        <p className="overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[220px]">Loading Dock 3, Central Distribution Center</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
          <Frame27 />
          <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">1000 EA</p>
          </div>
          <div className="bg-[#eaebf0] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#c1c3c7] text-[14px] tracking-[0.1px] whitespace-nowrap">Verify Serial Unit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="info">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p60a6c00} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[12px] whitespace-nowrap">Location is being counted by</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[12px] underline whitespace-nowrap">Joshua Pekins</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[12px] whitespace-nowrap">and is no longer editable.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f7f7f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[10px] items-center leading-[normal] relative shrink-0">
      <p className="relative shrink-0 text-[#a1a4ac] text-[12px] w-[32px]">0004</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Line Item/Location">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A04</p>
        <p className="overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[220px]">Loading Dock 3, Central Distribution Center</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
          <Frame28 />
          <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">1000 EA</p>
          </div>
          <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
              <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Verify Serial Unit</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[10px] items-center leading-[normal] relative shrink-0">
      <p className="relative shrink-0 text-[#a1a4ac] text-[12px] w-[32px]">0005</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Line Item/Location">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A05</p>
        <p className="overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[220px]">Loading Dock 3, Central Distribution Center</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
          <Frame29 />
          <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">1000 EA</p>
          </div>
          <div className="bg-[#eaebf0] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#c1c3c7] text-[14px] tracking-[0.1px] whitespace-nowrap">Verify Serial Unit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="keyboard_double_arrow_up">
        <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8.16667">
            <g id="Vector">
              <path d={svgPaths.p35a2cd00} fill="var(--fill-0, #27B973)" />
              <path d={svgPaths.p2adf6a00} fill="var(--fill-0, #27B973)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#252525] text-[0px] text-[12px] whitespace-nowrap">
        <span className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal]">+100 EA</span>
        <span className="leading-[normal]">{` units has been approved and is no longer editable.`}</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#e9f8f1] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">New Line Item Added</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[10px] items-center leading-[normal] relative shrink-0">
      <p className="relative shrink-0 text-[#a1a4ac] text-[12px] w-[32px]">0006</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[160px] whitespace-nowrap" data-name="Line Item/Location">
        <p className="relative shrink-0 text-[#252525] text-[15px]">WH-A01</p>
        <p className="min-w-full overflow-hidden relative shrink-0 text-[#68727d] text-[12px] text-ellipsis w-[min-content]">Loading Dock 3, Central Distribution Center</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[132px]">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Item Status">
        <div className="bg-[#e9f8f1] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#a9e3c7] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[14px] whitespace-nowrap">Completed</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[80px]">
      <div className="bg-[#f7f7f8] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[128px] shrink-0" data-name="Label">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px] whitespace-nowrap">1000 EA</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[160px]">
      <Label />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[26px] items-center min-h-px min-w-px relative">
      <Frame23 />
      <Frame20 />
      <Frame24 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0017 12">
              <path d={svgPaths.p90aeb80} fill="var(--fill-0, #68727D)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#68727d] text-[14px] tracking-[0.1px] whitespace-nowrap">Edit Count</p>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px] whitespace-nowrap">Recount</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[12px] relative size-full">
          <Frame30 />
          <Frame21 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Count Entry Cards (serialized)">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame6 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[6px] pt-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Count Entry Cards (serialized)">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame7 />
        <div className="relative shrink-0 w-full" data-name="Edit Card Assets">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[6px] relative w-full">
              <Frame2 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[6px] pt-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Count Entry Cards (serialized)">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame8 />
        <div className="relative shrink-0 w-full" data-name="Edit Card Assets">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[6px] relative w-full">
              <Frame3 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Count Entry Cards (serialized)">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame9 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[6px] pt-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Count Entry Cards (serialized)">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame10 />
        <div className="relative shrink-0 w-full" data-name="Edit Card Assets">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[6px] relative w-full">
              <Frame4 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#626b75] content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[8px] px-[4px] relative rounded-[8px] shrink-0 w-[870px]" data-name="Line Item-Location">
        <Frame35 />
        <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Full Screen View Cards">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[622px] items-start overflow-clip relative shrink-0 w-[870px]">
      <Frame18 />
      <Frame12 />
    </div>
  );
}

export default function ItemDetailsPending() {
  return (
    <div className="bg-[#ecf4fc] content-stretch flex flex-col gap-[28px] items-center p-[8px] relative rounded-[8px] size-full" data-name="Item Details (Pending)">
      <div aria-hidden="true" className="absolute border border-[#0e69e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ItemDetails />
      <Frame17 />
    </div>
  );
}