import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import formatMoney from "../lib/formatMoney";

const CartItemStyles = styled.li``;

const CartItem = props => (
  <CartItemStyles>
    <img src={props.cartItem.item.image} alt="" />
  </CartItemStyles>
);

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
