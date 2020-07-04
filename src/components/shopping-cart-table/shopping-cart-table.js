import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Ваш заказ</h2>
      <table className="table">
        <thead>
        <th>#</th>
        <th>Товар</th>
        <th>Количество</th>
        <th>Цена</th>
        <th>Действие</th>
        </thead>

        <tbody>
        <tr>
          <td>1</td>
          <td>Вы не знаете JS!</td>
          <td>2</td>
          <td>650 ₽</td>
          <td>
            <button className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
            </button>
            <button className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-plus-circle" />
            </button>
            <button className="btn btn-outline-warning btn-sm float-right">
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <div className="total">
        Итого: 1300 ₽
      </div>
    </div>
  );
};

export default ShoppingCartTable;
