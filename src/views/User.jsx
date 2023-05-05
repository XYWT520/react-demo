import React, { useEffect, useRef, useState } from 'react'
import useDefineTime from '../components/useDefineTime'

const User = () => {
  const [count, setCount] = useState(3)
  const [disabled, setDisabled] = useState(false)
  const timeId = useRef(null)
  const { counts, start } = useDefineTime(5,() => {
    setDisabled(false)
  })

  // useEffect(() => {
  //   if (count === 0) {
  //     setDisabled(false)
  //     setCount(3)
  //     clearInterval(timeId.current)
  //   }
  // }, [count])

  // const onClickSendMsg = () => {
  //   setDisabled(true)
  //   timeId.current = setInterval(() => {
  //     // setCount((prev) => {
  //     //   if (prev < 1) {
  //     //     setDisabled(false)
  //     //     setCount(3)
  //     //     clearInterval(timeId.current)
  //     //   }
  //     //   return prev - 1
  //     // })
  //     setCount((count) => count - 1)
  //   }, 1000)
  // }

  const onClickSendMsg = () => {
    setDisabled(true)
    start(60)
  }

  return (
    <div>
      <input type="text" style={{ margin: '20px' }} />
      <button disabled={disabled} onClick={onClickSendMsg}>{disabled ? `${counts}秒后重新获取` : '发送短信验证码'}</button>
    </div>
  )
}

export default User
