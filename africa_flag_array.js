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

for(i=0; i<country.length; i++)
{
    flag.innerHTML += '<img src="img/'+country[i]+'.svg" alt="flaga" style="width: 300px; height: 200px; margin: 5px;">'
}