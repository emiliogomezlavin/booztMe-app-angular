console.log("controller linked!");

angular.module('BooztMeApp')
  .controller('BooztMeController', booztMeController);

function booztMeController($scope, $http){
  $scope.getContent = getContent;
  // $scope.newCard = {};
  // $scope.addCard = addCard;
  // $scope.deleteBoozt = deleteBoozt;



  ////  Node API   /////
  function getContent (){
    $http.get('http://localhost:3000/contents')
      .then(function(response){
          $scope.contents = response.data;
      });
  }


  // function addCard(){
  //   data = {};
  //   data.flashcard = $scope.newCard;

  //   $http.post('http://localhost:3000/api/v1/flashcards', data)
  //     .then(function(response){
  //       $scope.cards.push(response.data);
  //       $scope.newCard= {};
  //     });
  // }

  function deleteBoozt(boozt){
    console.log("works!")
    // $http.delete('http://localhost:3000/api/v1/flashcards/' + card.id)
    //   .then(function(response) {
    //     var index = $scope.cards.indexOf(card);
    //     $scope.cards.splice(index, 1);
    //   });
  }

}