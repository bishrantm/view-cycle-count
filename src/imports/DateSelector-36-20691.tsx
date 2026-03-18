import imgAvatar from "figma:asset/dda0da91175068085981e24d2f47466addea51df.png";

function Avatars() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Avatars">
      <div className="mr-[-8px] pointer-events-none relative rounded-[128px] shrink-0 size-[36px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAvatar} />
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Name">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#68727d] text-[16px] w-[min-content] whitespace-pre-wrap">Unassigned</p>
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