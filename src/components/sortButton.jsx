import React from "react";
import { Dropdown } from "react-bootstrap";

function SortButton() {
  return (
    <Dropdown className="mt-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Descending</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortButton;
