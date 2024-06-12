
const Fees = [6.38, 4.73, 5.51, 6.32, 7.12, 7.94, 8.98, 9.82, 10.64, 11.45, 12.29, 13.13]

function renderRes(n){
  res.innerHTML += `<p>PARA RECEBER R$:<b>${n}</b> FICARIA:</p>`;

  Fees.forEach((fee, index) => {
    let calc = Number((fee / 100 * n).toFixed(1))
    let sum = (calc + n).toFixed(2)
    
    res.innerHTML += `<p><b>${index + 1}X:</b> ${(sum / (index + 1)).toFixed(2)} = R$:${sum} ${createB(calc)}</p>`;
  })
  

  function createB(b) {
    return `<b class="sale"> &uarr;${b}</b>`;
  }
}
renderRes(120)



























