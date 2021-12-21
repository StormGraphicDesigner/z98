
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".navbar__nav-links");

    hamburger.addEventListener("click", ()=>{
        nav.classList.toggle("active-nav")
        hamburger.classList.toggle("active-toggle")

    })
