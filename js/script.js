angular.module('lista',[])
    .controller('listCtrl',['$scope', 'filterFilter', function($scope, filterFilter) {

        $scope.shoppingList = [];
        $scope.checked = false;
        $scope.editField =false;
        $scope.newProduct = {
            nume: '',
            descriere: '',
            cantitate: 0,
            pret: 0,
            cumparat: false,
            total : function(pret, cantitate){
                return pret * cantitate;

            }
        };



        $scope.showForm = function () {
            $scope.checked = !$scope.checked;
        }


        $scope.add =  function(){

            $scope.shoppingList.push($scope.newProduct);
            $scope.newProduct = {
                nume: '',
                descriere: '',
                pret: 0,
                cantitate: 0,
                total : function(pret, cantitate){
                    return pret * cantitate;

                }
            };

            $scope.checked = !$scope.checked;
        };


        $scope.edit = function(){
            this.editField = !this.editField;
        }


        $scope.remove = function(){
            $scope.shoppingList = filterFilter($scope.shoppingList, function (product) {
                return !product.cumparat;
            });
        };

        $scope.removeSelected = function (product) {
            for (var i = 0; i < $scope.shoppingList.length; i++){
                if( product.nume == $scope.shoppingList[i].nume ) {
                    $scope.shoppingList.splice(i, 1);
                    break;
                };
            };
        };





    }]);