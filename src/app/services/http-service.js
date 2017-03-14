/**
 * Created by Administrator on 2017/3/14.
 */
;(function (angular) {
    angular.module('app')
        .service('httpService', [function () {
            this.jsonp = function (opts) {
                //1.动态创建script标签
                var script = document.createElement('script');

                //2.在src发送请求之前,创建一个全局的函数,用来接收响应的数据
                var callbackName = '_angular' + (new Date()).getTime(); //给回调函数的名称添加一个时间戳,避免重名,被覆盖
                window[callbackName] = function (data) {
                    opts.success(data)
                }
                script.src = opts.url + "?callback=" + callbackName;

                document.body.appendChild(script);
            }
        }])
    
})(window.angular)