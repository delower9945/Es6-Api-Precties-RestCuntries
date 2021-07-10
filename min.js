
fetch('https://restcountries.eu/rest/v2/all')
.then(respons =>respons.json())
.then(data => displyCountries(data))


const displyCountries = cuntries=>{
    const countriesDivs = document.getElementById('cuntries');
    cuntries.forEach(country => {
        const countrydiv = document.createElement('div');

        countrydiv.className= 'country';
        const countryInfo =`<h1 class="country-name" >${country.name}</h1>
        <button onclick=displycountryDetalse('${country.name}') >details </button>`

        countrydiv.innerHTML=countryInfo;
        countriesDivs.appendChild(countrydiv)
    });
}

const displycountryDetalse = name =>{
    const url=(`https://restcountries.eu/rest/v2/name/${name}`)
    fetch(url)
    .then(res=> res.json())
    .then(data =>reanderDatainfo(data[0]))
}   
const reanderDatainfo = country =>{
    const countrydiv = document.getElementById('countrydetls');
    countrydiv.innerHTML=`
        <h1>${country.name}<h1>
        <h1>${country.capital}<h1>
        <img src="${country.flag}">
        <h1><h1>
    `
    // Output ----------
}
