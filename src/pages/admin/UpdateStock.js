import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputStock from '../../components/custom/InputStock';
import CustomTable from '../../components/table/CustomTable';
import { getProductsStock, setStock, updateStock } from '../../features/admin/stockSlice';

const UpdateStockPage = () => {
  const dispatch = useDispatch();
  const { product, stock } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(getProductsStock())
  }, [dispatch])

  //change on value when input/update stock
  const changeStockValue = (e) => {
    dispatch(setStock(e.target.value))
  }
  // handle update action on update button
  const handleUpdate = (id) => {
    dispatch(updateStock({id, stock}))
  }

  return (
    <div>
      
      <CustomTable 
        header={['ID', 'Image', 'Product Name', 'Update Stock']}
        children={
          <tr>
            {product?.map((product) => (
              <>
              <td>{product?.id}</td>
              <td>
                <img src={product?.image} alt="product-img" className=""/>
              </td>
              <td>
                <h3>{product?.title}</h3>
                <p>{product?.category}</p>
              </td>
              <td>
                <InputStock 
                  value={
                    JSON.parse(localStorage.getItem('stock'))?.find((item) => item.id === product?.id)?.stock || 20
                  }
                  onChange={changeStockValue}
                  action={handleUpdate(product?.id)}
                />
              </td>
              </>
            ))}
          </tr>
        }
      />
    </div>
  )
}

export default UpdateStockPage;