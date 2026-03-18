import { titleIcons as svgPaths } from "./icons";

function IconPlaceholder() {
  return (
    <div className="bg-[#ecf4fc] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[40px]" data-name=".Icon placeholder">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
            <path d={svgPaths.p3d71f480} fill="var(--fill-0, #0A77FF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px] w-full">Inventory Movement</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#68727d] text-[14px] w-full">Track stock levels of items in the item library, Serialized and Non-Serialized.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] h-[49px] items-center relative shrink-0 w-[680px]">
      <IconPlaceholder />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="add">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
            <path d={svgPaths.p27b8f180} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.1px]">Create Movement</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0a77ff] content-stretch flex gap-[12px] h-[36px] items-center justify-center overflow-clip pl-[12px] relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_-1px_rgba(16,24,40,0.1)] shrink-0" data-name="Button">
      <Frame1 />
      <div className="bg-[#0a77ff] content-stretch flex h-full items-center justify-center px-[8px] relative rounded-br-[6px] rounded-tr-[6px] shrink-0" data-name="Action">
        <div aria-hidden="true" className="absolute border-[#1750b1] border-l border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="keyboard_arrow_down">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6.175">
              <path d={svgPaths.p312e7240} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex inset-[15%_1.76%_44.17%_1.76%] items-center justify-between">
      <Frame />
      <Button />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex gap-[24px] inset-[70.83%_0_-0.83%_0] items-start pl-[24px]" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] pt-[6px] relative shrink-0" data-name=".Tab base">
        <div aria-hidden="true" className="absolute border-[#0e69e2] border-b-2 border-solid inset-[0_0_-1px_0] pointer-events-none" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p7c1c680} fill="var(--fill-0, #0A77FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">Movement List/Board</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] pt-[6px] relative shrink-0" data-name=".Tab base">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.44%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3">
              <path d={svgPaths.paf15400} fill="var(--fill-0, #68727D)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Analytics</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] pt-[6px] relative shrink-0" data-name=".Tab base">
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Filled">
          <div className="absolute inset-[12.5%_6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
              <path d={svgPaths.p20f68400} fill="var(--fill-0, #68727D)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Activity Log</p>
      </div>
    </div>
  );
}

export default function Title() {
  return (
    <div className="relative size-full" data-name="Title">
      <div className="absolute bg-white inset-[0_0_-0.83%_0]" />
      <Frame2 />
      <Tabs />
    </div>
  );
}