export const sticky = (f) => {

    window.addEventListener("scroll", () => {
        if(scrollY > 140) {
            f(true)
        }
        else {
            f(false)
        }
    })
    
}