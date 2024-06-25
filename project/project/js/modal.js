//  MODAL
    const modalTriggerBtn = document.querySelector("#btn-get");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector(".modal_close")

    const openModal = () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    modalTriggerBtn.onclick = () => {
        openModal();
    }

    modalCloseBtn.onclick = () => {
        closeModal();
    }
    modal.onclick = (event) => {
        if (event.target === modal) {
            closeModal(); 
        }
       
    }

    // scroll Modal


    // console.log(window.innerHeight);
    // console.log(window.scrollY);
    // console.log(document.body.offsetHeight);

    const scrollHandler = () => {
       if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            openModal();
            window.removeEventListener('scroll', scrollHandler);
       }
    }
    window.addEventListener('scroll', scrollHandler);

    setTimeout(openModal, 10000);
