// import { message } from 'ant-design-vue';
// import store from '../store';

export function inject (service) {
  // request拦截器
  service.interceptors.request.use(
    (config) => {
      //统一处理接口状态，改变loading状态
      return config;
    },
    (error) => {
      console.log('Request拦截器Error ==>', error); // for debug
      Promise.reject(error);
    },
  );
  // response拦截器
  service.interceptors.response.use(
    (response) => {
      if (response.status === 200 || response.status === 201) {
        if ((!response.data.code && response.data.code !== 0) || response.data.code === 200) {
          if (response.config.headers.allowCodePass) {
            return response;
          }
          return response.data;
        } else {
          //抛出异常
          // message.error(response.data.message);
          // console.log(response.data.message);
          return response.data;
        }
      } else {
        //错误的响应码交由ErrorHandler处理
        errorHandler(response);
      }
      return Promise.reject(new Error('请求响应码错误!'));
    },
    (error) => {
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        return Promise.reject(new Error('请求超时！'));
      }
      //返回的异常统一交由错误处理器决定处理
      return error.response ? errorHandler(error.response) : Promise.reject(error);
    },
  );
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const errorHandler = (response) => {
  console.log('response=====', response);
  if (!response || !response.status) {
    // message.error('服务器无响应,请检查您的网络状态!');
    return Promise.reject(new Error('服务器无响应,请检查您的网络状态!'));
  }
};

export default inject;
