your code here
const body = document.querySelector("body")
const price = document.querySelectorAll(`[data-ns-test="price"]`)
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const btn = document.createElement("button")
btn.textContent = "Submit"
body.appendChild(btn)
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
const handeler = (e)=>{
	console.log(e)
   let totalPrice = 0
	for(let i=0; i<length; i++){
	totalPrice = totalPrice  + (Number(price[i].textContent))
	// price[i]["data-ns-test"] = `${price[i].textContent}`
	}
	td1.textContent = `${totalPrice}`
	td1["data-ns-test"] = `${totalPrice}`
	console.log(td1["data-ns-test"])
}
btn.addEventListener("click",handeler) 
