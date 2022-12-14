import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputStock from "../../components/custom/InputStock";
import CustomTable from "../../components/table/CustomTable";
import UpdateTable from "../../components/table/UpdateTable";
import Container from "react-bootstrap/Container";
import {
  getProductsStock,
  setStock,
  updateStock,
} from "../../features/admin/stockSlice";

const UpdateStockPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.stock.products);
  const stock = useSelector((state) => state.stock.stock);

  useEffect(() => {
    dispatch(getProductsStock());
  }, [dispatch]);

  //change on value when input/update stock
  const changeStockValue = (e) => {
    dispatch(setStock(e.target.value))
  }
  // handle update action on update button
  const handleUpdate = (id) => {
    dispatch(updateStock({ id, stock }))
  }

  console.log("product => ", product);
  console.log("stock => ", stock);
  return (
    <Container>
    <div className="contaier-all">
      <div>
      <h2 className="text-all mb-10">Update Product Detail</h2>
      </div>
      <section>
      <UpdateTable
        header={["ID", "Image", "Product Name", "Update Stock"]}
        product={product}
        value={stock}
        onChange={changeStockValue}
        action={handleUpdate(product?.id)}
      />
      </section>
    </div>
    </Container>
  );
};

export default UpdateStockPage;
