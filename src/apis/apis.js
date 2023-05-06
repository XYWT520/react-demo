import service from '../network/requestProject';

// 创建FAQ类目
export function addFaqCategory(params) {
  return service({
    url: '/api/getList',
    method: 'get',
    params,
  });
}

export function addTodoList (data) {
  return service({
    url: 'http://localhost:9998/todos',
    method: 'post',
    data,
  });
}

export function getTodoList () {
  return service({
    url: 'http://localhost:9998/todos',
    method: 'get',
  });
}

export function delTodoList (id) {
  return service({
    url: 'http://localhost:9998/todos/' + id,
    method: 'delete',
  });
}

export function patchTodoList (data, id) {
  return service({
    url: 'http://localhost:9998/todos/' + id,
    method: 'patch',
    data
  });
}

export function getGoodsItem () {
  return service({
    url: 'https://www.escook.cn/api/cart',
    method: 'get',
  });
}
