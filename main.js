const navSlide=()=>{
    const menu=document.querySelector('#menu');
    const navigation=document.querySelector('.navigation');
    const navigationItem=document.querySelectorAll('.navigation a');

    menu.addEventListener('click', ()=> {
    navigation.classList.toggle('nav-active')
    menu.classList.toggle('nav-rotation')
    })

    navigationItem.forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('nav-active');
        });
    });

}


const openGallery=()=>{
    const openBtn=document.querySelector('#open-gallery')
    const gallery=document.querySelector('.gall')

    openBtn.addEventListener('click', ()=> {
        gallery.classList.toggle('gallery-active')
    })
}


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 



navSlide();
openGallery();