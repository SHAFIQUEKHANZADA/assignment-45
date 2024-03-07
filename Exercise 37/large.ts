function make_shirt(size: string = "Large", message: string = "I Love TypeScript"): void {
    console.log(`Shirt Size: ${size}, Message: ${message}`)
}
make_shirt()
make_shirt("Medium")
make_shirt("Small", "Full Stack Developer")