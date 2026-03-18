import imgTextCursorBlinker from "figma:asset/ec2f130e96497d8522ff19df6f5a5053eabf2155.png";

function TextCursorBlinker() {
  return (
    <div className="h-[20px] relative shrink-0 w-[2px]" data-name="Text Cursor Blinker">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTextCursorBlinker} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <TextCursorBlinker />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c1c3c7] text-[15px] text-left">Enter up to 5 tags</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#f7f7f8] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-left">Enter</p>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#a1a4ac] text-[14px] text-left">to add</p>
    </div>
  );
}

function TextInput() {
  return (
    <button className="bg-white cursor-pointer h-[37px] relative rounded-[6px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative size-full">
          <Frame1 />
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </button>
  );
}

export default function TagDropdownV() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Tag Dropdown v2">
      <div className="content-stretch flex flex-col gap-[6px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <TextInput />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(16,24,40,0.1),0px_8px_10px_-6px_rgba(16,24,40,0.1)]" />
    </div>
  );
}