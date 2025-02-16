//your code here
const price = document.querySelectorAll(`[data-ns-test="prices"]`)
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
console.log(price)
	let total = 0
for(let i=0; i<price.length; i++){
	total = total + (parseFloat(price[i].textContent))
}
	let tr = document.createElement("tr")
	let td  = document.createElement("td")
	let td1 = td.cloneNode()
	tr.appendChild(td)
    td.textContent = "total"
    td.setAttribute("data-ns-test","prices")
	tr.appendChild(td1)
    td1.textContent = `${total}`
   td.setAttribute("data-ns-test","grandTotal")
    tbody.appendChild(tr)