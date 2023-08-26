import React from "react";
import { getImageSrc } from "../services/imageServices";

function TableRows({ rows, cols }) {
  return (
    <tbody>
      {rows.map((row, i) => {
        return (
          <tr key={i}>
            {cols.map((col) => {
              if (col.path)
                return (
                  <td key={col.label}>
                    {col.isImg && (
                      <img src={getImageSrc(row[col.src])} alt="" />
                    )}
                    <p>{row[col.path]}</p>
                  </td>
                );
              else return;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableRows;
