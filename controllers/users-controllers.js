console.log("controller linked!");

angular.module('BooztMeApp')
  .controller('home', home)
  .controller('users-index', usersIndex)
  .controller('user-show', userShow);

function usersIndex($scope, $http){
  $scope.getContent = getContent;
  $scope.deleteContent = deleteContent;

  console.log("usersIndex linked!")
  function getContent (){
    $http.get('http://localhost:3000/contents')
      .then(function(response){
          $scope.contents = response.data;
      });
  }

  function deleteContent(content){
    $http.delete('http://localhost:3000/contents/' + content.id)
      .then(function(response) {
        var index = $scope.cards.indexOf(card);
        $scope.cards.splice(index, 1);
      });
  }

}

function home (){
  console.log("home linked!")
}

function userShow ($scope) {
  console.log("userShow linked!")
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