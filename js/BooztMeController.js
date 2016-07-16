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

    $scope.content = [
          {
            title: "Monkey Meme",
            url: "http://img.memecdn.com/Cool-Story-Bro_o_91043.jpg"
          },
          {
            title: "Cute Dog",
            url: "http://www.windowsmode.com/wp-content/uploads/2015/08/HD-Dog-wallpaper.jpg"
          },
          {
            title: "Baby Laughing",
            url: "http://previews.123rf.com/images/flashon/flashon1109/flashon110900212/10686113-happy-big-laughing-7-month-old-African-American-baby-boy-Stock-Photo.jpg"
          }]
    // $http.get('http://localhost:3000/api/v1/flashcards')
    //   .then(function(response){
    //       $scope.cards = response.data;
    //   });
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