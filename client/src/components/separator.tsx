import { FC } from "react";

interface SeparatorProps {
  className?: string;
}

const Separator: FC<SeparatorProps> = ({ className = "border-t border-gray-200 my-4" }) => (
  <hr className={className} />
);

export default Separator;
