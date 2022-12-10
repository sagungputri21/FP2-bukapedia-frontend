import React from "react";
import Table from "react-bootstrap/Table";

const CustomTable = ({ header, children }) => {
  return (
    <div className="table-responsive">
      <Table striped variant="dark">
        <thead className="thead-style">
          <tr>
            {header.map((header) => (
                <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
