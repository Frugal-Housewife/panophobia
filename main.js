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



navSlide();
openGallery();