import React from "react";

const ListItem = props => {
  const { id, description, person } = props;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center app-list">
      <span>
        <strong>To:</strong> {person} - <strong>Gift:</strong> {description}
      </span>
      <span className="badge badge-primary badge-pill">{id}</span>
      <i
        className="fa fa-trash"
        aria-hidden="true"
        onClick={() => props.onDeleteItem(id)}
      ></i>
    </li>
  );
};
export default ListItem;
