import React from "react";
import Table from "react-bootstrap/Table";
import "../../styles/update-stock.css";
import InputStock from "../custom/InputStock";

const RekapTable = ({ header, product }) => {
  return (
    <div className="mt-24">
      <div className="table-responsive">
        <Table striped className="border-outer">
          <thead>
            <tr className="thead-style">
              {header.map((header) => (
                <th className="py-3 header-style">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="body-color">
            {product.map((data) => (
              <tr>
                <td className="product-info">
                  <h5 className="product-title">{data.title}</h5>
                </td>
                <td className="product-info">  
                  <h5 className="product-title">{data.price}</h5>
                </td>
                <td className="product-info">
                  <h5 className="product-title">{data.itemQuantity}</h5>
                </td>
                <td className="product-info">
                <h5 className="product-title">{data.priceCount}</h5>
                </td>
              </tr>
            ))}
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RekapTable;
