/**
 * Created by Administrator on 2017/3/14.
 */
//获取模块, 分配路由
;(function (angular) {
    angular.module("app")
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider
            //:category表示动态路径参数
            //:page动态路径参数
                .when('/list/:category/:page?', {
                    templateUrl: 'app/movie_list/list.html',
                    controller: "listController",
                    controllerAs: 'vm'
                })
                //详情页路由
                //上面的路由也会匹配到detail,添加标识
                .when('/detail/:id', {
                    tempalteUrl:"app/detail/detail.html",
                    controller: 'detailController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/list/in_theaters'
                })
        }])

})(window.angular)