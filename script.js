//your code here
const price = document.querySelectorAll(`[data-ns-test="price"]`)
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
let length = price.length
	let tr = document.createElement("tr")
	let td  = document.createElement("td")
	let td1 = td.cloneNode()
	tr.appendChild(td)
    td.textContent = "total" 
    td.setAttribute("data-ns-test","price")
	tr.appendChild(td1)
   td1.setAttribute("data-ns-test","grandTotal")
    tbody.appendChild(tr)
	td1["data-ns-test"] = 0
for(let i=0; i<length; i++){
	td1["data-ns-test"] = parseFloat(td1["data-ns-test"])  + (parseFloat(price[i].textContent))
	price[i]["data-ns-test"] = `${price[i].textContent}`
}
let total = td1["data-ns-test"]
    td1.textContent = `${total}`
td1["data-ns-test"] = `${total}`
console.log(table)