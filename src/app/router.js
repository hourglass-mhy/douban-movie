/**
 * Created by Administrator on 2017/3/14.
 */
//获取模块, 分配路由
;(function (angular){
    angular.module("app")
        .config(["$routeProvider",function ($routeProvider) {
            $routeProvider
                .when('/in_theaters',{
                    templateUrl: 'app/movie_list/list.html',
                    controller: "listController",
                    controllerAs: 'vm'
                })
                .otherwise({
                     redirectTo: '/in_theaters'
                })
        }])

})(window.angular)