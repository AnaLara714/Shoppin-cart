import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const DescriptionDiv = styled('div')({
  minHeight: 348,
  background: "#F6F6F6",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: 30,
  paddingBottom: 74,
  "& .imgProduct": {
    height: 250,
    marginRight: 20,
  },
});
export const InColumn  = styled('div')({
  display: "flex",
  flexDirection: "column",
});
export const Title = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
  color: "#000000",
  lineHeight: "29px",
});
export const Description = styled(Typography)({
  fontSize: 12,
  fontWeight: 300,
  marginTop: 20,
  width: 200,
  lineHeight: "17px",
  color: "#272727",
});
export const Price = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  marginTop: 30,
  lineHeight: "29px",
  color: "#000000",
});
export const AddCart = styled('button')({
  height: 51,
  marginTop: 10,
  borderRadius: 5,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: "19px",
  background: "#89D963",
  border: "none",
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const Text = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  marginTop: 30,
  display: "flex",
  justifyContent: "center",
  color: "#1A1A1A",
});