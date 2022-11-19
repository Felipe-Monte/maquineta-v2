
function myScope() {

    const btn = document.getElementById('botao')
    const res = document.querySelector('#res')
    res.innerHTML = ''

    btn.addEventListener('click', function () {
        let num = document.getElementById('txtn1')
        let numUser = Number(num.value)
        res.innerHTML = ''
        num.focus()

        if (numUser > 50000 || numUser === 0 || numUser < 1) {
            num.value = ''
            num.focus()
            return alert('Valor inválido')
        }
        renderRes(numUser)
    })

    function renderRes(n) {
        let n1 = Number((6.38 / 100 * n).toFixed(1))
        let n2 = Number((4.73 / 100 * n).toFixed(1))
        let n3 = Number((5.51 / 100 * n).toFixed(1))
        let n4 = Number((6.32 / 100 * n).toFixed(1))
        let n5 = Number((7.12 / 100 * n).toFixed(1))
        let n6 = Number((7.94 / 100 * n).toFixed(1))
        let n7 = Number((8.98 / 100 * n).toFixed(1))
        let n8 = Number((9.82 / 100 * n).toFixed(1))
        let n9 = Number((10.64 / 100 * n).toFixed(1))
        let n10 = Number((11.45 / 100 * n).toFixed(1))
        let n11 = Number((12.29 / 100 * n).toFixed(1))
        let n12 = Number((13.13 / 100 * n).toFixed(1))

        res.innerHTML += `<p>Para receber R$:<b>${n}</b> ficaria:</p>`
        res.innerHTML += `<p><b>1X:</b> ${n} = R$:${n + n1} ${createB(n1)}</p>`
        res.innerHTML += `<p><b>2X:</b> ${((n + n2) / 2).toFixed(2)} = R$:${n + n2} ${createB(n2)}</p>`
        res.innerHTML += `<p><b>3X:</b> ${((n + n3) / 3).toFixed(2)} = R$:${n + n3} ${createB(n3)}</p>`
        res.innerHTML += `<p><b>4X:</b> ${((n + n4) / 4).toFixed(2)} = R$:${n + n4} ${createB(n4)}</p>`
        res.innerHTML += `<p><b>5X:</b> ${((n + n5) / 5).toFixed(2)} = R$:${n + n5} ${createB(n5)}</p>`
        res.innerHTML += `<p><b>6X:</b> ${((n + n6) / 6).toFixed(2)} = R$:${n + n6} ${createB(n6)}</p>`
        res.innerHTML += `<p><b>7X:</b> ${((n + n7) / 7).toFixed(2)} = R$:${n + n7} ${createB(n7)}</p>`
        res.innerHTML += `<p><b>8X:</b> ${((n + n8) / 8).toFixed(2)} = R$:${n + n8} ${createB(n8)}</p>`
        res.innerHTML += `<p><b>9X:</b> ${((n + n9) / 9).toFixed(2)} = R$:${n + n9} ${createB(n9)}</p>`
        res.innerHTML += `<p><b>10X:</b> ${((n + n10) / 10).toFixed(2)} = R$:${n + n10} ${createB(n10)}</p>`
        res.innerHTML += `<p><b>11X:</b> ${((n + n11) / 11).toFixed(2)} = R$:${n + n11} ${createB(n11)}</p>`
        res.innerHTML += `<p><b>12X:</b> ${((n + n12) / 12).toFixed(2)} = R$:${n + n12} ${createB(n12)}</p>`
    }

    function render(n) {

    }

    function createB(b) {
        return `<b class="sale"> &uarr;${b}</b>`
    }

}
myScope()
























