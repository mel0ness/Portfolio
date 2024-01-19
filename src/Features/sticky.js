export const sticky = (f) => {

    const width = window.innerWidth;

    window.addEventListener("scroll", () => {
        if(scrollY > 140.375 && width < 769) {
            f(true)
        }
        else if(scrollY > 128 && width >= 769) {
            f(true)
        }
        else {
            f(false)
        }
    })
    
}
