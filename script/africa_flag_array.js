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

country[0] = "Algieria"
country[1] = "Angola"
country[2] = "Benin"
country[3] = "Botswana"
country[4] = "Burkina Faso"
country[5] = "Burundi"
country[6] = "Chad"
country[7] = "Demokratyczna Republika Konga"
country[8] = "Dżibuti"
country[9] = "Egipt"
country[10] = "Erytrea"
country[11] = "Eswatini"
country[12] = "Etiopia"
country[13] = "Gabon"
country[14] = "Gambia"
country[15] = "Ghana"
country[16] = "Gwinea Bissau"
country[17] = "Gwinea Równikowa"
country[18] = "Gwinea"
country[19] = "Kamerun"
country[20] = "Kenia"
country[21] = "Komory"
country[22] = "Kongo"
country[23] = "Lesotho"
country[24] = "Liberia"
country[25] = "Libia"
country[26] = "Madagaskar"
country[27] = "Malawi"
country[28] = "Mali"
country[29] = "Maroko"
country[30] = "Mauretania"
country[31] = "Mauritius"
country[32] = "Mozambik"
country[33] = "Namibia"
country[34] = "Niger"
country[35] = "Nigeria"
country[36] = "Republika Południowej Afryki"
country[37] = "Republika Środkowoafrykańska"
country[38] = "Rwanda"
country[39] = "Senegal"
country[40] = "Seszele"
country[41] = "Sierra Leon"
country[42] = "Somalia"
country[43] = "Sudan"
country[44] = "Sudan Południowy"
country[45] = "Tanzania"
country[46] = "Togo"
country[47] = "Tunezja"
country[48] = "Uganda"
country[49] = "Wybrzeże Kości Słoniowej"
country[50] = "Wyspy Świętego Tomasza i Książęca"
country[51] = "Wyspy Zielonego Przylądka"
country[52] = "Zambia"
country[53] = "Zimbabwe"

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