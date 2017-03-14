/**
 * Created by Administrator on 2017/3/14.
 */
;(function (angular) {
    angular.module('app')
        .service('httpService', [function () {
            this.jsonp = function (opts) {
                //1.动态创建script标签
                var script = document.createElement('script')

                //2.在src发送请求之前,创建一个全局的函数,用来接收响应的数据
                var callbackName = '_angular' + (new Date()).getTime()  //给回调函数的名称添加一个时间戳,避免重名,被覆盖
                window[callbackName] = function (data) {
                    opts.success(data)
                }
                //3.拼接回调函数和查询字符串  get请求  ?count=10&start: 0
                var queryString=[]
                var queryObj=opts.data
                for(var queryKey in queryObj){
                    queryString.push(queryKey+"="+queryObj[queryKey])
                }
                queryString=queryString.join('&');
                script.src = opts.url + "?callback=" + callbackName+"&"+queryString;
                document.body.appendChild(script);
            }
        }])
    
})(window.angular)

// jsonp({
//     url: '',
//     data:{
 //      count:10,
//       start: 0
//     },
//     success:function (data) {
//
//     }
// })