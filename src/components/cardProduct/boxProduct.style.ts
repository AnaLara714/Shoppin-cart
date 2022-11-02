import * as React from "react";
import { styled  } from "@mui/system";
import { Typography } from "@mui/material";

export const BoxDiv = styled('div')({
  minHeight: 336,
  width: 259,
  borderRadius: 5,
  padding: 15,
  background: "#FFFFFF",
  "& .colorOptions": {
    marginTop: 5,
    width: 15,
    height: 16,
  },
  "& .BallPurple": {
    marginLeft: 5,
    marginRight: 5,
  },
  "& .ImgProduct": {
    width: 230,
    height: 220,
  },
});

export const Img = styled("image")({
  display: "flex",
  justifyContent: "center",
}); 

export const Name = styled(Typography)({
  fontSize: 20,
  marginTop: 14,
  fontWeight: 600,
  color: "#000000",
  lineHeight: "29px",
});

export const Description = styled(Typography)({
  fontSize: 10,
  fontWeight: 500,
  marginTop: 24,
  width: 244,
  lineHeight: "17px",
  color: "#272727",
});

export const Price = styled(Typography)({
  fontSize: 20,
  fontWeight: 500,
  marginTop: 24,
  lineHeight: "29px",
  color: "#000000",
});

export const InLine = styled('div')({
  display: "flex",
  flexDirection: "row",
});

export const ColorText = styled(Typography)({
  marginTop: 24,
  fontSize: 14,
  fontWeight: 400,
  color: "#9D9D9D",
  lineHeight: "19.36px",
});

export const AddCart = styled('button')({
  width: 178,
  height: 51,
  padding: 0,
  marginTop: 24,
  marginLeft: 44,
  borderRadius: 5,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: "19px",
  background: "#89D963",
  border: "none",
  color: "#FFFFFF",
});