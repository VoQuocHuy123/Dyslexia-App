import svgPaths from "./svg-jkvvruu31p";
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
          <path d={svgPaths.p10770780} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p3852bb00} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[53.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[53.344px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ffe8cc] box-border content-stretch flex gap-[18px] h-[63px] items-center left-[13.5px] pl-[18px] pr-0 py-0 rounded-[18px] top-0 w-[260px]" data-name="Button">
      <Icon />
      <Text />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d="M13.5 7.875V23.625" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p1d49ee00} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[75.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[75.422px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#333333] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Reading</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[18px] h-[63px] items-center left-[13.5px] pl-[18px] pr-0 py-0 rounded-[18px] top-[71px] w-[260px]" data-name="Button">
      <Icon1 />
      <Text1 />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[63px] items-center left-[13.5px] pl-[18px] pr-0 py-0 rounded-[18px] top-[142px] w-[260px]" data-name="Button">
      <Icon2 />
      <Text2 />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[63px] items-center left-[13.5px] pl-[18px] pr-0 py-0 rounded-[18px] top-[213px] w-[260px]" data-name="Button">
      <Icon3 />
      <Text3 />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[63px] items-center left-[13.5px] pl-[18px] pr-0 py-0 rounded-[18px] top-[284px] w-[260px]" data-name="Button">
      <Icon4 />
      <Text4 />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[63px] items-center left-[13.5px] pl-[18px] pr-0 py-0 rounded-[18px] top-[355px] w-[260px]" data-name="Button">
      <Icon5 />
      <Text5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[825px] left-0 top-[117px] w-[287px]" data-name="Navigation">
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

function Heading1() {
  return (
    <div className="h-[40.5px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Lexend:Medium',sans-serif] font-medium leading-[40.5px] left-0 text-[#111111] text-[27px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Welcome Back!</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d="M18 28.5V33" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p785fd00} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.pab21cf0} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#ffe8cc] content-stretch flex items-center justify-center left-0 rounded-[18px] size-[72px] top-0" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[27px] left-0 top-[94.5px] w-[453.5px]" data-name="Heading 2">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Practice Speaking</p>
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="absolute h-[135px] left-[47px] top-[47px] w-[453.5px]" data-name="DashboardCard">
      <Container2 />
      <Heading2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#111111] h-[40.703px] opacity-[0.538] relative rounded-[3.35544e+07px] shrink-0 w-[13.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40.703px] w-[13.5px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#111111] h-[73.969px] opacity-[0.508] relative rounded-[3.35544e+07px] shrink-0 w-[13.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[73.969px] w-[13.5px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#111111] h-[53.266px] opacity-50 relative rounded-[3.35544e+07px] shrink-0 w-[13.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[53.266px] w-[13.5px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#111111] h-[76.813px] opacity-[0.513] relative rounded-[3.35544e+07px] shrink-0 w-[13.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[76.813px] w-[13.5px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 bg-[#111111] grow h-[38.75px] min-h-px min-w-px opacity-[0.549] relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38.75px] w-full" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[76.813px] relative shrink-0 w-[121.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[13.5px] h-[76.813px] items-center relative w-[121.5px]">
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#ffe8cc] box-border content-stretch flex h-[212px] items-center justify-center left-[46.5px] p-[2px] rounded-[27px] top-[182.5px] w-[454px]" data-name="App">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[27px]" />
      <Container8 />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_2] bg-[#fffcf2] h-[432px] relative rounded-[36px] shrink-0 w-[547.5px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <DashboardCard />
      <App />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d="M18 10.5V31.5" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p2a984c00} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#ffe8cc] content-stretch flex items-center justify-center left-0 rounded-[18px] size-[72px] top-0" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[27px] left-0 top-[94.5px] w-[453.5px]" data-name="Heading 2">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Read Again</p>
    </div>
  );
}

function DashboardCard1() {
  return (
    <div className="absolute h-[135px] left-[47px] top-[47px] w-[453.5px]" data-name="DashboardCard">
      <Container9 />
      <Heading3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[108px] left-[29px] overflow-clip top-[29px] w-[395.5px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#111111] text-[18px] top-[-1px] tracking-[0.36px] w-[394px]">The butterfly landed gently on the colorful flower. Its wings were bright orange and black...</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[27px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-full">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d="M4.6875 11.25H17.8125" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p9273580} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex gap-[13.5px] h-[27px] items-center left-[29px] top-[159.5px] w-[116.953px]" data-name="Button">
      <Text6 />
      <Icon8 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[#fff4e0] h-[215.5px] left-[47px] rounded-[27px] top-[182.5px] w-[453.5px]" data-name="App">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[27px]" />
      <Paragraph2 />
      <Button6 />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fffcf2] h-[432px] relative rounded-[36px] shrink-0 w-[547.5px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <DashboardCard1 />
      <App1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-[45px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[432px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[33.75px] relative shrink-0 w-[131.031px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33.75px] relative w-[131.031px]">
        <p className="absolute font-['Lexend:Medium',sans-serif] font-medium leading-[33.75px] left-0 text-[#111111] text-[22.5px] text-nowrap top-[-1px] tracking-[0.36px] whitespace-pre">New Words</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[27px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-full">
        <p className="absolute font-['Lexend:Medium',sans-serif] font-medium leading-[27px] left-[-31.44px] text-[#111111] text-[26px] text-nowrap top-[-0.88px] tracking-[0.36px] whitespace-pre">View all</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d="M4.6875 11.25H17.8125" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p9273580} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[27px] relative shrink-0 w-[108.562px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[13.5px] h-[27px] items-center relative w-[108.562px]">
        <Text7 />
        <Icon9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[33.75px] items-center justify-between left-0 top-0 w-[1140px]" data-name="Container">
      <Heading4 />
      <Button7 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[26px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">butterfly</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#555555] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">an insect with wings</p>
    </div>
  );
}

function WordChip() {
  return (
    <div className="bg-[#fffcf2] h-[182px] relative rounded-[27px] shrink-0 w-[360px]" data-name="WordChip">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[27px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[9px] h-[182px] items-start pb-[2px] pt-[33.5px] px-[42.5px] relative w-[360px]">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[26px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">gentle</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#555555] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">soft and careful</p>
    </div>
  );
}

function WordChip1() {
  return (
    <div className="bg-[#fffcf2] h-[182px] relative rounded-[27px] shrink-0 w-[360px]" data-name="WordChip">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[27px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[9px] h-[182px] items-start pb-[2px] pt-[33.5px] px-[42.5px] relative w-[360px]">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[26px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">colorful</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#555555] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">having many colors</p>
    </div>
  );
}

function WordChip2() {
  return (
    <div className="bg-[#fffcf2] h-[182px] relative rounded-[27px] shrink-0 w-[360px]" data-name="WordChip">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[27px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[9px] h-[182px] items-start pb-[2px] pt-[33.5px] px-[42.5px] relative w-[360px]">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[27px] h-[182px] items-start left-0 overflow-clip top-[69.5px] w-[1140px]" data-name="Container">
      <WordChip />
      <WordChip1 />
      <WordChip2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[960.25px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[54px] h-[960.25px] items-start pb-0 pt-[54px] px-[54px] relative w-full">
          <Heading1 />
          <Container10 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[942px] relative shrink-0 w-[1263px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[942px] items-start overflow-clip pb-0 pl-0 pr-[15px] relative rounded-[inherit] w-[1263px]">
        <Container14 />
      </div>
    </div>
  );
}

export default function DyslexiaHomeAppDashboard() {
  return (
    <div className="bg-[#fff8e7] content-stretch flex items-start relative size-full" data-name="Dyslexia Home App Dashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
}