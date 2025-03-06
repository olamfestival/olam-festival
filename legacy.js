//Form Modal

 // Get the modal
//  let modal = document.getElementById("myModal");

//  let ntfy = document.getElementById("ntfyBtn");



// ntfy.onclick = function() {
//   modal.style.display ="block";
//  }

 
 
 // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    if (event.target == modal) {
//      modal.style.display = "none";
//    }
//  }

//To Open the legacyModal

let legacyModal = document.getElementById("myLegacyVid");
let openLegacy = document.getElementById("playBtn");
 
  openLegacy.addEventListener("click", function () {
    legacyModal.style.display = "block";
  })  


//To close the modal

let closeModal = document.getElementById("closeLegacy");
let legacyVideo = document.getElementById("myLegacyVideo");
// const x = document.querySelector("iframe").contentWindow;

var iframe = document.querySelector( "iframe" );
var temp = iframe.src; 
iframe.src = temp; // re-initializing the src attribute value


function remove(element) {
  // getting every iframe from the body
  var iframes = element.querySelectorAll('iframe');
  // reinitializing the values of the src attribute of every iframe to stop the YouTube video.
  for (let i = 0; i < iframes.length; i++) {
     if (iframes[i] !== null) {
        var temp = iframes[i].src;
        iframes[i].src = temp;
     }
  }
  legacyModal.style.display = "none";
};


// window.onclick = function remove(event) {
//       if (event.target == legacyModal) {
//         legacyModal.style.display = "none";
//       }
//     }


document.querySelector('.toggle').addEventListener('click', () => 
document.querySelector('.hmbrgOverLay').classList.toggle('reveal'));