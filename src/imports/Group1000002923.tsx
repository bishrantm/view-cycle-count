import svgPaths from "./svg-81kq1aio0d";
import imgAvatar from "figma:asset/4bc2046dd82ac8ecf50dac73d271ca3152b554ac.png";
import imgAvatar1 from "figma:asset/58fa559ab56378f83dc49b7fe1e5abdae07d4852.png";
import imgAvatar2 from "figma:asset/8b5cffbce56296888a79e3124ac2c4b8fb3fc65e.png";

function Healper() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Healper">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Search items and select them for counting.</p>
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
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative z-[3]" data-name="Heading">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px]">Choose items to count</p>
      <Healper />
    </div>
  );
}

function Avatars() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Avatars">
      <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
          <div className="absolute bg-[#ffb145] inset-0 rounded-[128px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
          <div className="absolute bg-[#aed3dc] inset-0 rounded-[128px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar1} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
          <div className="absolute bg-[#44978a] inset-0 rounded-[128px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar2} />
        </div>
        <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-[-3px] rounded-[131px]" />
      </div>
      <div className="bg-[#0a77ff] content-stretch flex items-center justify-center mr-[-8px] relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[130px]" />
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-white">+2</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Name">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[16px] w-[min-content] whitespace-pre-wrap">Assignee</p>
    </div>
  );
}

function DateSelector() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center pl-[8px] pr-[16px] py-[6px] relative rounded-[36px] shrink-0 z-[1]" data-name="Date Selector">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <Avatars />
      <Name />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute content-stretch flex gap-[12px] isolate items-center left-0 pb-[24px] pt-[16px] px-[16px] rounded-tl-[12px] rounded-tr-[12px] top-0 w-[976px]" data-name="Card Header">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Heading />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <DateSelector />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white h-[900px] left-0 rounded-[14px] top-0 w-[976px]" />
      <CardHeader />
      <div className="absolute bg-[#d9d9d9] h-[812px] left-0 top-[88px] w-[362px]" />
      <div className="absolute bg-[#ecf4fc] h-[812px] left-[362px] rounded-br-[14px] top-[88px] w-[614px]" />
    </div>
  );
}