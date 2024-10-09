
document.addEventListener("DOMContentLoaded", function () {
    const h = document.getElementById("height")
    const w = document.getElementById("weight")
    const b = document.getElementById("btn")
    const o = document.getElementById("output")
    b.addEventListener("click", function () {
        let imt = (Number(w.value) / (Number(h.value)/100 * Number(h.value)/100))
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