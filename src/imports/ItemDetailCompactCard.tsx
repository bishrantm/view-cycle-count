import imgImage from "figma:asset/2bbe2f6875f0243664a668c035b6de655f106dd4.png";
import { FONT } from "./shared-ui";

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
    <div className="content-stretch flex flex-col items-start leading-[normal] relative shrink-0 w-[280px] whitespace-pre-wrap" style={{ gap: "var(--spacing-1)", color: "var(--foreground)" }} data-name="Header">
      <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-semibold)", fontSize: "var(--text-h6)" }} className="h-[19px] relative shrink-0 w-full">P-00891</p>
      <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-normal)", fontSize: "var(--text-label)" }} className="overflow-hidden relative shrink-0 text-ellipsis w-full">Ventilated, drilled front brake disc, 320 mm, for mid-size sedan</p>
    </div>
  );
}

function ItemWithHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" style={{ gap: "var(--spacing-3)" }}>
      <ItemImage />
      <Header />
    </div>
  );
}

export default function ItemDetailCompactCard() {
  return (
    <div className="content-stretch flex items-start justify-end relative rounded-[8px] size-full" style={{ background: "var(--background)", padding: "var(--spacing-2) var(--spacing-2-5)", gap: "var(--spacing-3-5)", boxShadow: "var(--elevation-popover)" }}>
      <ItemWithHeader />
      <button className="content-stretch cursor-pointer flex items-center relative rounded-[6px] shrink-0" style={{ background: "var(--secondary)", padding: "var(--spacing-1) var(--spacing-1-5)" }} data-name="Label">
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "0", fontSize: "0", color: "var(--foreground)" }} className="relative shrink-0 text-left">
          <span style={{ fontFamily: FONT, fontWeight: "var(--font-weight-semibold)", lineHeight: "normal", fontSize: "var(--text-label)" }}>2,000 EA</span>
          <span style={{ lineHeight: "normal", fontSize: "var(--text-h6)" }}>{` to Count`}</span>
        </p>
      </button>
    </div>
  );
}