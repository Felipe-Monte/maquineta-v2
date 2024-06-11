function renderRes(n) {
  let n2 = Number((4.73 / 100 * n).toFixed(1))
  let n3 = Number((5.51 / 100 * n).toFixed(1))
  let n4 = Number((6.32 / 100 * n).toFixed(1))
  let n5 = Number((7.12 / 100 * n).toFixed(1))
  console.log(n2 , n3, n4, n5)
}
renderRes(120)

// const taxas = [6.38, 4.73, 5.51, 6.32, 7.12, 7.94, 8.98, 9.82, 10.64, 11.45, 12.29, 13.13]

const taxas = [4.73]

for(let i = 0; i < taxas.length; i++){
  let result = taxas[i]
  console.log("------")
  console.log(result)
}