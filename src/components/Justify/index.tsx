import * as React from "react";
import { styled } from "typestyle-react";

// https://github.com/Microsoft/TypeScript/issues/5711
React;

export interface Props {
  alignItems?: "flex-start" | "flex-end" | "baseline" | "center" | "stretch";
  layout?: "row" | "column";
}

const DEFAULT_LAYOUT = "row";
const DEFAULT_ALIGN_ITEMS = "center";

export const Justify = styled("div", ({ alignItems = DEFAULT_ALIGN_ITEMS, layout = DEFAULT_LAYOUT }: Props) => ({
  alignItems: alignItems,
  display: "flex",
  flexDirection: layout,
  justifyContent: "space-between"
}));
