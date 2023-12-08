import { TitleForm } from "./_components/title-form";

const CratePage = () => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center gap-y-2">
      <TitleForm />
      <p className="text-muted-foreground text-sm">Do not worry. You can change it later</p>
    </div>
  );
};

export default CratePage;
