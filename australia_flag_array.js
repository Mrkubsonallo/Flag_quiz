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

for(i=0; i<country.length; i++)
{
    flag.innerHTML += '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'
}