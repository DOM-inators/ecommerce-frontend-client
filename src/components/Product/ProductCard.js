import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = (product) => (
  <Card className="card" key={product._id}>
    <Card.Img className="card-image" variant="top" src={product.image}/>
    <Card.Body className="card-body">
      <Card.Title className="card-title">{product.name}</Card.Title>
      <Card.Text className="card-text">
        {product.price}
      </Card.Text>
      <Button variant="primary"><Link className="button-link" to={`/products/${product.id}`}>Check out this donut</Link></Button>
    </Card.Body>
  </Card>
)

export default withRouter(ProductCard)

// "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
