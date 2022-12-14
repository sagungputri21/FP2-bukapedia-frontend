import React from 'react'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import RekapTable from '../../components/table/rekapTable';
import Table from "react-bootstrap/Table";
import "../../styles/update-stock.css"

const RekapPenjualan = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState([]);

  const getLocalItem = async () => {
    const listIdName = (localStorage.getItem('cartItems'))
    const listTotal = (localStorage.getItem('totalAmount'))
    console.log("list", listTotal)
    const arrayOfDataId = listIdName !== null? JSON.parse(listIdName) : [];
    const arrayOfDataTotal = listTotal;
    setItems([...arrayOfDataId])
    setTotal(arrayOfDataTotal)
  }

  useEffect(() => {
    getLocalItem()
  },[])

  console.log("ini get",items)
  console.log("ini total",total)

  return (
    <Container>
      <div className="contaier-all">
        <div>
          <h2 className="text-all mb-10">Rekap Penjualan</h2>
        </div>
          <section>
            <RekapTable 
              header={["Product", "Harga", "Terjual", "Pendapatan"]}
              product={items}
            />
          </section>
          <section>
            <div className="mt-24">
              <div className="table-responsive">
                <Table striped className="border-outer">
                  <tbody className="body-color">
                    <tr>
                      <td className="product-info">
                        <h5 className="product-title">TOTAL PENDAPATAN</h5>
                      </td>
                      <td className="product-info">
                        <h5 className="product-title" style={{textAlign: 'right'}}>{total}</h5> 
                      </td>
                    </tr>               
                  </tbody>
                </Table>
              </div>
            </div>
          </section>
      </div>
    </Container>
  )
}

export default RekapPenjualan;