import React from "react";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  //update cart
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    });
  };

  const { Meta } = Card;
  return (
    <div>
      <Card
        style={{ width: 220, marginBottom: 20 }}
        cover={<img alt={item.name} src={item.image} style={{ height: 200 }} />}
      >
        <Meta title={item.name} />
        <p className="text-center text-muted pt-1">Rp.{item.price}</p>

        <div className="item-button">
          <Button onClick={() => handleAddToCart()}>Add to cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemList;
