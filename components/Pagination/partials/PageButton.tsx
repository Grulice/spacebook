import React from "react";
import { TCommonButtonProps } from "../types";

interface IProps extends TCommonButtonProps {
  selected?: boolean;
}

export const PageButton: React.FC<IProps> = ({
  children,
  selected,
  ...rest
}) => {
  const hoverClasses = rest.disabled
    ? ""
    : "hover:transition-[border] hover:border-gray-400";

  const disabledClasses = rest.disabled
    ? "text-gray-200 border-gray-200 active:border-[unset]"
    : "";

  return (
    <button
      className={`${hoverClasses} active:border-gray-700
      ${
        selected
          ? "text-blue-500 border-blue-500 hover:border-blue-500 cursor-default active:border-[unset]"
          : ""
      } p-2 border rounded-sm min-w-min w-14 h-14  ${disabledClasses}`}
      {...rest}
    >
      {children}
    </button>
  );
};
