let flag_div = document.createElement('div')
let next_btn_cre = document.createElement('button')
let sub_btn_cre = document.createElement('button')
let input_cre = document.createElement('input')
flag_div.setAttribute('id', 'flag')
next_btn_cre.setAttribute('id', 'next_btn')
sub_btn_cre.setAttribute('id', 'sub_btn')
input_cre.setAttribute('id', 'text_flag')
next_btn_cre.textContent = 'Następna flaga'
sub_btn_cre.textContent = 'Sprawdź'
document.body.innerHTML = ""
document.body.appendChild(flag_div)
document.body.appendChild(next_btn_cre)
document.body.appendChild(sub_btn_cre)
document.body.appendChild(input_cre)

let i = 0

const country = []

country[0] = "Argentyna"
country[1] = "Boliwia"
country[2] = "Brazylia"
country[3] = "Chile"
country[4] = "Ekwador"
country[5] = "Gujana"
country[6] = "Kolumbia"
country[7] = "Paragwaj"
country[8] = "Peru"
country[9] = "Surinam"
country[10] = "Urugwaj"
country[11] = "Wenezuela"

const flag = document.querySelector("#flag")
const next_btn = document.querySelector("#next_btn")
const sub_btn = document.querySelector("#sub_btn")
const input = document.querySelector("#text_flag")

if(flag.children.length == 0)
    flag.innerHTML += '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'