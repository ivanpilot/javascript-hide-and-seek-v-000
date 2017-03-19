function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var rankedList = document.querySelectorAll('.ranked-list')

  for(var i = 0, l = rankedList.length; i < l; i++){
    var children = rankedList[i].children

    for (var j = 0, k = children.length; j < k; j++){
      children[j].innerHTML = (parseInt(children[j].innerHTML,10) + n).toString()
    }
  }
}

// function deepestChild(){
//   var element = document.getElementById('grand-node');
//   var currentDiv;
//   var nextDiv = element;
//
//   while(nextDiv !== null){
//     currentDiv = nextDiv
//     nextDiv = currentDiv.querySelector('div')
//   }
//
//   return currentDiv //.innerHTML
// }

function deepestChild(){
  var element = document.getElementById('grand-node');
  var currentNode;
  var nextNode = element.children[0];

  while(nextNode){
    currentNode = nextNode
    nextNode = currentNode.children[0]
  }

  return currentNode //.innerHTML
}
