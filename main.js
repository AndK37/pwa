document.addEventListener("DOMContentLoaded", function () {
    const h = document.getElementById("height").value
    const w = document.getElementById("weight").value
    const b = document.getElementById("btn")
    const o = document.getElementById("output")

    b.addEventListener("click", function () {
        let imt = +w / (+h/100 * +h/100)
        o.innerHTML = imt.toFixed(3).toString()
    })

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then (registration => {
                console.log('SW registred', registration)
            })
            .catch(error => {
                console.log('SW failed', error)
        })
    }
})