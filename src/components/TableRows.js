import React from "react";
import { getImageSrc } from "../services/imageServices";
import HandleTimeComponent from "./HandleTimeComponent";

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
                    <div>{row[col.path]}</div>
                  </td>
                );
              if (col.isTime) {
                return (
                  <td key={col.label}>
                    <HandleTimeComponent data={row} />
                  </td>
                );
              }
              if (col.dataPath) {
                return (
                  <td key={col.label}>{col.getRowData(row[col.dataPath])}</td>
                );
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableRows;
