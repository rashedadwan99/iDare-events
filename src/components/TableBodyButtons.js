import React from "react";
import Button from "./common/Button";
function TableBodyButtons({ r, c }) {
  return c.isBtn && <Button label={c.label} variant={c.variant} />;
}

export default TableBodyButtons;
