import React from "react";
import Table from "react-bootstrap/Table";
import "../../styles/update-stock.css";
import InputStock from "../custom/InputStock";

const UpdateTable = ({ header, product, value, onChange, action }) => {
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
                <td className=".mr-3">{data.id}</td>
                <td>
                  <img
                    src={data.image}
                    alt="product-img"
                    id="img-product"
                    className="mx-auto bg-white"
                  />
                </td>
                <td className="product-info">
                  <h5 className="product-title">{data.title}</h5>
                  <p className="category-stock">{data.category}</p>
                </td>
                {/* <td>{updateButton}</td> */}
                <td>
                  <InputStock
                    value={value.find((item) => item.id === data?.id).qty}
                    onChange={onChange}
                    action={action}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UpdateTable;
