
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".navbar__nav-links");

    hamburger.addEventListener("click", ()=>{
        nav.classList.toggle("active-nav")
        hamburger.classList.toggle("active-toggle")

    })
    // function mendchileh(){
    //     alert("Сайн уу.\n\nМиний веб сайтад\n\nТавтай морилно уу")
    // }

    setTimeout(alert("Тавтай морилно уу"), 5000);