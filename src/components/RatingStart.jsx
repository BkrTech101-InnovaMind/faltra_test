import { Rating } from "@material-tailwind/react";
import React from "react";

export default function RatingStart({ rateVal }) {
  return <Rating value={rateVal} readonly />;
}
