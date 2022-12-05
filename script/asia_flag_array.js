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

country[0] = "Afganistan"
country[1] = "Arabia Saudyjska"
country[2] = "Armenia"
country[3] = "Azerbejdzan"
country[4] = "Bahrajn"
country[5] = "Bangladesz"
country[6] = "Brunei"
country[7] = "Bhutan"
country[8] = "Chiny"
country[9] = "Cypr"
country[10] = "Filipiny"
country[11] = "Gruzja"
country[12] = "Indie"
country[13] = "Indonezja"
country[14] = "Irak"
country[15] = "Iran"
country[16] = "Izrael"
country[17] = "Japonia"
country[18] = "Jemen"
country[19] = "Jordania"
country[20] = "Kambodża"
country[21] = "Katar"
country[22] = "Kazachstan"
country[23] = "Kirgistan"
country[24] = "Korea Południowa"
country[25] = "Korea Północna"
country[26] = "Kuwejt"
country[27] = "Laos"
country[28] = "Liban"
country[29] = "Malediwy"
country[30] = "Malezja"
country[31] = "Mjanma"
country[32] = "Mongolia"
country[33] = "Nepal"
country[34] = "Oman"
country[35] = "Pakistan"
country[36] = "Rosja"
country[37] = "Singapur"
country[38] = "Sri Lanka"
country[39] = "Syria"
country[40] = "Tadżykistan"
country[41] = "Tajlandia"
country[42] = "Timor Wschodni"
country[43] = "Turcja"
country[44] = "Turkmenistan"
country[45] = "Uzbekistan"
country[46] = "Wietnam"
country[47] = "Zjednoczone Emiraty Arabskie"

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