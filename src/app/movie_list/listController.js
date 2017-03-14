/**
 * Created by Administrator on 2017/3/14.
 */
;(function (angular) {

    angular.module('app')
        .controller("listController", [
            "$scope",
            'httpService',
            '$routeParams',
            '$route',
            function ($scope, httpService, $routeParams, $route) {
                var vm = this;
                vm.title = ''
                vm.movies = []

                vm.loading = true  //loading图

                //实现分页
                vm.pageSize = 5; //页容量
                vm.allPage = 0;  //总数数量
                vm.pageNum = 0;  //总页码
                //第几页  请求第几页是由路由决定的
                vm.page = parseInt($routeParams.page || 1);
                //点击改变动态路径参数的值
                vm.pageTurning = function (page) {
                    //边界判断
                    if (page > vm.pageNum) {
                        return false
                    }
                    if (page <= 0) {
                        return false
                    }
                    //刷新动态路径参数
                    $route.updateParams({
                        page: page
                    })
                }

                //jsonp跨域请求资源
                httpService.jsonp({
                    url: 'http://api.douban.com/v2/movie/'+$routeParams.category,
                    data: {
                        count: vm.pageSize,
                        start: (vm.page - 1) * vm.pageSize
                    },
                    success: function (backdata) {
                        vm.loading = false
                        // console.log(backdata)

                        vm.title = backdata.title;
                        vm.movies = backdata.subjects;

                        vm.allPage = backdata.total
                        vm.pageNum = Math.ceil(vm.allPage / vm.pageSize);
                        //使用异步请求数据之后,视图不会自动更新
                        $scope.$apply();
                    }
                })
            }])

})(window.angular)