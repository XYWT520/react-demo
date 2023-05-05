import { useState, useEffect, useRef } from 'react'

const useDefineTime = (initCount, callback = () => { }) => {
  const [counts, setCount] = useState(initCount)
  const timerId = useRef(null)

  const start = () => {
    setCount(initCount)
    timerId.current = setInterval(() => {
      setCount((counts) => counts - 1)
    }, 1000)
  }

  useEffect(() => {
    if (counts === 0) {
      callback()
      clearInterval(timerId.current)
    }
  }, [counts])

  return {
    counts,
    start
  }
}

export default useDefineTime