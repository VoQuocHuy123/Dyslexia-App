import svgPaths from "./svg-7t5wcq8eco";
import imgPrimitiveImg from "figma:asset/dd3df7d2a2280263ad1b9078bb1abcb5f6fea532.png";

function Paragraph() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Sam Anderson</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#666666] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Level 3</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[76.5px] top-[4.5px] w-[133.297px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="basis-0 grow h-[63px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[63px] w-full" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[63px] top-0" data-name="Primitive.span">
      <PrimitiveImg />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[63px] left-[27px] top-[27px] w-[233px]" data-name="Container">
      <Container />
      <PrimitiveSpan />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d={svgPaths.p10770780} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p3852bb00} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[53.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[53.344px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#333333] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[63px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] h-[63px] items-center pl-[18px] pr-0 py-0 relative w-full">
          <Icon />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d="M13.5 7.875V23.625" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p1d49ee00} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[75.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[75.422px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Reading</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fffcf2] h-[63px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] h-[63px] items-center pl-[18px] pr-0 py-0 relative w-full">
          <Icon1 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d="M13.5 21.375V24.75" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p77e4a0} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p89e0880} id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[85.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[85.047px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#333333] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Speaking</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ffe8cc] h-[63px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] h-[63px] items-center pl-[18px] pr-0 py-0 relative w-full">
          <Icon2 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d="M18 6.75L22.5 22.5" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d="M13.5 6.75V22.5" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d="M9 9V22.5" id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d="M4.5 4.5V22.5" id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[65.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[65.625px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#333333] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Library</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[63px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] h-[63px] items-center pl-[18px] pr-0 py-0 relative w-full">
          <Icon3 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d={svgPaths.p1b9c4200} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p1924b700} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p63fa00} id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p1c4c5a00} id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d="M7.875 9H16.875" id="Vector_5" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d="M7.875 13.5H19.125" id="Vector_6" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d="M7.875 18H14.625" id="Vector_7" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[109.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[109.594px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#333333] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">OCR Import</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[63px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] h-[63px] items-center pl-[18px] pr-0 py-0 relative w-full">
          <Icon4 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d={svgPaths.p138ec280} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p17fe2500} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[74.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[74.328px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#333333] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[63px] relative rounded-[18px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[18px] h-[63px] items-center pl-[18px] pr-0 py-0 relative w-full">
          <Icon5 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[9px] h-[825px] items-start left-0 px-[13.5px] py-0 top-[117px] w-[287px]" data-name="Navigation">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#fffcf2] h-[942px] relative shrink-0 w-[288px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e8dcc8] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[942px] relative w-[288px]">
        <Container1 />
        <Navigation />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[561.562px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[46.8px] left-0 text-[#111111] text-[26px] top-[-1px] tracking-[3.64px] w-[857px]">The butterfly landed gently on the colorful flower. Its wings were bright orange and black, with beautiful patterns that looked like tiny windows. The butterfly rested there for a moment, enjoying the warm sunshine. Suddenly, a gentle breeze blew through the garden. The butterfly opened and closed its wings slowly, as if it was saying hello to the wind. Then it flew up into the sky, dancing between the clouds. Children watched from below, pointing and smiling. They loved seeing the butterfly dance in the air. It was a perfect summer day.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#fff8e7] box-border content-stretch flex flex-col h-[709.562px] items-start left-[120px] pb-[2px] pt-[74px] px-[74px] rounded-[36px] top-[26px] w-[1008px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
            <path d={svgPaths.p1aab1080} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[67px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[2px] pt-[20px] px-[20px] relative size-[67px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_12.49%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
            <path d={svgPaths.p2136b580} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[67px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[2px] pt-[20px] px-[20px] relative size-[67px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
            <path d={svgPaths.p3016f800} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[67px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[2px] pt-[20px] px-[20px] relative size-[67px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
            <path d={svgPaths.p140c40} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_66.67%_66.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M1.125 1.125V6.75H6.75" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[67px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[2px] pt-[20px] px-[20px] relative size-[67px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.833%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p3e296e00} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p3e296e00} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p3e296e00} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[67px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[2px] pt-[20px] px-[20px] relative size-[67px]">
        <Icon10 />
      </div>
    </div>
  );
}

function ReadingToolbar() {
  return (
    <div className="absolute bg-[#faf7f0] box-border content-stretch flex gap-[27px] h-[116px] items-center justify-center left-[364.5px] p-[2px] rounded-[27px] top-[789.56px] w-[519px]" data-name="ReadingToolbar">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[27px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[942px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[942px] overflow-clip relative rounded-[inherit] w-full">
        <Container3 />
        <ReadingToolbar />
      </div>
    </div>
  );
}

export default function DyslexiaReadingAppDetail() {
  return (
    <div className="bg-[#fff8e7] content-stretch flex items-start relative size-full" data-name="Dyslexia Reading App Detail">
      <Sidebar />
      <MainContent />
    </div>
  );
}