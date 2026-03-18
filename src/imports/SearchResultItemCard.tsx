import svgPaths from "./svg-v6czhsxx3a";
import imgTableImages from "figma:asset/3d6cd8c15f93eb5073abf3d8e16cda09c87fdde5.png";
import imgTableImages1 from "figma:asset/9edf3ae748122d6ad61287f140b75382b5902a6a.png";
import imgTableImages2 from "figma:asset/69115701eb59753545c34c08b5df63d986702686.png";
import { FONT } from "./shared-ui";

function TableImages() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[40px]" data-name="Table Images">
      <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
        <div className="absolute inset-0 rounded-[8px]" style={{ background: "var(--background)" }} />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTableImages} />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTableImages1} />
        <div className="absolute inset-0 rounded-[8px]" style={{ background: "var(--background)" }} />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute left-1/4 max-w-none size-1/2 top-1/4" src={imgTableImages2} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-solid inset-0 rounded-[8px]" style={{ borderColor: "var(--border)", borderWidth: "0.5px" }} />
    </div>
  );
}

function MemoryBarcode() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="memory:barcode">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="memory:barcode">
          <path d={svgPaths.p13615bb1} fill="var(--fill-0, var(--foreground))" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagBadges() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" style={{ gap: "var(--spacing-1)" }}>
      <div className="content-stretch flex items-center relative rounded-[6px] shrink-0" style={{ background: "var(--status-in-progress-bg)", padding: "var(--spacing-0-5) var(--spacing-2)" }} data-name="Label">
        <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[6px]" style={{ borderColor: "var(--primary-300)" }} />
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--primary)" }} className="relative shrink-0">Parts</p>
      </div>
      <div className="content-stretch flex items-center relative rounded-[6px] shrink-0" style={{ background: "var(--status-completed-bg)", padding: "var(--spacing-0-5) var(--spacing-2)" }} data-name="Label">
        <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[6px]" style={{ borderColor: "var(--status-completed-border)" }} />
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--status-completed-text)" }} className="relative shrink-0">Active</p>
      </div>
      <div className="content-stretch flex items-center relative rounded-[6px] shrink-0" style={{ background: "var(--secondary)", padding: "var(--spacing-0-5) var(--spacing-2)", gap: "var(--spacing-1)" }} data-name="Item control type">
        <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[6px]" style={{ borderColor: "var(--border)" }} />
        <MemoryBarcode />
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--foreground)" }} className="relative shrink-0">Serialized</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" style={{ gap: "var(--spacing-2)" }} data-name="Heading">
      <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-semibold)", lineHeight: "normal", fontSize: "var(--text-body-sm)", color: "var(--text-secondary)" }} className="overflow-hidden relative shrink-0 text-ellipsis">DSHAE-15891</p>
      <TagBadges />
    </div>
  );
}

function ItemInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" style={{ gap: "var(--spacing-1-5)" }}>
      <Heading />
      <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-normal)", fontSize: "var(--text-label)", color: "var(--text-secondary)" }} className="h-[36px] leading-[normal] overflow-hidden relative shrink-0 text-ellipsis w-full whitespace-pre-wrap">{`Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per shipment`}</p>
    </div>
  );
}

function ItemRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[355px]" style={{ gap: "var(--spacing-2)" }}>
      <TableImages />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ItemInfo />
      </div>
    </div>
  );
}

function MetaBadges() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" style={{ gap: "var(--spacing-2)" }}>
      <div className="content-stretch flex items-center relative rounded-[128px] shrink-0" style={{ background: "var(--secondary)", padding: "var(--spacing-0-5) var(--spacing-2)" }} data-name="Label">
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }} className="relative shrink-0">Last Counted: 15/10/2025, 3:44 PM</p>
      </div>
      <div className="content-stretch flex items-center relative rounded-[128px] shrink-0" style={{ background: "var(--secondary)", padding: "var(--spacing-0-5) var(--spacing-2)" }} data-name="Label">
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }} className="relative shrink-0">6,800 EA</p>
      </div>
    </div>
  );
}

function ItemSearchCard() {
  return (
    <div className="h-[79px] relative shrink-0 w-full" data-name="Item List">
      <div className="absolute content-stretch flex items-center justify-between left-0 rounded-[6px] top-0 w-[832px]" style={{ background: "var(--background)", padding: "var(--spacing-2)" }} data-name="Search Cards">
        <ItemRow />
        <MetaBadges />
      </div>
    </div>
  );
}

function LocationAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" style={{ background: "var(--background)" }} data-name="Avatar">
      <div aria-hidden="true" className="absolute border-solid pointer-events-none rounded-[129.143px]" style={{ borderColor: "var(--border)", borderWidth: "1.143px", inset: "-1.143px" }} />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="location_on">
        <div className="absolute" style={{ inset: "8.33% 20.83%" }} data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 13.3333">
            <g id="Vector">
              <path d={svgPaths.p1e430ff2} fill="var(--fill-0, var(--primary))" />
              <path d={svgPaths.p25704700} fill="var(--fill-0, var(--primary))" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LocationCard() {
  return (
    <div className="h-[60px] relative shrink-0 w-full">
      <div className="absolute content-stretch flex items-center justify-between left-0 rounded-[6px] top-0 w-[832px]" style={{ background: "var(--background)", padding: "var(--spacing-2)" }} data-name="Search Cards">
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative h-[44px]" style={{ gap: "var(--spacing-2)" }}>
          <LocationAvatar />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" style={{ gap: "var(--spacing-1-5)" }}>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-semibold)", lineHeight: "normal", fontSize: "var(--text-body-sm)", color: "var(--text-secondary)" }} className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis whitespace-nowrap">Zone Aero-03</p>
            </div>
            <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-normal)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--text-secondary)" }} className="overflow-hidden relative shrink-0 text-ellipsis w-full whitespace-nowrap">Bay 3, Central Warehouse</p>
          </div>
        </div>
        <div className="content-stretch flex items-center relative rounded-[128px] shrink-0" style={{ background: "var(--secondary)", padding: "var(--spacing-0-5) var(--spacing-2)" }} data-name="Label">
          <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }} className="relative shrink-0">Last Counted: 15/10/2025, 5:45 PM</p>
        </div>
      </div>
    </div>
  );
}

function CategoryAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" style={{ background: "var(--background)" }} data-name="Avatar">
      <div aria-hidden="true" className="absolute border-solid pointer-events-none rounded-[129.143px]" style={{ borderColor: "var(--border)", borderWidth: "1.143px", inset: "-1.143px" }} />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="category">
        <div className="absolute" style={{ inset: "8.33% 10.42%" }} data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 13.3333">
            <path d={svgPaths.p39608800} fill="var(--fill-0, var(--primary))" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CategoryCard() {
  return (
    <div className="h-[60px] relative shrink-0 w-full">
      <div className="absolute content-stretch flex items-center left-0 rounded-[6px] top-0 w-[832px]" style={{ background: "var(--background)", padding: "var(--spacing-2)", gap: "var(--spacing-6)" }} data-name="Search Cards">
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative h-[44px]" style={{ gap: "var(--spacing-2)" }}>
          <CategoryAvatar />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" style={{ gap: "var(--spacing-1-5)" }}>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-semibold)", lineHeight: "normal", fontSize: "var(--text-body-sm)", color: "var(--text-secondary)" }} className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-ellipsis whitespace-nowrap">AE-3</p>
            </div>
            <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-normal)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--text-secondary)" }} className="overflow-hidden relative shrink-0 text-ellipsis w-full whitespace-nowrap">Aeronautical engine for third units</p>
          </div>
        </div>
        <div className="content-stretch flex items-center relative rounded-[128px] shrink-0" style={{ background: "var(--secondary)", padding: "var(--spacing-0-5) var(--spacing-2)" }} data-name="Label">
          <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }} className="relative shrink-0">Last Counted: 15/10/2025, 1:36 PM</p>
        </div>
      </div>
    </div>
  );
}

export default function SearchResultItemCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ gap: "var(--spacing-2-5)" }}>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--text-tertiary)" }} className="relative shrink-0">Items</p>
        <ItemSearchCard />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--text-tertiary)" }} className="relative shrink-0">Locations</p>
        <LocationCard />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <p style={{ fontFamily: FONT, fontWeight: "var(--font-weight-medium)", lineHeight: "normal", fontSize: "var(--text-label)", color: "var(--text-tertiary)" }} className="relative shrink-0">Categories</p>
        <CategoryCard />
      </div>
    </div>
  );
}