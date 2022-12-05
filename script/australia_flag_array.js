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

country[0] = "Australia"
country[1] = "Fidżi"
country[2] = "Kiribati"
country[3] = "Mikronezja"
country[4] = "Nauru"
country[5] = "Nowa Zelandia"
country[6] = "Palau"
country[7] = "Papua-Nowa Gwinea"
country[8] = "Samoa"
country[9] = "Tonga"
country[10] = "Tuvalu"
country[11] = "Vanuatu"
country[12] = "Wyspy Marshalla"
country[13] = "Wyspy Salomona"

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