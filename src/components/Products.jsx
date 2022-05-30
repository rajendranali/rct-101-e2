import React, { useEffect, useState } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import AddProduct from './AddProduct'
import Pagination from './Pagination'
import axios from 'axios'
import Product from './Product'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />
  // const Grid = () => <div />
  const [products, Getproduct] = useState([])
  const [carddata, setCarddata] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(3)

  useEffect(() => {
    const getata = async () => {
      axios.get(`http://localhost:8080/products`).then((r) => {
        Getproduct(r.data)
      })
    }
    getata()
  }, [])
  const postData = async () => {
    let res = await fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
    })

    let data = await res.json()
    setFormData(data)
  }

  return (
    <Flex gap="200px" flexDirection="row">
      {/* AddProduct */}
      <AddProduct postData={postData} />
      <Grid>
        {/* List of Products */}
        {products.map((item) => {
          return <Product key={item.id} item={item} />
        })}
      </Grid>
      {/* Pagination */}
      <Pagination
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
      />
    </Flex>
  )
}

export default Products
