import { Link } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon";

export default function HomeBtn() {
  return (
    <Link
      to={"/practice-korean/"}
      className="border-3 border-brownKRN rounded-md hover:bg-brownKRN transition-colors p-1 hover:text-whiteKRN"
    >
      <HomeIcon />
    </Link>
  );
}
