import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Title = styled(Typography)({
  fontSize: 26,
  fontWeight: 600,
  color: "#000000",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  flexBasis: "100%",
  justifyContent: "center",
  marginBottom: 0,
});
export const CartDiv = styled('div')({
  minHeight: 348,
  background: "#F6F6F6",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: 30,
  paddingBottom: 74,
  "& .imgProduct": {
    width: 80,
    height: 80,
  },
  "& .valueInformation": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  "& .spaceCart": {
    display: "flex",
    justifyContent: "flex-start",
  },
  "& .spaceCart2": {
    display: "flex",
    justifyContent: "flex-end",
  },
  "& .valueTotal": {
    marginTop: 10,
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
export const PurchaseValue = styled('div')({
  width: 320,
  height: 100,
  background: "#FFFFFF",
  borderRadius: 5,
  padding: 15,
  marginTop: 10,
});
export const ButtonPurchase = styled('button')({
  width: 350,
  marginTop: 5,
  height: 50,
  padding: 10,
  borderRadius: 5,
  color: "#FFFFFF",
  background: "#89D963",
  border: "none",
});
export const TextCart = styled(Typography)({
  fontSize: 14,
  fontWeight: 300,
  display: "flex",
  color: "#1A1A1A",
});
export const ValueCart = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  color: "#000000",
  
});
