import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRowAction } from "../redux/actions/tableActions";

function TableBodyContent({ r, c }) {
  const dispatch = useDispatch();
  const deleteRowHandler = useSelector((state) => state.table.deleteRowHandler);
  const handleClickIcon = () => {
    if (c.isDeleteIcon) {
      deleteRowHandler(r);
      dispatch(deleteRowAction(r));
      return;
    }
  };

  return (
    !c.isImage &&
    !c.isBtn &&
    (!c.icon ? (
      <span>{r[c.path]}</span>
    ) : (
      <div className="table-icon-conatiner">
        <div className="icon-container" onClick={handleClickIcon}>
          {c.icon}
        </div>
      </div>
    ))
  );
}

export default TableBodyContent;
