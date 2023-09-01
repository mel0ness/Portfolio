export const sticky = (f) => {

    window.addEventListener("scroll", () => {
        if(scrollY > 140.3) {
            f(true)
        }
        else {
            f(false)
        }
    })
    
}