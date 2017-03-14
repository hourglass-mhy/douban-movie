/**
 * Created by Administrator on 2017/3/14.
 */
;(function (angular) {
    angular.module("app")
        .controller('detailController', [
            "$routeParams",
            'httpService',
            function ($routeParams,httpService) {

                //动态路径参数获取id
                var id=$routeParams.id
                $scope.movie={};

                console.log(id)

                //jsonp发送jsonp请求数据
                httpService.jsonp({
                    url:'http://api.douban.com/v2/movie/subject/'+id,
                    success:function (data) {
                        console.log(data)
                        $scope.movie=data;
                        //刷新模板
                        $scope.$apply()
                    }
                })


            }])


})(window.angular)