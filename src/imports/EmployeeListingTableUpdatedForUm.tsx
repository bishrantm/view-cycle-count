import { employeeListingIcons as svgPaths } from "./icons";
import imgAvatar from "figma:asset/e835ceb25c111e7790c70fc45cee781cc30e48d1.png";
import imgAvatar1 from "figma:asset/dda0da91175068085981e24d2f47466addea51df.png";

function FixedColumnHeader() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex h-[40px] items-center p-[16px] relative shrink-0 w-[110px]" data-name="Fixed Column Header">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">{`ID `}</p>
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
          <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-8.39%_-9.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FixedColumnHeader1() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex h-[40px] items-center p-[16px] relative shrink-0 w-[120px]" data-name="Fixed Column Header">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Count Basis</p>
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
          <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-8.39%_-9.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame3 />
    </div>
  );
}

function InventoryListExpander() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">CC-123460</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Item</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame4 />
    </div>
  );
}

function InventoryListExpander1() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">CC-123459</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Item</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame5 />
    </div>
  );
}

function InventoryListExpander2() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[15px]">CC-123458</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Location</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame6 />
    </div>
  );
}

function InventoryListExpander3() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow3 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">CC-123456</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Item</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function InventoryListExpander4() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow4 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">CC-123455</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Category</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame8 />
    </div>
  );
}

function InventoryListExpander5() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow5 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">CC-123454</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Location</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame9 />
    </div>
  );
}

function InventoryListExpander6() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow6 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">CC-123453</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Category</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame10 />
    </div>
  );
}

function InventoryListExpander7() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow7 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[15px]">CC-123452</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">{` Location`}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white relative rounded-[100px] size-[18px]" data-name="add">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                  <path d={svgPaths.p27b8f180} fill="var(--fill-0, #0A77FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2efff] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-center justify-center left-0 top-0 w-[65px]" data-name="Arrow">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid inset-0 pointer-events-none" />
      <Frame11 />
    </div>
  );
}

function InventoryListExpander8() {
  return (
    <div className="bg-[#f7f7f8] h-[35px] relative shrink-0 w-[65px]" data-name="Inventory List/Expander">
      <Arrow8 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">CC-123451</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Location</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Fixed Table Column">
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center px-[24px] py-[16px] relative shrink-0 w-[65px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name=".Checkbox Base">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p1b53dc00} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <FixedColumnHeader />
        <FixedColumnHeader1 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Cycle Count Id">
        <InventoryListExpander />
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text />
        </div>
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text1 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 2">
        <InventoryListExpander1 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text2 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text3 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 3">
        <InventoryListExpander2 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text4 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text5 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 5">
        <InventoryListExpander3 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text6 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text7 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 6">
        <InventoryListExpander4 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text8 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text9 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 7">
        <InventoryListExpander5 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text10 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text11 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 8">
        <InventoryListExpander6 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text12 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text13 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 9">
        <InventoryListExpander7 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text14 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text15 />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 10">
        <InventoryListExpander8 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[110px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text16 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[8px] relative shrink-0 w-[120px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-[#ffefee] content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Pending</p>
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[128px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar} />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar1} />
        </div>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Unassigned</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">Front bulkhead cabinet lower cover inlay</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-[#ffefee] content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+4 More</p>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Pending</p>
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">Front bulkhead cabinet lower cover inlay</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+4 More</p>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+5 More</p>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#fdf6ea] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#f9daac] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8f611c] text-[14px]">Awaiting Approval</p>
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[15px]">Yes</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Yes</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">-</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+8 More</p>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">In Progress</p>
        </div>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">Front bulkhead cabinet lower cover inlay</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#e9f8f1] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#a9e3c7] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#176f45] text-[14px]">Completed</p>
        </div>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">Front bulkhead cabinet lower cover inlay</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+14 More</p>
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#ffefee] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#fea19b] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[14px]">Cancelled</p>
        </div>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">-</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">In Progress</p>
        </div>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">-</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+4 More</p>
      </div>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+7 More</p>
      </div>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#fdf6ea] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#f9daac] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8f611c] text-[14px]">Closed (Incomplete)</p>
        </div>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#e33b32] text-[15px]">Yes</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">-</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Quick Count</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">Fastener</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+5 More</p>
      </div>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[170px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Item Status">
        <div className="bg-[#ffefee] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#fea19b] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#db3a33] text-[14px]">Cancelled</p>
        </div>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[220px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Jonas Adams</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[15px] w-[min-content] whitespace-pre-wrap">-</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="bg-white content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Priority">
        <div className="bg-[#ecf4fc] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
          <div aria-hidden="true" className="absolute border border-[#90c2ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0e69e2] text-[14px]">Standard</p>
        </div>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#68727d] text-[14px] tracking-[-0.1px]">Maya Thompson</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell />
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#68727d] text-[0px] text-[15px]">
              <span className="leading-[normal]">{`P-15891, `}</span>
              <span className="leading-[normal]">P-222245</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
          </div>
        </div>
        <TableCell1 />
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Zone B</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+1 More</p>
          </div>
        </div>
        <TableCell2 />
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text18 />
        </div>
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text19 />
        </div>
        <div className="bg-[#ffefee] content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text20 />
        </div>
        <TableCell3 />
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text21 />
        </div>
        <TableCell4 />
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text22 />
        </div>
        <div className="bg-[#ffefee] content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#e33b32] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#e33b32] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell5 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">P-55005</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <TableCell6 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Zone B</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
          </div>
        </div>
        <TableCell7 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text23 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text24 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text25 />
        </div>
        <TableCell8 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text26 />
        </div>
        <TableCell9 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text27 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell10 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#68727d] text-[0px] text-[15px]">
              <span className="leading-[normal]">{`P-104356, `}</span>
              <span className="leading-[normal]">P-222245</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <TableCell11 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">WH-A01</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
          </div>
        </div>
        <TableCell12 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text28 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text29 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text30 />
        </div>
        <TableCell13 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text31 />
        </div>
        <TableCell14 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text32 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell15 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#68727d] text-[0px] text-[15px]">
              <span className="leading-[normal]">{`P-00891, `}</span>
              <span className="leading-[normal]">P-103345</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
          </div>
        </div>
        <TableCell16 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">WH-A01</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <TableCell17 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text33 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text34 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text35 />
        </div>
        <TableCell18 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text36 />
        </div>
        <TableCell19 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text37 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell20 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#68727d] text-[0px] text-[15px]">
              <span className="leading-[normal]">{`P-50596, `}</span>
              <span className="leading-[normal]">P-103045</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+5 More</p>
          </div>
        </div>
        <TableCell21 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Zone B</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <TableCell22 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text38 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text39 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text40 />
        </div>
        <TableCell23 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text41 />
        </div>
        <TableCell24 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text42 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell25 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#68727d] text-[0px] text-[15px]">
              <span className="leading-[normal]">{`P-00891, `}</span>
              <span className="leading-[normal]">P-006545</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+12 More</p>
          </div>
        </div>
        <TableCell26 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Zone B</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
          </div>
        </div>
        <TableCell27 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text43 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text44 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text45 />
        </div>
        <TableCell28 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text46 />
        </div>
        <TableCell29 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text47 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell30 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">P-00891</p>
          </div>
        </div>
        <TableCell31 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Zone B</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <TableCell32 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text48 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text49 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text50 />
        </div>
        <TableCell33 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text51 />
        </div>
        <TableCell34 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text52 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell35 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#68727d] text-[0px] text-[15px]">
              <span className="leading-[normal]">{`P-0250, `}</span>
              <span className="leading-[normal]">P-008864</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
          </div>
        </div>
        <TableCell36 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Zone B</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip rounded-[5px] shrink-0" data-name="Button" />
        </div>
        <TableCell37 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text53 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text54 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text55 />
        </div>
        <TableCell38 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text56 />
        </div>
        <TableCell39 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text57 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[35px] items-center relative shrink-0 w-full" data-name="Inventory List">
        <TableCell40 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#68727d] text-[0px] text-[15px]">
              <span className="leading-[normal]">{`P-090331, `}</span>
              <span className="leading-[normal]">P-102346</span>
            </p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+4 More</p>
          </div>
        </div>
        <TableCell41 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">Zone B</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px] underline">+2 More</p>
          </div>
        </div>
        <TableCell42 />
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text58 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text59 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[140px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">-</p>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[120px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text60 />
        </div>
        <TableCell43 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[220px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <Text61 />
        </div>
        <TableCell44 />
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center pl-[16px] pr-[12px] py-[12px] relative shrink-0 w-[180px]" data-name="Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="relative rounded-[128px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[128px] size-full" src={imgAvatar} />
          </div>
          <Text62 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">1:00 PM</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[35px] items-center px-[16px] py-[12px] relative shrink-0 w-[190px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">10/23/2025</p>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, #68727D)" id="Ellipse 1326" r="2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[15px]">2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-auto overflow-y-clip relative shrink-0 w-[2990px]">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table">
        <div className="bg-[#f7f7f8] content-stretch flex h-[40px] items-center pl-[16px] py-[16px] relative shrink-0 w-[200px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Tags</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[240px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Items</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center p-[16px] relative shrink-0 w-[180px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Categories</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[160px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Location(s)</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex h-[40px] items-center pl-[16px] py-[16px] relative shrink-0 w-[170px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Status</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[120px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Discrepancy</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[140px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">System Count</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[140px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Actual Count</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[120px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Reported</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[220px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Assignee(s)</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[190px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Completed On</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center p-[16px] relative shrink-0 w-[220px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Description</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex h-[40px] items-center pl-[16px] py-[16px] relative shrink-0 w-[140px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Priority</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[190px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Created On</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[180px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Created By</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[190px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Start Date</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0 w-[190px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Due Date</p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow/down">
              <div className="absolute bottom-[22.56%] left-1/4 right-1/4 top-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-8.39%_-9.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33 9.25504">
                    <path d={svgPaths.p3f3d99c0} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function TableFirstSection() {
  return (
    <div className="relative shrink-0" data-name="Table First Section">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="bg-[#f7f7f8] content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[12px] py-[16px] shrink-0 sticky top-0 w-[60px]" data-name=".Table header cell">
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name=".Table header">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Actions</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] h-[35px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[60px]" data-name=".Table cell">
          <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="more_horiz">
            <div className="absolute inset-[41.67%_16.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 3.33333">
                <path d={svgPaths.p969b280} fill="var(--fill-0, #68727D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white content-stretch flex h-[663px] items-start relative shrink-0 w-full" data-name="Table">
      <Frame12 />
      <Frame14 />
      <TableFirstSection />
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Number">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#252525] text-[14px]">10</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="keyboard_arrow_down">
        <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6.175">
            <path d={svgPaths.p312e7240} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Number />
    </div>
  );
}

function NumberField() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="Number Field">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[12px]">Records per page</p>
      <NumberField />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0 size-[40px]" data-name=".Pagination base">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 8">
              <g id="Vector">
                <path d={svgPaths.p2b205b00} fill="var(--fill-0, #68727D)" />
                <path d={svgPaths.pd3ce200} fill="var(--fill-0, #68727D)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[1px] shrink-0" data-name=".Pagination base">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
              <path d={svgPaths.p212f8200} fill="var(--fill-0, #68727D)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Prev</p>
      </div>
      <div className="bg-[#0a77ff] content-stretch flex flex-col items-center justify-center relative rounded-[1px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px]" data-name=".Pagination base">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-white">1</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0 size-[40px]" data-name=".Pagination base">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">2</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0 size-[40px]" data-name=".Pagination base">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">...</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0 size-[40px]" data-name=".Pagination base">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c1c3c7] text-[14px]">5</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0 size-[40px]" data-name=".Pagination base">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">6</p>
      </div>
      <div className="content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[1px] shrink-0" data-name=".Pagination base">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Next</p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
              <path d={svgPaths.pf313640} fill="var(--fill-0, #68727D)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0 size-[40px]" data-name=".Pagination base">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 8">
              <g id="Vector">
                <path d={svgPaths.pc7e9e80} fill="var(--fill-0, #68727D)" />
                <path d={svgPaths.p17344f00} fill="var(--fill-0, #68727D)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmployeeListingTableUpdatedForUm() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] size-full" data-name="Employee Listing Table (Updated for UM)">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)]" />
      <Table />
      <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Pagination (Mobile)">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[12px] relative w-full">
            <Frame2 />
            <Frame1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#eaebf0] border-solid border-t inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}