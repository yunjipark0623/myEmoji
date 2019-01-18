var face_img = document.querySelector('.face-img');
var eye_img = document.querySelector('.eye-img');
var mouth_img = document.querySelector('.mouth-img');
var x = document.querySelector('.remove');
// var btnDownload = document.querySelector('#download');


// 이미지 클릭했을 때 canvas에 보이는 함수
// function showImg(event) {
//   var target = event.target;
//
// }


// 이미지 클릭했을 때 list에 추가하는 함수
function addList(event) {
  var list = document.querySelector('#list');

  console.log("이미지 삽입");
  var html = `<li class="selected-item">` + `<img src='images/face1.png'>` + `<button type="button" class="remove">X</button>`;

  list.innerHTML += html;
}


// 이미지 삭제 함수
function remove(event) {
  var currentNode = event.target.parentElement;
  console.log(currentNode.className);
  if(event.target.className == "remove" && currentNode.className == "selected-item") {
    currentNode.remove();
  }
}


// 파일 다운로드 함수
function download() {
  var img = document.querySelector('#downloadImg');

  console.log("img download");
  // var blob = new Blob([img], {type: "data:down/jpg; base64"});
  //   saveAs(blob, "emoji.png");
  // var blob = new Blob([img], {type:"data:image/jpg;base64"});
  // saveAs(blob, "emoji.jpg");

  var canvas = document.querySelector('.canvas');
  var PNG = require('png-js');
  PNG.load('some.png', canvas);
}

function DownloadImage(imageURL) {
    var oImage = document.getElementById(imageURL);
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    if (typeof canvas.getContext == "undefined" || !canvas.getContext) {
        alert("browser does not support this action, sorry");
        return false;
    }

    try {
        var context = canvas.getContext("2d");
        var width = oImage.width;
        var height = oImage.height;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        context.drawImage(oImage, 0, 0, width, height);
        var rawImageData = canvas.toDataURL("image/png;base64");
        rawImageData = rawImageData.replace("image/png", "image/octet-stream");
        document.location.href = rawImageData;
        document.body.removeChild(canvas);
    }
    catch (err) {
        document.body.removeChild(canvas);
        alert("Sorry, can't download");
    }

    return true;
}

window.onload = function() {
    var arrButtons = document.querySelector("#download");
    for (var i = 0; i < arrButtons.length; i++) {
        var oButton = arrButtons[i];
        var sRelatedImage = oButton.getAttribute("rel");
        if (sRelatedImage && sRelatedImage.length > 0) {
            oButton.onclick = function() {
                HandleRelatedImage(this, sRelatedImage);
            }
        }
    }
};

function HandleRelatedImage(oButton, sRelatedImage) {
    var oImage = document.getElementById(sRelatedImage);
    if (!oImage) {
        alert("related image '" + sRelatedImage + "' does not exist");
        return false;
    }

    return DownloadImage(sRelatedImage);
}

$('#download').on('click', download);
$('.selected').on('click', remove);
