function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll(".ranked-list li")
  console.log(list);
  // list.forEach(function(liNum){
  //   parseInt(liNum.innerText) + n
  // })
}
