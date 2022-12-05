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
let correct = 0

const country = []

country[0] = "Albania"
country[1] = "Andora"
country[2] = "Austria"
country[3] = "Belgia"
country[4] = "Białoruś"
country[5] = "Bośnia i Hercegowina"
country[6] = "Bułgaria"
country[7] = "Chorwacja"
country[8] = "Czarnogóra"
country[9] = "Czechy"
country[10] = "Dania"
country[11] = "Estonia"
country[12] = "Finlandia"
country[13] = "Francja"
country[14] = "Grecja"
country[15] = "Hiszpania"
country[16] = "Holandia"
country[17] = "Irlandia"
country[18] = "Islandia"
country[19] = "Kosowo"
country[20] = "Liechtenstein"
country[21] = "Litwa"
country[22] = "Luksemburg"
country[23] = "Łotwa"
country[24] = "Macedonia Północna"
country[25] = "Malta"
country[26] = "Mołdawia"
country[27] = "Monako"
country[28] = "Niemcy"
country[29] = "Norwegia"
country[30] = "Polska"
country[31] = "Portugalia"
country[32] = "Rosja"
country[33] = "Rumunia"
country[34] = "San Marino"
country[35] = "Serbia"
country[36] = "Słowacja"
country[37] = "Słowenia"
country[38] = "Szwajcaria"
country[39] = "Szwecja"
country[40] = "Turcja"
country[41] = "Ukraina"
country[42] = "Watykan"
country[43] = "Węgry"
country[44] = "Wielka Brytania"
country[45] = "Włochy"

const flag = document.querySelector("#flag")
const next_btn = document.querySelector("#next_btn")
const sub_btn = document.querySelector("#sub_btn")
const input = document.querySelector("#text_flag")


if(flag.children.length == 0)
    flag.innerHTML = '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'

next_btn.addEventListener('click', ()=>{
    if(i<country.length-1)
    {
        i++
        flag.innerHTML = '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'
    }
    else
        document.body.innerHTML = "Twój wynik to: " + correct
})

sub_btn.addEventListener('click', ()=>{
    if(input.value == country[i])
    {
        if(i<country.length-1)
        {
            i++
            correct++
            flag.innerHTML = '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'
            input.value = ""
        }
        else
        {
            correct++
            document.body.innerHTML = "Twój wynik to: " + correct
        }
    } 
})

input.addEventListener('change', ()=>{
    if(input.value == country[i])
    {
        if(i<country.length-1)
        {
            i++
            correct++
            flag.innerHTML = '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'
            input.value = ""
        }
        else
        {
            correct++
            document.body.innerHTML = "Twój wynik to: " + correct
        }
    }
})