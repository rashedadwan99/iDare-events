import React from "react";
import TableHead from "../TableHead";
import TableRows from "../TableRows";
import { isArabic } from "../../locales/language";
import "../../styles/table.css";
function Table({ cols, rows }) {
  return (
    <table style={isArabic() ? { direction: "rtl" } : {}}>
      <TableHead {...{ cols }} />
      <TableRows {...{ cols, rows }} />
    </table>
  );
}

export default Table;
