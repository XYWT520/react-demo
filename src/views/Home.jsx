import React, { useState } from 'react';
import { addFaqCategory } from '../apis/apis'

const Home = (props) => {
  const [num, setNum] = useState(0)
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)

  const onClickButton = () => {
    setCount(count + 1)
  }

  const onClickApis = async () => {
    await addFaqCategory().then(res => {
      setList(res)
    })
  }
  return (
    <>
      <div className="div">
        <h1>计数器: {count}</h1>
        <button onClick={onClickButton}>点击加一</button>
        <hr />
        <h1>计数器2: {num}</h1>
        <button onClick={() => setNum(num + 1)}>点击加一</button>
        <hr />
        <button onClick={onClickApis}>发请求获取列表</button>
        <p>列表展示</p>
        <ul>
          {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </>
  );
}

export default Home;
