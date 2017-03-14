/**
 * Created by Administrator on 2017/3/14.
 */
;(function (angular){
    angular.module('app')
        .filter('getName',function () {
            return function (input,separator) {
                var names=[]
                input.forEach(function (director) {
                    names.push(director.name)
                })
                return names.join(separator || ',')
            }
        })
    
})(window.angular)