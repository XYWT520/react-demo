import React from 'react'

const Son = (props) => {
  return (
    <div>
      <h1>
        接收父亲给的车子: {props.car}, 给你的老婆: {props.obj.name}
        <button onClick={props.onClickAddMoney}>赚钱</button>
      </h1>
    </div>
  )
}

export default Son