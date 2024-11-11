import { Link } from "react-router-dom";

type SelectionPageBtnProps = {
  iconTXT: string;
  title: string;
  url: string;
};

export default function SelectionPageBtn({
  iconTXT,
  title,
  url,
}: SelectionPageBtnProps) {
  return (
    <Link to={url}>
      <div className="text-brownKRN text-3xl border-3 border-brownKRN rounded-md py-2 max-w-md mx-auto px-8">
        <span className="pr-12">{iconTXT}</span>
        <span className="font-medium">{title}</span>
      </div>
    </Link>
  );
}
