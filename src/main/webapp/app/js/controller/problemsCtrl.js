problemsApp.controller('problemsCtrl',function($scope,$element){

    $element.find(".chapterp").hide();
    $element.find(".chapterp0").show();

    $scope.navChange=function(obj){
        $element.find(".chapterp").hide();
        $element.find(".chapterp"+obj).show();
    }
});
