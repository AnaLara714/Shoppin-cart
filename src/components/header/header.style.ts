import * as React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const BoxDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center"
});
export const HeaderDiv = styled('div')({
  height: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  "& .product": {
    marginRight: 36,
    marginLeft: 36,
  },
  "& .cart": {
    height: 32,
    width: 30,
    marginRight: 7.5,
    marginLeft: 30,
  },
  "& .photoUser": {
    width: 64,
    height: 64,
  },
});
export const TextHeader = styled(Typography)({
  fontSize: 12,
  fontWeight: 600,
  lineHeight: ("19px"),
  color: "#000000",
});
export const ImgLogo = styled("image")({
  width: 144.28,
  height: 65.41,
});
export const ImgUser = styled("image")({
  
});
export const NumberCart = styled(Typography)({
  fontSize: 16,
  marginRight: 15,
});
