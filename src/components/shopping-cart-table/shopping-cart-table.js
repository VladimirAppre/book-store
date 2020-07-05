import React from 'react';
import {connect} from 'react-redux'
import './shopping-cart-table.css';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, index) => {
    const {id, name, count, total} = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{total} ₽</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"/>
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle"/>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle"/>
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Ваш заказ</h2>
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Товар</th>
          <th>Количество</th>
          <th>Цена</th>
          <th>Действие</th>
        </tr>
        </thead>

        <tbody>
        {
          items.map(renderRow)
        }
        </tbody>
      </table>

      <div className="total">
        Итого: {total} ₽
      </div>
    </div>
  );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease : (id) => {
      console.log(`Increase ${id}`)
    },

    onDecrease: (id) => {
      console.log(`inDecrease ${id}`)
    },

    onDelete: (id) => {
      console.log(`onDelete ${id}`)
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable) ;
