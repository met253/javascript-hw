function testKey (e) {
    console.log(e.key)
    console.log(e.code)
}
document.addEventListener("keydown", testKey)