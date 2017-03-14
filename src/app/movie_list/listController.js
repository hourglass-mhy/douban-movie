/**
 * Created by Administrator on 2017/3/14.
 */
;(function (angular) {

    angular.module('app')
        .controller("listController", [
            "$scope",
            'httpService',
            function ($scope, httpService) {
                var vm = this;
                vm.title = ''
                vm.movies = []

                vm.loading=true  //loading图

                //jsonp跨域请求资源
                httpService.jsonp({
                    url: 'http://api.douban.com/v2/movie/in_theaters',
                    success: function (backdata) {
                        vm.loading=false
                        console.log(backdata)
                        vm.title = backdata.title;
                        vm.movies = backdata.subjects;
                        //使用异步请求数据之后,视图不会自动更新
                        $scope.$apply();
                    }
                })
            }])

})(window.angular)