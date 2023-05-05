import { useState } from "react"
import Son from "./son"

const Parent = () => {
  const [car, setCar] = useState('柯尼塞格')
  const [obj, serObj] = useState({
    name: '冷雪瞳',
    age: '21'
  })
  const [money, setMoney] = useState(50)

  const onClickAddMoney = () => {
    setMoney(money + 1)
  }

  return (
    <>
      <h1>父组件: 儿子我给你一辆车: {car}, 给你的老婆: {obj.name}, 家产: {money} 万</h1>
      <hr />
      <h1>子组件</h1>
      <Son car={car} obj={obj} onClickAddMoney={onClickAddMoney}></Son>
    </>
  )
}

export default Parent 