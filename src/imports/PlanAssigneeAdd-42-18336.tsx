import svgPaths from "./svg-9h3lkmndjm";
import imgAvatar from "figma:asset/b2f60024fc4777e6e373abbb78897f2319578b69.png";
import imgAvatar1 from "figma:asset/3aa8abfe64c5d62a729b808360c39bded58287f2.png";
import imgAvatar2 from "figma:asset/f5f1f4b597930e3cb2e01d5aedb359b110c67bd9.png";
import imgAvatar3 from "figma:asset/2d12dfcabab73f9c9b44c3d79cf4c39195eeab7d.png";
import imgAvatar4 from "figma:asset/8b5cffbce56296888a79e3124ac2c4b8fb3fc65e.png";
import imgAvatar5 from "figma:asset/7df6d7f2d05485dbb4517c5c6a6af854d012577a.png";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#252525] text-[18px] tracking-[-0.18px]">Plan Assignee</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative z-[2]" data-name="Heading">
      <Frame1 />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Card Header">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[12px] relative size-full">
          <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px] z-[3]" data-name="modal_close">
            <div className="absolute left-[6px] size-[12px] top-[6px]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path clipRule="evenodd" d={svgPaths.p9096200} fill="var(--fill-0, black)" fillRule="evenodd" id="Union" opacity="0.5" />
              </svg>
            </div>
          </button>
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CardHeader />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="error">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.pa780b80} fill="var(--fill-0, #EFA22F)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#8f611c] text-[14px] whitespace-pre-wrap">{`If you don't assign this plan to anyone, all assigned owners will be notified to pick this item for cycle counting.`}</p>
    </div>
  );
}

function AvailableLocationsOnItem() {
  return (
    <div className="bg-[#fdf6ea] relative rounded-[6px] shrink-0 w-full z-[2]" data-name="Available locations on item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Plan Assignee(s)</p>
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">04</p>
      </div>
    </div>
  );
}

function ToggleBase() {
  return (
    <div className="bg-[#0a77ff] content-stretch flex items-center justify-end p-[2px] relative rounded-[16px] shrink-0 w-[35px]" data-name="Toggle Base">
      <div className="bg-white rounded-[128px] shadow-[0px_0.833px_1.667px_-0.833px_rgba(16,24,40,0.1),0px_0.833px_2.5px_0px_rgba(16,24,40,0.1)] shrink-0 size-[16px]" data-name="Button" />
    </div>
  );
}

function AlignToText() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Align to Text">
      <ToggleBase />
    </div>
  );
}

function PrimaryAssignee() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative rounded-[128px] shrink-0" data-name="primary assignee">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Toggle">
        <AlignToText />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Primary</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Jhon Smith</p>
      <PrimaryAssignee />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame13 />
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
          <div className="absolute bg-[#7ac663] inset-0 rounded-[128px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame2 />
    </div>
  );
}

function IndividualChat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User />
    </div>
  );
}

function Selection() {
  return (
    <div className="content-stretch flex gap-[8px] h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="remove_circle_outline">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p4b53080} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
      <IndividualChat />
    </div>
  );
}

function ToggleBase1() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex h-[20px] items-center p-[2px] relative rounded-[16px] shrink-0 w-[35px]" data-name="Toggle Base">
      <div className="bg-white rounded-[128px] shadow-[0px_0.833px_1.667px_-0.833px_rgba(16,24,40,0.1),0px_0.833px_2.5px_0px_rgba(16,24,40,0.1)] shrink-0 size-[16px]" data-name="Button" />
    </div>
  );
}

function AlignToText1() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Align to Text">
      <ToggleBase1 />
    </div>
  );
}

function PrimaryAssignee1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative rounded-[128px] shrink-0" data-name="primary assignee">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Toggle">
        <AlignToText1 />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Primary</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">George Orwell</p>
      <PrimaryAssignee1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame14 />
    </div>
  );
}

function User1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAvatar1} />
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame3 />
    </div>
  );
}

function IndividualChat1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User1 />
    </div>
  );
}

function Selection1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="remove_circle_outline">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p4b53080} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
      <IndividualChat1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#252525] text-[15px]">Steven Campbell</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#e33b32] text-[13px]">Task Declined</p>
    </div>
  );
}

function ToggleBase2() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex h-[20px] items-center p-[2px] relative rounded-[16px] shrink-0 w-[35px]" data-name="Toggle Base">
      <div className="bg-white rounded-[128px] shadow-[0px_0.833px_1.667px_-0.833px_rgba(16,24,40,0.1),0px_0.833px_2.5px_0px_rgba(16,24,40,0.1)] shrink-0 size-[16px]" data-name="Button" />
    </div>
  );
}

function AlignToText2() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Align to Text">
      <ToggleBase2 />
    </div>
  );
}

function PrimaryAssignee2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative rounded-[128px] shrink-0" data-name="primary assignee">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Toggle">
        <AlignToText2 />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Primary</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame30 />
      <PrimaryAssignee2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame15 />
    </div>
  );
}

function User2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAvatar2} />
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame4 />
    </div>
  );
}

function IndividualChat2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User2 />
    </div>
  );
}

function Selection2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="remove_circle_outline">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p4b53080} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
      <IndividualChat2 />
    </div>
  );
}

function ToggleBase3() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex h-[20px] items-center p-[2px] relative rounded-[16px] shrink-0 w-[35px]" data-name="Toggle Base">
      <div className="bg-white rounded-[128px] shadow-[0px_0.833px_1.667px_-0.833px_rgba(16,24,40,0.1),0px_0.833px_2.5px_0px_rgba(16,24,40,0.1)] shrink-0 size-[16px]" data-name="Button" />
    </div>
  );
}

function AlignToText3() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Align to Text">
      <ToggleBase3 />
    </div>
  );
}

function PrimaryAssignee3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative rounded-[128px] shrink-0" data-name="primary assignee">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Toggle">
        <AlignToText3 />
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">Primary</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">James Stewart</p>
      <PrimaryAssignee3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame16 />
    </div>
  );
}

function User3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAvatar3} />
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame5 />
    </div>
  );
}

function IndividualChat3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User3 />
    </div>
  );
}

function Selection3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="remove_circle_outline">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p4b53080} fill="var(--fill-0, #68727D)" id="Vector" />
          </svg>
        </div>
      </div>
      <IndividualChat3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Selection />
      <Selection1 />
      <Selection2 />
      <Selection3 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full z-[1]">
      <Frame17 />
      <Frame28 />
    </div>
  );
}

function ModalContent() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Modal_content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] isolate items-center p-[16px] relative size-full">
          <AvailableLocationsOnItem />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function PlanAssignee() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] items-center justify-between relative rounded-bl-[12px] rounded-tl-[12px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)] shrink-0 w-[400px]" data-name="Plan Assignee">
      <Frame27 />
      <ModalContent />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[20px] tracking-[-0.2px]">Select assignee to add to the plan</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[34px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-start pl-[16px] relative size-full">
        <div className="h-[34px] relative shrink-0" data-name=".Tab base">
          <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip py-[8px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
              <div className="absolute inset-[14.58%_6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11.3333">
                  <g id="Vector">
                    <path d={svgPaths.p2af7e500} fill="var(--fill-0, #0A77FF)" />
                    <path d={svgPaths.p291fb580} fill="var(--fill-0, #0A77FF)" />
                    <path d={svgPaths.p11b53400} fill="var(--fill-0, #0A77FF)" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0a77ff] text-[14px]">With Permission</p>
          </div>
          <div aria-hidden="true" className="absolute border-[#0e69e2] border-b-2 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="h-[34px] relative shrink-0" data-name=".Tab base">
          <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip py-[10px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="boxes-2">
              <div className="-translate-y-1/2 absolute aspect-[20/20.00016212463379] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.0001">
                  <path d={svgPaths.p13d21600} fill="var(--fill-0, #68727D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[14px]">Without Permission</p>
          </div>
          <div aria-hidden="true" className="absolute border-[#eaebf0] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Essentials/zoom/search">
            <div className="absolute inset-[8.33%]" data-name="Icon">
              <div className="absolute inset-[-6.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1111 15.1111">
                  <path d={svgPaths.p1c91b980} id="Icon" stroke="var(--stroke-0, #68727D)" strokeLinecap="round" strokeWidth="1.77778" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#a1a4ac] text-[14px] whitespace-pre-wrap">Search with username</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
    </div>
  );
}

function SearchItemsCycleCountTaskCreation() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Search items - cycle count task creation">
      <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shadow-[0px_0px_0px_0px_#b2d5ff] shrink-0 w-full" data-name="Search">
        <TextInput />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SearchItemsCycleCountTaskCreation />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#68727d] text-[13px]">With Permission</p>
      <div className="bg-[#f7f7f8] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#252525] text-[14px]">06</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Jhon Smith</p>
    </div>
  );
}

function User4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
          <div className="absolute bg-[#7ac663] inset-0 rounded-[128px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame6 />
      <div className="bg-[#ffefee] content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p266be000} fill="var(--fill-0, #E33B32)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e33b32] text-[14px] tracking-[0.1px]">Remove</p>
      </div>
    </div>
  );
}

function IndividualChat4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[12px] relative" data-name="Individual chat">
      <User4 />
    </div>
  );
}

function Selection4() {
  return (
    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <IndividualChat4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">James Stewart</p>
    </div>
  );
}

function User5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAvatar3} />
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame7 />
      <div className="bg-[#ffefee] content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p266be000} fill="var(--fill-0, #E33B32)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e33b32] text-[14px] tracking-[0.1px]">Remove</p>
      </div>
    </div>
  );
}

function IndividualChat5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User5 />
    </div>
  );
}

function Selection5() {
  return (
    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <IndividualChat5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[normal] min-h-px min-w-px relative">
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#252525] text-[15px]">Steven Campbell</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#e33b32] text-[13px]">Task Declined</p>
    </div>
  );
}

function User6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAvatar2} />
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame8 />
      <div className="bg-[#ffefee] content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p266be000} fill="var(--fill-0, #E33B32)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e33b32] text-[14px] tracking-[0.1px]">Remove</p>
      </div>
    </div>
  );
}

function IndividualChat6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User6 />
    </div>
  );
}

function Selection6() {
  return (
    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <IndividualChat6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Anthony Simmons</p>
    </div>
  );
}

function User7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
          <div className="absolute bg-[#44978a] inset-0 rounded-[128px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar4} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame9 />
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
              <path d={svgPaths.p34d08d70} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Add</p>
      </div>
    </div>
  );
}

function IndividualChat7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User7 />
    </div>
  );
}

function Selection7() {
  return (
    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <IndividualChat7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">Friedrich Engels</p>
    </div>
  );
}

function User8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[128px]">
          <div className="absolute bg-[#e8d6ca] inset-0 rounded-[128px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[128px] size-full" src={imgAvatar5} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame10 />
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
              <path d={svgPaths.p34d08d70} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Add</p>
      </div>
    </div>
  );
}

function IndividualChat8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User8 />
    </div>
  );
}

function Selection8() {
  return (
    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <IndividualChat8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#252525] text-[15px]">George Orwell</p>
    </div>
  );
}

function User9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="_user">
      <div className="pointer-events-none relative rounded-[128px] shrink-0 size-[40px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[128px] size-full" src={imgAvatar1} />
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] rounded-[130px]" />
      </div>
      <Frame11 />
      <div className="bg-[#ffefee] content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p266be000} fill="var(--fill-0, #E33B32)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e33b32] text-[14px] tracking-[0.1px]">Remove</p>
      </div>
    </div>
  );
}

function IndividualChat9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip py-[12px] relative" data-name="Individual chat">
      <User9 />
    </div>
  );
}

function Selection9() {
  return (
    <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Selection">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <IndividualChat9 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Selection4 />
      <Selection5 />
      <Selection6 />
      <Selection7 />
      <Selection8 />
      <Selection9 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame29 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] relative w-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function DeliveryDate() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-h-px min-w-px py-[10px] relative rounded-[8px] w-full" data-name="Delivery date">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(113,128,150,0.04),0px_4px_8px_0px_rgba(113,128,150,0.08)]" />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function AssigneeSelection() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col gap-[18px] h-[1024px] items-start justify-center p-[20px] relative shrink-0 w-[420px]" data-name="Assignee Selection">
      <Frame20 />
      <DeliveryDate />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <PlanAssignee />
      <AssigneeSelection />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0">
      <div className="bg-white relative rounded-[6px] shrink-0 w-[69px]" data-name="Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-full">
          <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#252525] text-[14px] tracking-[0.1px]">Cancel</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaebf0] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#0a77ff] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.1px] whitespace-nowrap">
          <p className="leading-[20px]">Update Assignee(s)</p>
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Modal_footer">
      <div aria-hidden="true" className="absolute border-[#eaebf0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-end px-[16px] py-[12px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function PlanAssigneeAdd() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Plan Assignee -  Add">
      <Frame31 />
      <ModalFooter />
    </div>
  );
}