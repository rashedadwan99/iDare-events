import React from "react";
import { headerEventStyle } from "../styles/eventStyles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function TableHead({ cols }) {
  const { id } = useParams();
  const upcomingEvents = useSelector((state) => state.events.upcomingEvents);
  const event = upcomingEvents.find((e) => e.id === parseInt(id));
  return (
    <thead style={headerEventStyle(event)}>
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
