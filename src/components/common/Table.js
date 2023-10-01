import React from "react";
import { useSelector } from "react-redux";
import { memo } from "react";
import TableHead from "../TableHead";
import TableRows from "../TableRows";
import "../../styles/table.css";
const Table = memo(function ({ cols, rows }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  return (
    <table style={isArabic ? { direction: "rtl" } : {}}>
      <TableHead {...{ cols }} />
      <TableRows {...{ cols, rows }} />
    </table>
  );
});

export default Table;
