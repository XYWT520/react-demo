import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

const Item = ({ data }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(data.name)
  const input = useRef(null)

  const onClickDelete = (id) => {
    dispatch({ type: 'todos/delete', payload: id })
  }

  const onChangeInput = (e, id) => {
    dispatch({ type: 'todos/editDone', payload: { id, isDone: e.target.checked } })
  }

  const onKeyDown = (e) => {
    if (e.code === 'Enter' && (name.trim() !== '')) {
      dispatch({ type: 'todos/edieName', payload: { id: data.id, name } })
      setIsEditing(false)
    }
  }

  const onBlur = () => {
    setIsEditing(false)
    dispatch({ type: 'todos/edieName', payload: { id: data.id, name } })
  }

  const onDoubleClick = () => {
    setIsEditing(true)
    // setTimeout(() => {
    //   input.current.focus()
    // }, 0)
  }

  useEffect(() => {
    input.current.focus()
  }, [isEditing])

  const className = [data.isDone ? 'completed' : '', isEditing ? 'editing' : ''].join(' ')

  return (
    <li className={className} onDoubleClick={onDoubleClick} >
      <div className="view">
        <input className="toggle" type="checkbox" checked={data.isDone} onChange={(e) => { onChangeInput(e, data.id) }} />
        <label>{data.name}</label>
        <button className="destroy" onClick={() => onClickDelete(data.id)}></button>
      </div>
      <input className="edit" ref={input} value={name} onChange={(e) => { setName(e.target.value) }} onKeyDown={onKeyDown} onBlur={onBlur} />
    </li>
  )
}
Item.prototype = {
  data: PropTypes.object.isRequired
}

export default Item

