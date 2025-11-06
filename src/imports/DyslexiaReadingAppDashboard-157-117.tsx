import svgPaths from "./svg-3zpfms6l7d";

function Icon() {
  return (
    <div className="absolute left-[36px] size-[72px] top-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="Icon">
          <path d="M36 21V63" id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          <path d={svgPaths.p2a107470} id="Vector_2" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#ffe8cc] left-[306px] rounded-[32px] size-[144px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[62.391px] left-0 top-[180px] w-[756px]" data-name="Heading 1">
      <p className="absolute font-['Lexend:Medium',sans-serif] font-medium leading-[62.4px] left-[378.34px] text-[#111111] text-[48px] text-center text-nowrap top-0 tracking-[5.76px] translate-x-[-50%] whitespace-pre">Reading App</p>
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[42px] left-0 top-[260.39px] w-[756px]" data-name="Paragraph" />;
}

function Container1() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[97px] left-[calc(50%+0.5px)] rounded-[27px] top-[479px] translate-x-[-50%] w-[480px]" data-name="Button">
      <div className="h-[97px] overflow-clip relative rounded-[inherit] w-[480px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[normal] left-1/2 text-[#999999] text-[40px] text-center text-nowrap top-[calc(50%-24.5px)] tracking-[3.12px] translate-x-[-50%] whitespace-pre">Đăng Nhập</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[27px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[97px] left-[calc(50%+0.5px)] rounded-[27px] top-[600px] translate-x-[-50%] w-[480px]" data-name="Button">
      <div className="h-[97px] overflow-clip relative rounded-[inherit] w-[480px]">
        <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[normal] left-1/2 text-[#999999] text-[40px] text-center text-nowrap top-[calc(50%-24.5px)] tracking-[3.12px] translate-x-[-50%] whitespace-pre">Đăng Ký</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[27px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#111111] text-[42px] text-nowrap top-[-1px] tracking-[3.36px] whitespace-pre">Tên đăng nhập</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#fff8e7] h-[97px] relative rounded-[27px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[97px] items-center px-[36px] py-[27px] relative w-full">
          <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#999999] text-[26px] text-nowrap tracking-[3.12px] whitespace-pre">Nhập tên của bạn</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[27px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[157px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[42px] left-0 text-[#111111] text-[42px] text-nowrap top-[-1px] tracking-[3.36px] whitespace-pre">Mật khẩu</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="bg-[#fff8e7] h-[97px] relative rounded-[27px] shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[97px] items-center px-[36px] py-[27px] relative w-full">
          <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#999999] text-[26px] text-nowrap tracking-[3.12px] whitespace-pre">Nhập mật khẩu</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0dccc] border-solid inset-0 pointer-events-none rounded-[27px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[157px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <PasswordInput />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#fffcf2] box-border content-stretch flex flex-col gap-[36px] h-[455px] items-start left-[0.5px] pb-[2px] pt-[56px] px-[56px] rounded-[40.5px] top-[-0.39px] w-[777px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e8dcc8] border-solid inset-0 pointer-events-none rounded-[40.5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[703px] relative shrink-0 w-[777px]" data-name="Form">
      <Button />
      <Button1 />
      <Container4 />
    </div>
  );
}

export default function DyslexiaReadingAppDashboard() {
  return (
    <div className="bg-[#fff8e7] relative size-full" data-name="Dyslexia Reading App Dashboard">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[58px] items-center pb-0 pt-[36px] px-[411.5px] relative size-full">
          <Container1 />
          <Form />
        </div>
      </div>
    </div>
  );
}