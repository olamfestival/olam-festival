//Workshop
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-Container');

//Select tab content 
function selectItem(e) {
    //Call function to remove border from all id
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content from the DOM
    console.log(this.id)
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}


//Function to remove the border
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//Function to remove the showClass
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//eventListener
tabItems.forEach(item => item.addEventListener('click', selectItem));


document.querySelector('.toggle').addEventListener('click', () => 
document.querySelector('.hmbrgOverLay').classList.toggle('reveal'));



// Hamburger-Menu
// let Active = document.getElementsByClassName('.sectionAText');


// function selectListen(e) {
//     removeActive();

//     this.classList.add('active');
// }

// function removeActive() {
//     Active.forEach(item => item.classList.remove('active'));
// }

// Active.forEach(item => item.addEventListener('click', selectListen));
