import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SelectionPageBtnProps = {
  iconTXT: string;
  title: string;
  url: string;
  delay: number;
};

export default function SelectionPageBtn({
  iconTXT,
  title,
  url,
  delay,
}: SelectionPageBtnProps) {
  return (
    <Link to={url}>
      <motion.div
        className="text-brownKRN text-3xl border-3 border-brownKRN rounded-md py-2 max-w-md mx-auto px-8 transition-colors hover:bg-brownKRN hover:text-whiteKRN"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: delay * 0.1 }}
      >
        <span className="pr-12">{iconTXT}</span>
        <span className="font-medium">{title}</span>
      </motion.div>
    </Link>
  );
}
