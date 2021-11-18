/*
 *@param url    [String] 请求地址
 *@param params [Obj]    请求参数
 *@param config [obj]    请求头配置参数
 */
import axios from "axios";
axios.defaults.timeout = 12000;
const _Get = (url: string, params: any) => {
   return new Promise((resolve, reject) => {
      axios
         .get(url, { params: params })
         .then(res => resolve(res))
         .catch(err => reject(err));
   });
};
const _Post = (url: string, params: any, config?: any) => {
   return new Promise((resolve, reject) => {
      axios
         .post(url, params, { headers: { ...config } })
         .then(res => resolve(res))
         .catch(err => reject(err));
   });
};
axios.interceptors.response.use(
   response => {
      const res = response.data;
      // js删除cookie信息
      if (res.Status >= -2 || res.Status <= 7) {
      }
      return res;
   },
   error => Promise.reject(error)
);
export { _Get, _Post };
