const weatherbtn = async () => {

    const cityName = document.getElementById('cityName')
    const cityNameInput = cityName.value

    cityName.value = ''

    // api linkup
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=22ff956ef9e5ed8fe9d3b5d99917c389`

    const res = await fetch(url)
    const data = await res.json()
    showDetails(data)

}
const showDetails = info => {
    // console.log(info)
    const alldetails = document.getElementById('details')
    alldetails.innerHTML = `

        <img src="http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" alt="">
            <h1>${info.name}</h1>
            <h3><span>${parseInt((info.main.temp) - 272.15)}</span>&deg;C</h3>
            <h1 class="lead">${info.weather[0].description}</h1>

`
}
// console.log('hi')