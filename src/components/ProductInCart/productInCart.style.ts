import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Product = styled('div')({
  minwidth: 450,
  height: 80,
  display: "flex",
  justifyContent: "flex-start",
  background: "#FFFFFF",
  borderRadius: 5,
  padding: 10,
  marginRight: 20,
  marginTop: 10,
  "& .priceUND": {
    marginLeft: 5,
    width: 100,
  },
  "& .imgProduct": {
    marginRight: 10,
  },
  "& .LessAmount": {
    marginLeft: 10,
    marginRight: 10,
  },
  "& .Trash": {
    marginLeft: 100,
    width: 20,
    height: 20,
    marginTop: 3,
  },
  "& .MoreAmount": {
    marginRight: 15,
  },
});
export const InLine = styled('div')({
  display: "flex",
  flexDirection: "row",
});
export const InColumn  = styled('div')({
  display: "flex",
  flexDirection: "column",
});
export const Name = styled(Typography)({
  fontSize: 16,
  fontWeight: 600,
  color: "#000000",
});
export const Price = styled(Typography)({
  fontSize: 14,
  fontWeight: 300,
  color: "#1f1f2e",
});
export const Quantity = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: "#000000",
});
export const ButtonAmount = styled('button')({
  position: "relative",
  width: 25,
  height: 25,
  border: 0,
  borderRadius: 5,
  fontSize: 18,
  background: "#cc0000",
  color: "#FFFFFF",
});