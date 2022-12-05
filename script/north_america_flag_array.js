const country = []

country[0] = "Antigua i Barbuda"
country[1] = "Bahamy"
country[2] = "Barbados"
country[3] = "Belize"
country[4] = "Dominika"
country[5] = "Dominikana"
country[6] = "Grenada"
country[7] = "Gwatemala"
country[8] = "Haiti"
country[9] = "Honduras"
country[10] = "Jamajka"
country[11] = "Kanada"
country[12] = "Kostaryka"
country[13] = "Kuba"
country[14] = "Meksyk"
country[15] = "Nikaragua"
country[16] = "Panama"
country[17] = "Saint Kitts i Nevis"
country[18] = "Saint lucia"
country[19] = "Saint Vincent i Grenadyny"
country[20] = "Salwador"
country[21] = "Stany Zjednoczone"
country[22] = "Trynidad i Tobago"

const flag = document.querySelector("#flag")

for(i=0; i<country.length; i++)
{
    flag.innerHTML += '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'
}