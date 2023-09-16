import React from "react";
import TableHead from "../TableHead";
import TableRows from "../TableRows";
import "../../styles/table.css";
import { useSelector } from "react-redux";
function Table({ cols, rows }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  return (
    <table style={isArabic ? { direction: "rtl" } : {}}>
      <TableHead {...{ cols }} />
      <TableRows {...{ cols, rows }} />
    </table>
  );
}

export default Table;
