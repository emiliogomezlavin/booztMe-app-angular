console.log("controller linked!");

angular.module('CardsAgainstAssembly')
  .controller('cardsController', cardsController);

function cardsController($scope, $http){
  $scope.newCard = {};
  $scope.addCard = addCard;
  $scope.deleteCard = deleteCard;

  function addCard(){
    console.log($scope.newCard);
    $http.post('https://peaceful-lowlands-15260.herokuapp.com/api/flashcards', $scope.newCard)
      .then(function(response){
        $scope.cards.push(response.data);
        $scope.newCard= {};
      });
  }

  function deleteCard(card){
    $http.delete('https://peaceful-lowlands-15260.herokuapp.com/api/flashcards/' + card._id)
      .then(function(response) {
        var index = $scope.cards.indexOf(card);
        $scope.cards.splice(index, 1);
      });
  }

  $http.get('https://peaceful-lowlands-15260.herokuapp.com/api/flashcards')
    .then(function(response){
        $scope.cards = response.data;
    });

}