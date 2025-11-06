import svgPaths from "./svg-5gav2b48w6";

function Icon() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p10a9e180} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p17df6a80} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#ffe8cc] relative rounded-[3.35544e+07px] shrink-0 size-[72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[72px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lexend:Medium',sans-serif] font-medium leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Sam Anderson</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#666666] text-[16px] text-nowrap top-0 tracking-[0.32px] whitespace-pre">Level 3</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[51px] relative shrink-0 w-[135.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[51px] items-start relative w-[135.219px]">
        <Heading3 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[18px] h-[72px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[128px] items-start left-0 pb-[2px] pt-[27px] px-[27px] top-0 w-[322px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8dcc8] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[31.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2e361800} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d={svgPaths.p284f3740} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[67.5px] items-center left-0 pl-[22.5px] pr-0 py-0 rounded-[18px] top-0 w-[286px]" data-name="Button">
      <Icon1 />
      <Text />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[67.5px] relative shrink-0 w-full" data-name="List Item">
      <Button />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[31.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M15.75 9.1875V27.5625" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d={svgPaths.p2c4a5900} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[67.5px] items-center left-0 pl-[22.5px] pr-0 py-0 rounded-[18px] top-0 w-[286px]" data-name="Button">
      <Icon2 />
      <Text1 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[67.5px] relative shrink-0 w-full" data-name="List Item">
      <Button1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[31.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M15.75 24.9375V28.875" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d={svgPaths.p2e989680} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d={svgPaths.p48bb9f0} id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[67.5px] items-center left-0 pl-[22.5px] pr-0 py-0 rounded-[18px] top-0 w-[286px]" data-name="Button">
      <Icon3 />
      <Text2 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[67.5px] relative shrink-0 w-full" data-name="List Item">
      <Button2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[31.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M21 7.875L26.25 26.25" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d="M15.75 7.875V26.25" id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d="M10.5 10.5V26.25" id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d="M5.25 5.25V26.25" id="Vector_4" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[65.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[65.625px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#111111] text-[18px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Library</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#ffe8cc] box-border content-stretch flex gap-[18px] h-[67.5px] items-center left-0 pl-[22.5px] pr-0 py-0 rounded-[18px] top-0 w-[286px]" data-name="Button">
      <Icon4 />
      <Text3 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[67.5px] relative shrink-0 w-full" data-name="List Item">
      <Button3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[31.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p31bc6870} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d={svgPaths.p2ad934a0} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d="M13.125 11.8125H10.5" id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d="M21 17.0625H10.5" id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d="M21 22.3125H10.5" id="Vector_5" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[67.5px] items-center left-0 pl-[22.5px] pr-0 py-0 rounded-[18px] top-0 w-[286px]" data-name="Button">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[67.5px] relative shrink-0 w-full" data-name="List Item">
      <Button4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[31.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p4d1cd00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
          <path d={svgPaths.pf66a380} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.625" />
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
    <div className="absolute box-border content-stretch flex gap-[18px] h-[67.5px] items-center left-0 pl-[22.5px] pr-0 py-0 rounded-[18px] top-0 w-[286px]" data-name="Button">
      <Icon6 />
      <Text5 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[67.5px] relative shrink-0 w-full" data-name="List Item">
      <Button5 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] h-[450px] items-start left-[18px] top-[146px] w-[286px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p553b4d0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#ffe8cc] box-border content-stretch flex items-center justify-center left-[259px] p-[2px] rounded-[3.35544e+07px] size-[45px] top-[27px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Icon7 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#fffcf2] h-[942px] left-0 top-0 w-[324px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e8dcc8] border-[0px_2px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container3 />
      <List />
      <Button6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40.5px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Lexend:Medium',sans-serif] font-medium leading-[40.5px] left-0 text-[#111111] text-[32px] text-nowrap top-0 tracking-[0.36px] whitespace-pre">Thư Viện Từ Vựng</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[13.5px] h-[41px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#fff8e7] h-[82px] left-0 rounded-[27px] top-0 w-[1014px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[82px] items-center overflow-clip pl-[72px] pr-[27px] py-[22.5px] relative rounded-[inherit] w-[1014px]">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#999999] text-[22px] text-nowrap tracking-[0.44px] whitespace-pre">Tìm từ trong thư viện...</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[27px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[27px] size-[27px] top-[27.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">
          <path d={svgPaths.p1baf2e80} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p5c3bc00} id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#111111] text-[32px] text-nowrap top-0 tracking-[0.48px] whitespace-pre">Hôm nay</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[116.5px] text-[#111111] text-[32px] text-center top-[50.59px] tracking-[0.64px] translate-x-[-50%] w-[233px]">bươm bướm</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p1a0f8580} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[240px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[16px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fffcf2] h-[250px] relative rounded-[18px] shrink-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph1 />
      <Button7 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[71px] text-[#111111] text-[32px] text-center top-[-1px] tracking-[0.64px] translate-x-[-50%] w-[79px]">vườn hoa</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p1a0f8580} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[240px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[16px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#fffcf2] h-[250px] relative rounded-[18px] shrink-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph2 />
      <Button8 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[31.64px] top-[79.2px] w-[136.719px]" data-name="Paragraph">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] relative shrink-0 text-[#111111] text-[32px] text-center text-nowrap tracking-[0.64px] whitespace-pre">màu sắc</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p1a0f8580} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[240px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[16px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#fffcf2] h-[250px] relative rounded-[18px] shrink-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph3 />
      <Button9 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[58px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] h-[322px] items-start relative shrink-0 w-[1014px]" data-name="Container">
      <Heading2 />
      <Container9 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#111111] text-[32px] text-nowrap top-0 tracking-[0.48px] whitespace-pre">Hôm qua</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[34.02px] top-[79.2px] w-[131.953px]" data-name="Paragraph">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] relative shrink-0 text-[#111111] text-[32px] text-center text-nowrap tracking-[0.64px] whitespace-pre">gia đình</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[240px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[16px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fffcf2] h-[250px] relative rounded-[18px] shrink-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph4 />
      <Button10 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[71.48px] text-[#111111] text-[32px] text-center top-[-1px] tracking-[0.64px] translate-x-[-50%] w-[115px]">yêu thương</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[240px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[16px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="[grid-area:1_/_2] bg-[#fffcf2] h-[250px] relative rounded-[18px] shrink-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph5 />
      <Button11 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[71.27px] text-[#111111] text-[32px] text-center top-[-1px] tracking-[0.64px] translate-x-[-50%] w-[89px]">chăm sóc</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[240px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[16px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_3] bg-[#fffcf2] h-[250px] relative rounded-[18px] shrink-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph6 />
      <Button12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-[53px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(8,_minmax(0px,_1fr))] h-[1744px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] h-[508px] items-start relative shrink-0 w-[1014px]" data-name="Container">
      <Heading4 />
      <Container14 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#111111] text-[24px] text-nowrap top-0 tracking-[0.48px] whitespace-pre">30/10/2025</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[71.33px] text-[#111111] text-[32px] text-center top-[-1px] tracking-[0.64px] translate-x-[-50%] w-[83px]">động vật</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[135px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[20px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#fffcf2] left-0 rounded-[18px] size-[200px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph7 />
      <Button13 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[53.73px] top-[79.2px] w-[92.531px]" data-name="Paragraph">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] relative shrink-0 text-[#111111] text-[32px] text-center text-nowrap tracking-[0.64px] whitespace-pre">thú vị</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[135px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[20px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#fffcf2] left-[353px] rounded-[18px] size-[200px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph8 />
      <Button14 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[40.64px] top-[79.2px] w-[118.703px]" data-name="Paragraph">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] relative shrink-0 text-[#111111] text-[32px] text-center text-nowrap tracking-[0.64px] whitespace-pre">học hỏi</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[135px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[20px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#fffcf2] left-[706px] rounded-[18px] size-[200px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph9 />
      <Button15 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] h-[272px] items-start relative shrink-0 w-[1014px]" data-name="Container">
      <Heading5 />
      <Container19 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#111111] text-[24px] text-nowrap top-0 tracking-[0.48px] whitespace-pre">29/10/2025</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[71.31px] text-[#111111] text-[32px] text-center top-[-1px] tracking-[0.64px] translate-x-[-50%] w-[90px]">khám phá</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[135px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[20px]" data-name="Button">
      <Icon18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#fffcf2] left-0 rounded-[18px] size-[200px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph10 />
      <Button16 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[71.27px] text-[#111111] text-[32px] text-center top-[-1px] tracking-[0.64px] translate-x-[-50%] w-[90px]">phiêu lưu</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[135px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[20px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#fffcf2] left-[353px] rounded-[18px] size-[200px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph11 />
      <Button17 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[83.188px] left-[29px] top-[58.41px] w-[142px]" data-name="Paragraph">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[41.6px] left-[71.41px] text-[#111111] text-[32px] text-center top-[-1px] tracking-[0.64px] translate-x-[-50%] w-[85px]">tuyệt vời</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Icon">
          <path d={svgPaths.p3c3faff0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p8a5a680} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p2f3abf00} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[135px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[45px] top-[20px]" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#fffcf2] left-[706px] rounded-[18px] size-[200px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Paragraph12 />
      <Button18 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] h-[272px] items-start relative shrink-0 w-[1014px]" data-name="Container">
      <Heading6 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container15 />
      <Container20 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[2095px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[35px] h-[2095px] items-start pb-0 pl-[54px] pr-[144px] pt-[54px] relative w-full">
          <Container4 />
          <Container5 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[942px] items-start left-[324px] overflow-clip pl-0 pr-[15px] py-0 top-0 w-[1227px]" data-name="Main Content">
      <Container27 />
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">Ă</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">Â</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">B</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">C</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">D</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">Đ</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">E</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">Ê</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">G</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">H</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">I</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-[#fffcf2] h-[49.5px] opacity-[0.36] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49.5px] items-center justify-center p-[2px] relative w-full">
        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">I</p>
      </div>
    </div>
  );
}

function LibraryPage() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] h-[833px] items-start left-[1455px] top-[128px] w-[81px]" data-name="LibraryPage">
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
    </div>
  );
}

function LibraryPage1() {
  return (
    <div className="absolute bg-[#fff8e7] h-[942px] left-0 top-0 w-[1576px]" data-name="LibraryPage">
      <Sidebar />
      <MainContent />
      <LibraryPage />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d="M7.5 18H28.5" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M18 7.5V28.5" id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function LibraryPage2() {
  return (
    <div className="absolute bg-[#d4e7f5] box-border content-stretch flex items-center justify-center left-[1460px] rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[72px] top-[851px]" data-name="LibraryPage">
      <Icon21 />
    </div>
  );
}

export default function DyslexiaReadingAppDashboard() {
  return (
    <div className="bg-[#fff8e7] relative size-full" data-name="Dyslexia Reading App Dashboard">
      <LibraryPage1 />
      <LibraryPage2 />
    </div>
  );
}