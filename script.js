function contagem(){
  let num = Number(document.getElementById('fnum').value)
  res.innerHTML += `<p>Contando do 0 até ${num}</p>`
  let cont = 0
  while (cont <= num){
    res.innerHTML += ` ${cont} =>`
    cont ++
  }
}