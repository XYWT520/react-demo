import React, { useEffect, useRef, useState } from 'react'
import { addFaqCategory } from '../apis/apis'
import img from '../images/穹妹.jpg'

const Routers = () => {
  const [count, setCount] = useState(0)
  const [laopo, setLaopo] = useState([])
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const input = useRef(null)

  useEffect(() => {
    onClickGetLaoPo()
    document.addEventListener('mousemove', (e) => {
      setPosition({ x: e.x, y: e.y })
    })

    return () => {
      delMousemove()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      if (e.y < 250) {
        setPosition({ x: e.x, y: 255 })
      }
    })
  }, [position.y])

  const delMousemove = () => {
    document.removeEventListener('mousemove', (e) => {
      setPosition({ x: e.x, y: e.y })
    })
  }

  const countAdd = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  const onClickGetLaoPo = async () => {
    setLaopo(await addFaqCategory())
  }

  const onKeyDown = (e) => {
    console.log(e)
  }

  return (
    <>
      <div onKeyDown={onKeyDown}>
        <div>
          <h1>数值{count}</h1>
          <button onClick={countAdd}>+ 3</button>
          <button onClick={onClickGetLaoPo}>获取角色</button>
          <input type="text" ref={input} />
          <button onClick={() => { console.log(input) }}>获取input</button>
          <ul>
            {laopo.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
        <hr />
        <h1>图片跟随鼠标移动案例</h1>
        <h1>坐标轴 X: {position.x} Y: {position.y}</h1>
        <img src={img} style={{ width: '100px', height: '100px', position: 'absolute', left: position.x, top: position.y }} />
      </div>
    </>
  )
}

export default Routers
