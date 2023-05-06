import React from 'react'
import './index.scss'
export default function GoodsItem ({ list,onChangeInput }) {
  return (
    list.map(item => (<div className="my-goods-item" key={item.id}>
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id='input' checked={item.goods_state} onChange={(e) => onChangeInput(e, item.id)} />
          <label className="custom-control-label" htmlFor={item}>
            <img
              src={item.goods_img}
            />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{item.goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {item.goods_price}</span>
          <span>{item.goods_count}</span>
        </div>
      </div>
    </div>))
  )
}
