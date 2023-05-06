import React from 'react'
import MyHedaer from './MyHeader'
import GoodsItem from './GoodsItem'
import MyFooter from './MyFooter'
import { useEffect } from 'react'
import { getGoodsItem } from '../../apis/apis'
import { useState } from 'react'

const Index = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || [])
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('list'))) return
    getGoodsItems()
    console.log('发送请求')
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const getGoodsItems = () => {
    getGoodsItem().then(({ list }) => {
      setList(list)
    })
  }

  const onChangeInput = (e, id) => {
    setList(list.map(item => {
      if (item.id === id) {
        return { ...item, goods_state: e.target.checked, }
      } else {
        return item
      }
    }))
  }

  return (
    <div>
      <MyHedaer>购物车</MyHedaer>
      <GoodsItem list={list} onChangeInput={onChangeInput}></GoodsItem>
      <MyFooter list={list}></MyFooter>
    </div>
  )
}

export default Index
