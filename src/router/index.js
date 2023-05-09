import { Route, Routes, Link } from 'react-router-dom'
import Home from '../views/Home'
import TodoList from '../views/TodoList'
import User from '../views/User'
import Routers from '../views/Routers'
import Parent from '../views/ParentAndSon/parent.jsx'
import ShoppingCart from '../views/shoppingCart'
import Redux from '../views/Redux/app'
import TodoListRedux from '../views/TodoList-Redux'

export default function Router () {
  return (
    <>
      <div className="menu">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/todoList'>TodoList案列</Link>
        <Link className="link" to='/TodoListRedux'>TodoListRedux</Link>
        <Link className="link" to='/user'>User</Link>
        <Link className="link" to='/router'>Router练习</Link>
        <Link className="link" to='/parent'>父子组件练习</Link>
        <Link className="link" to='/shopping-cart'>购物车案例</Link>
        <Link className="link" to='/Redux'>Redux练习</Link>
      </div>
      {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页 */}
      <Routes>
        <Route path='/' element={<Home>哈哈哈</Home>}></Route>
        <Route path='/todoList' element={<TodoList />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/router' element={<Routers />}></Route>
        <Route path='/parent' element={<Parent />}></Route>
        <Route path='/shopping-cart' element={<ShoppingCart />}></Route>
        <Route path='/Redux' element={<Redux />}></Route>
        <Route path='/TodoListRedux' element={<TodoListRedux />}></Route>
      </Routes>
    </>
  )

}