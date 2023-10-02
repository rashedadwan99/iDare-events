import React from "react";
import { headerEventStyle } from "../styles/eventStyles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function TableHead({ cols }) {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  return (
    <thead style={event && headerEventStyle(event)}>
      <tr>
        {cols.map((col) => (
          <th key={col.label}>
            <span>{col.label}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
