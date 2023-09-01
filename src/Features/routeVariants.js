export const routeVariants = {
    initial: {
        x: '-100vw'
    },
    final: {
        x: '0vw',
        transition: {
            duration: 0.5
        }
    },
    exit: {
        x: "100vw",
        transition: {
            duration: 10
        }
    }
}