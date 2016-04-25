app.controller('indexCtrl',function($scope,$element){

    $element.find(".chapter").hide();
    $element.find(".chapter1").show();

    $scope.navChange=function(obj){
        $element.find(".chapter").hide();
        $element.find(".chapter"+obj).show();
    }
});
