function Frame() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex h-full items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[14px] text-ellipsis">Lot</p>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-white h-full relative rounded-[6px] shrink-0" data-name="Label">
      <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip pr-[6px] relative rounded-[inherit]">
        <Frame />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Non-Serialized</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

export default function UnitStatus() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Unit Status">
      <Label />
    </div>
  );
}