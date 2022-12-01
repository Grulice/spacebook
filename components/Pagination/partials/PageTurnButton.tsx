import React from "react";
import { TCommonButtonProps } from "../types";
import { PageButton } from "./PageButton";

interface IProps extends TCommonButtonProps {
  direction: "next" | "previous";
}

export const PageTurnButton: React.FC<IProps> = ({
  direction,
  ...buttonProps
}) => {
  return (
    <PageButton {...buttonProps}>
      {direction === "next" ? <>&rarr;</> : <>&larr;</>}
    </PageButton>
  );
};
