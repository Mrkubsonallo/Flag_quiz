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
country[1] = "Albania"
country[2] = "Algieria"
country[3] = "Andora"
country[4] = "Angola"
country[5] = "Antigua i Barbuda"
country[6] = "Arabia Saudyjska"
country[7] = "Argentyna"
country[8] = "Armenia"
country[9] = "Australia"
country[10] = "Austria"
country[11] = "Azerbejdzan"
country[12] = "Bahamy"
country[13] = "Bahrajn"
country[14] = "Bangladesz"
country[15] = "Barbados"
country[16] = "Belgia"
country[17] = "Belize"
country[18] = "Benin"
country[19] = "Białoruś"
country[20] = "Boliwia"
country[21] = "Bośnia i Hercegowina"
country[22] = "Botswana"
country[23] = "Brazylia"
country[24] = "Brunei"
country[25] = "Bułgaria"
country[26] = "Burkina faso"
country[27] = "Burundi"
country[28] = "Bhutan"
country[29] = "Chile"
country[30] = "Chiny"
country[31] = "Chorwacja"
country[32] = "Cypr"
country[33] = "Chad"
country[34] = "Czarnogóra"
country[35] = "Czechy"
country[36] = "Dania"
country[37] = "Demokratyczna Republika Konga"
country[38] = "Dominika"
country[39] = "Dominikana"
country[40] = "Dżibuti"
country[41] = "Egipt"
country[42] = "Ekwador"
country[43] = "Erytrea"
country[44] = "Estonia"
country[45] = "Eswatini"
country[46] = "Etiopia"
country[47] = "Fidżi"
country[48] = "Filipiny"
country[49] = "Finlandia"
country[50] = "Francja"
country[51] = "Gabon"
country[52] = "Gambia"
country[53] = "Ghana"
country[54] = "Grecja"
country[55] = "Grenada"
country[56] = "Gruzja"
country[57] = "Gujana"
country[58] = "Gwatemala"
country[59] = "Gwinea Bissau"
country[60] = "Gwinea Równikowa"
country[61] = "Gwinea"
country[62] = "Haiti"
country[63] = "Hiszpania"
country[64] = "Holandia"
country[65] = "Honduras"
country[66] = "Indie"
country[67] = "Indonezja"
country[68] = "Irak"
country[69] = "Iran"
country[70] = "Irlandia"
country[71] = "Islandia"
country[72] = "Izrael"
country[73] = "Jamajka"
country[74] = "Japonia"
country[75] = "Jemen"
country[76] = "Jordania"
country[77] = "Kambodża"
country[78] = "Kamerun"
country[79] = "Kanada"
country[80] = "Katar"
country[81] = "Kazachstan"
country[82] = "Kenia"
country[83] = "Kirgistan"
country[84] = "Kiribati"
country[85] = "Kolumbia"
country[86] = "Komory"
country[87] = "Kongo"
country[88] = "Korea Południowa"
country[89] = "Korea Północna"
country[90] = "Kosowo"
country[91] = "Kostaryka"
country[92] = "Kuba"
country[93] = "Kuwejt"
country[94] = "Laos"
country[95] = "Lesotho"
country[96] = "Liban"
country[97] = "Liberia"
country[98] = "Libia"
country[99] = "Liechtenstein"
country[100] = "Litwa"
country[101] = "Luksemburg"
country[102] = "Łotwa"
country[103] = "Macedonia Północna"
country[104] = "Madagaskar"
country[105] = "Malawi"
country[106] = "Malediwy"
country[107] = "Malezja"
country[108] = "Mali"
country[109] = "Malta"
country[110] = "Maroko"
country[111] = "Mauretania"
country[112] = "Mauritius"
country[113] = "Meksyk"
country[114] = "Mikronezja"
country[115] = "Mjanma"
country[116] = "Mołdawia"
country[117] = "Monako"
country[118] = "Mongolia"
country[119] = "Mozambik"
country[120] = "Namibia"
country[121] = "Nauru"
country[122] = "Nepal"
country[123] = "Niemcy"
country[124] = "Niger"
country[125] = "Nigeria"
country[126] = "Nikaragua"
country[127] = "Norwegia"
country[128] = "Nowa Zelandia"
country[129] = "Oman"
country[130] = "Pakistan"
country[131] = "Palau"
country[132] = "Panama"
country[133] = "Papua-Nowa Gwinea"
country[134] = "Paragwaj"
country[135] = "Peru"
country[136] = "Polska"
country[137] = "Portugalia"
country[138] = "Republika Południowej Afryki"
country[139] = "Republika Środkowoafrykańska"
country[140] = "Rosja"
country[141] = "Rumunia"
country[142] = "Rwanda"
country[143] = "Saint Kitts i Nevis"
country[144] = "Saint Lucia"
country[145] = "Saint Vincent i Grenadyny"
country[146] = "Salwador"
country[147] = "Samoa"
country[148] = "San Marino"
country[149] = "Senegal"
country[150] = "Serbia"
country[151] = "Seszele"
country[152] = "Sierra Leon"
country[153] = "Singapur"
country[154] = "Słowacja"
country[155] = "Słowenia"
country[156] = "Somalia"
country[157] = "Sri Lanka"
country[158] = "Stany Zjednoczone"
country[159] = "Sudan"
country[160] = "Sudan Południowy"
country[161] = "Surinam"
country[162] = "Syria"
country[163] = "Szwajcaria"
country[164] = "Szwecja"
country[165] = "Tadżykistan"
country[166] = "Tajlandia"
country[167] = "Tanzania"
country[168] = "Timor Wschodni"
country[169] = "Togo"
country[170] = "Tonga"
country[171] = "Trynidad i Tobago"
country[172] = "Tunezja"
country[173] = "Turcja"
country[174] = "Turkmenistan"
country[175] = "Tuvalu"
country[176] = "Uganda"
country[177] = "Ukraina"
country[178] = "Urugwaj"
country[179] = "Uzbekistan"
country[180] = "Vanuatu"
country[181] = "Watykan"
country[182] = "Wenezuela"
country[183] = "Węgry"
country[184] = "Wielka Brytania"
country[185] = "Wietnam"
country[186] = "Włochy"
country[187] = "Wybrzeże Kości Słoniowej"
country[188] = "Wyspy Marshalla"
country[189] = "Wyspy Salomona"
country[190] = "Wyspy Świętego Tomasza i Książęca"
country[191] = "Wyspy Zielonego Przylądka"
country[192] = "Zambia"
country[193] = "Zimbabwe"
country[194] = "Zjednoczone Emiraty Arabskie"

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