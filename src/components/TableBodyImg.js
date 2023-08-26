import React from "react";

function TableBodyImg({ c, r }) {
  return c.isImage && <img src={r[c.path]} alt="" />;
}

export default TableBodyImg;
