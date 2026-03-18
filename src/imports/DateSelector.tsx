import imgAvatar from "figma:asset/4bc2046dd82ac8ecf50dac73d271ca3152b554ac.png";
import imgAvatar1 from "figma:asset/58fa559ab56378f83dc49b7fe1e5abdae07d4852.png";
import imgAvatar2 from "figma:asset/8b5cffbce56296888a79e3124ac2c4b8fb3fc65e.png";

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

export default function DateSelector() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center pl-[8px] pr-[16px] py-[6px] relative rounded-[36px] size-full" data-name="Date Selector">
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <Avatars />
      <Name />
    </div>
  );
}