

// var face_img = document.querySelector('.face-img');
// var eye_img = document.querySelector('.eye-img');
// var mouth_img = document.querySelector('.mouth-img');
var x = document.querySelector('.remove');


// 이미지 클릭했을 때 canvas에 보이고, list에 추가하는 함수
function showImg(event) {
  var target = event.target;
  var list = document.querySelector('#list');
  var canvas = document.querySelector('.canvas');


  console.log(target.name);
  console.log("이미지 삽입");

  var html = `<li class="selected-item">` + `<img src='images/${target.name}.png' class="list-img">` + `<div class="list_name">${target.name}</div><button type="button" class="remove">X</button>`;

  var sketchbook = document.querySelector('#sketchbook');
    var img = new Image();
    img.addEventListener('load', function() {

    }, false);
    img.src = `images/${target.name}.png`;

    if(sketchbook.getContext) {
      var ctx = sketchbook.getContext('2d');
      img.onload = function() {
        ctx.drawImage(img, 0, 0);
      };
  }

  // var emoji = `<canvas class="emoji" width="128px" height="128px"><img src='images/` + target.name + `.png'>`;

  list.innerHTML += html;
  // canvas.innerHTML += emoji;

  // var list_name = document.querySelector('.list_name');
  // var lname = target.name;
  //
  // list_name.innerHTML += lname;
}


// 이미지 클릭했을 때 list에 추가하는 함수
// function addList(event) {
//   var list = document.querySelector('#list');
//
//   console.log("이미지 삽입");
//   var html = `<li class="selected-item">` + `<img src='images/` + target.name + `.png'>` + `<button type="button" class="remove">X</button>`;
//
//   list.innerHTML += html;
// }


// list 이미지 삭제 함수
function remove(event) {
  var currentNode = event.target.parentElement;
  console.log(currentNode.className);
  if(event.target.className == "remove" && currentNode.className == "selected-item") {
    currentNode.remove();
  }
}

//canvas 이미지 삭제 함수
function getRidOf(event) {

}

// 파일 다운로드 함수
// function download() {
//   var img = document.querySelector('#downloadImg');
//
//   console.log("img download");
// }
  // var blob = new Blob([img], {type: "data:down/jpg; base64"});
  //   saveAs(blob, "emoji.png");
  // var blob = new Blob([img], {type:"data:image/jpg;base64"});
  // saveAs(blob, "emoji.jpg");
//
//   var canvas = document.querySelector('.canvas');
//   var PNG = require('png-js');
//   PNG.load('some.png', canvas);
// }
//
// function DownloadImage(imageURL) {
//     var oImage = document.getElementById(imageURL);
//     var canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);
//     if (typeof canvas.getContext == "undefined" || !canvas.getContext) {
//         alert("browser does not support this action, sorry");
//         return false;
//     }
//
//     try {
//         var context = canvas.getContext("2d");
//         var width = oImage.width;
//         var height = oImage.height;
//         canvas.width = width;
//         canvas.height = height;
//         canvas.style.width = width + "px";
//         canvas.style.height = height + "px";
//         context.drawImage(oImage, 0, 0, width, height);
//         var rawImageData = canvas.toDataURL("image/png;base64");
//         rawImageData = rawImageData.replace("image/png", "image/octet-stream");
//         document.location.href = rawImageData;
//         document.body.removeChild(canvas);
//     }
//     catch (err) {
//         document.body.removeChild(canvas);
//         alert("Sorry, can't download");
//     }
//
//     return true;
// }
//
// window.onload = function() {
//     var arrButtons = document.querySelector("#download");
//     for (var i = 0; i < arrButtons.length; i++) {
//         var oButton = arrButtons[i];
//         var sRelatedImage = oButton.getAttribute("rel");
//         if (sRelatedImage && sRelatedImage.length > 0) {
//             oButton.onclick = function() {
//                 HandleRelatedImage(this, sRelatedImage);
//             }
//         }
//     }
// };
//
// function HandleRelatedImage(oButton, sRelatedImage) {
//     var oImage = document.getElementById(sRelatedImage);
//     if (!oImage) {
//         alert("related image '" + sRelatedImage + "' does not exist");
//         return false;
//     }
//
//     return DownloadImage(sRelatedImage);
// }

$('#download').on('click', download);
$('.selected').on('click', remove);
$('.face-img').on('click', showImg);
$('.eye-img').on('click', showImg);
$('.mouth-img').on('click', showImg);
$('.ac-img').on('click', showImg);
// $('.face-img').on('click', addList);
