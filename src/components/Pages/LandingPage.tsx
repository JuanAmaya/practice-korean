import SelectionPageBtn from "../UI/SelectionPageBtn";

export default function LandingPage() {
  return (
    <div className="flex items-center flex-col m-8 pt-6 max-w-full">
      <h1 className="text-8xl font-medium text-brownKRN">안녕</h1>
      <div className="pt-24 w-full flex flex-col gap-8">
        <SelectionPageBtn
          iconTXT="ㅎ"
          title="Verbs"
          url="/practice-korean/verbs"
        />

        <SelectionPageBtn
          iconTXT="1"
          title="Pure Numbers"
          url="/practice-korean/numbers"
        />

        <SelectionPageBtn
          iconTXT="일"
          title="Week Days"
          url="/practice-korean/weekdays"
        />
      </div>
    </div>
  );
}
