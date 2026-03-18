function Frame() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex h-full items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#252525] text-[14px] text-ellipsis">Lot</p>
    </div>
  );
}

export default function Label() {
  return (
    <div className="bg-white relative rounded-[6px] size-full" data-name="Label">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip pr-[6px] relative rounded-[inherit] size-full">
        <Frame />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Serialized</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}