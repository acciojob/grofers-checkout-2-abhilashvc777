//your code here
const price = document.querySelectorAll("[data-ns-test]")
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
	let total = 0
for(let i=0; i<price.length; i++){
	total = total + (parseFloat(price[i].textContent))
}
	let tr = document.createElement("tr")
	let td  = document.createElement("td")
	let td1 = td.cloneNode()
	tr.appendChild(td)
    td.textContent = "total"
	tr.appendChild(td1)
    td1.textContent = `${total}`
    tbody.appendChild(tr)
	console.log(tr)