const apikey = "63e52ef680ab48a44c16b40c1d4480f0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search img");
const weatherIcon = document.querySelector(".cloud");
var icon = document.getElementById("icon");
const col = document.getElementsByClassName("colo");
var heartt = document.getElementById("heart");
const temp = document.getElementsByClassName("temp");

// Favorite attributes
const favoriteContainer = document.querySelector(".subcontainer");


// Array to store favorite cities
const city = document.querySelector(".citi");
const city2 = document.querySelector(".citi2");
const temperature = document.getElementsByClassName("temperature");
const favimage = document.getElementsByClassName("image");
const trashh = document.getElementsByClassName("trash");
const trashh2 = document.getElementsByClassName("trash2");
const trashh3 = document.getElementsByClassName("trash3");
const trashh4 = document.getElementsByClassName("trash4");
const trashh5 = document.getElementsByClassName("trash5");
let favorites = [];


function totalDisplay(leng)
{
    if(leng === 0)
    {
        document.querySelector(".outsubcon1").style.display = "none";
        document.querySelector(".outsubcon2").style.display = "none";
        document.querySelector(".outsubcon3").style.display = "none";
        // document.querySelector(".outsubcon4").style.display = "none";
        // document.querySelector(".outsubcon5").style.display = "none";
    }
    if(leng === 1)
    {
        document.querySelector(".outsubcon1").style.display = "block";
        document.querySelector(".outsubcon2").style.display = "none";
        document.querySelector(".outsubcon3").style.display = "none";
        // document.querySelector(".outsubcon4").style.display = "none";
        // document.querySelector(".outsubcon5").style.display = "none";
    }
    else if(leng === 2)
    {
        document.querySelector(".outsubcon1").style.display = "block";
        document.querySelector(".outsubcon2").style.display = "block";
        document.querySelector(".outsubcon3").style.display = "none";
        // document.querySelector(".outsubcon4").style.display = "none";
        // document.querySelector(".outsubcon5").style.display = "none";
    }
    else if(leng === 3)
    {
        document.querySelector(".outsubcon1").style.display = "block";
        document.querySelector(".outsubcon2").style.display = "block";
        document.querySelector(".outsubcon3").style.display = "block";
        // document.querySelector(".outsubcon4").style.display = "none";
        // document.querySelector(".outsubcon5").style.display = "none";
    }
    // else if(leng === 4)
    // {
    //     document.querySelector(".outsubcon1").style.display = "block";
    //     document.querySelector(".outsubcon2").style.display = "block";
    //     document.querySelector(".outsubcon3").style.display = "block";
    //     document.querySelector(".outsubcon4").style.display = "block";
    //     document.querySelector(".outsubcon5").style.display = "none";
    // }
    // else if(leng === 5)
    // {
    //     document.querySelector(".outsubcon1").style.display = "block";
    //     document.querySelector(".outsubcon2").style.display = "block";
    //     document.querySelector(".outsubcon3").style.display = "block";
    //     document.querySelector(".outsubcon4").style.display = "block";
    //     document.querySelector(".outsubcon5").style.display = "block";
    // }
}

document.querySelector(".favdisplay").style.display = "none";

async function loop(favorite){
    let leng = favorite.length;
    totalDisplay(leng);
    for(i = 0; i < leng; i++)
    {
        const response = await fetch(apiUrl + favorite[i] + `&appid=${apikey}`);
        var data = await response.json();
        // console.log(data);
        if(i === 0)
        {
            document.querySelector(".citi").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
            
            if(data.weather[0].main === "Clouds")
            {
                document.querySelector(".image").src = "clouds.png";
            }
            else if(data.weather[0].main === "Clear")
            {
                document.querySelector(".image").src = "clear.png";
            }
            else if(data.weather[0].main === "Rain")
            {
                document.querySelector(".image").src = "raining.png";
            }
            else if(data.weather[0].main === "Drizzle")
            {
                document.querySelector(".image").src = "drizzle.png";
            }
            else if(data.weather[0].main === "Mist")
            {
                document.querySelector(".image").src = "mist.png";
            }
            else if(data.weather[0].main === "Foggy")
            {
                document.querySelector(".image").src = "fog.png";
            }
            else if(data.weather[0].main === "Haze")
            {
                document.querySelector(".image").src = "haze.png";
            }
        }
        else if(i === 1){
            document.querySelector(".citi2").innerHTML = data.name;
            document.querySelector(".temperature2").innerHTML = Math.round(data.main.temp) + "°C";
            
            if(data.weather[0].main === "Clouds")
            {
                document.querySelector(".image2").src = "clouds.png";
            }
            else if(data.weather[0].main === "Clear")
            {
                document.querySelector(".image2").src = "clear.png";
            }
            else if(data.weather[0].main === "Rain")
            {
                document.querySelector(".image2").src = "raining.png";
            }
            else if(data.weather[0].main === "Drizzle")
            {
                document.querySelector(".image2").src = "drizzle.png";
            }
            else if(data.weather[0].main === "Mist")
            {
                document.querySelector(".image2").src = "mist.png";
            }
            else if(data.weather[0].main === "Foggy")
            {
                document.querySelector(".image2").src = "fog.png";
            }
            else if(data.weather[0].main === "Haze")
            {
                document.querySelector(".image2").src = "haze.png";
            }
        }
        else if(i === 2){
            document.querySelector(".citi3").innerHTML = data.name;
            document.querySelector(".temperature3").innerHTML = Math.round(data.main.temp) + "°C";
            
            if(data.weather[0].main === "Clouds")
            {
                document.querySelector(".image3").src = "clouds.png";
            }
            else if(data.weather[0].main === "Clear")
            {
                document.querySelector(".image3").src = "clear.png";
            }
            else if(data.weather[0].main === "Rain")
            {
                document.querySelector(".image3").src = "raining.png";
            }
            else if(data.weather[0].main === "Drizzle")
            {
                document.querySelector(".image3").src = "drizzle.png";
            }
            else if(data.weather[0].main === "Mist")
            {
                document.querySelector(".image3").src = "mist.png";
            }
            else if(data.weather[0].main === "Foggy")
            {
                document.querySelector(".image3").src = "fog.png";
            }
            else if(data.weather[0].main === "Haze")
            {
                document.querySelector(".image3").src = "haze.png";
            }
        }
        // else if(i === 3){
        //     document.querySelector(".citi4").innerHTML = data.name;
        //     document.querySelector(".temperature4").innerHTML = Math.round(data.main.temp) + "°C";

        //     if(data.weather[0].main === "Clouds")
        //     {
        //         document.querySelector(".image4").src = "clouds.png";
        //     }
        //     else if(data.weather[0].main === "Clear")
        //     {
        //         document.querySelector(".image4").src = "clear.png";
        //     }
        //     else if(data.weather[0].main === "Rain")
        //     {
        //         document.querySelector(".image4").src = "raining.png";
        //     }
        //     else if(data.weather[0].main === "Drizzle")
        //     {
        //         document.querySelector(".image4").src = "drizzle.png";
        //     }
        //     else if(data.weather[0].main === "Mist")
        //     {
        //         document.querySelector(".image4").src = "mist.png";
        //     }
        //     else if(data.weather[0].main === "Foggy")
        //     {
        //         document.querySelector(".image4").src = "fog.png";
        //     }
        //     else if(data.weather[0].main === "Haze")
        //     {
        //         document.querySelector(".image4").src = "haze.png";
        //     }
        // }
        // else if(i === 4){
        //     document.querySelector(".citi5").innerHTML = data.name;
        //     document.querySelector(".temperature5").innerHTML = Math.round(data.main.temp) + "°C";

        //     if(data.weather[0].main === "Clouds")
        //     {
        //         document.querySelector(".image5").src = "clouds.png";
        //     }
        //     else if(data.weather[0].main === "Clear")
        //     {
        //         document.querySelector(".image5").src = "clear.png";
        //     }
        //     else if(data.weather[0].main === "Rain")
        //     {
        //         document.querySelector(".image5").src = "raining.png";
        //     }
        //     else if(data.weather[0].main === "Drizzle")
        //     {
        //         document.querySelector(".image5").src = "drizzle.png";
        //     }
        //     else if(data.weather[0].main === "Mist")
        //     {
        //         document.querySelector(".image5").src = "mist.png";
        //     }
        //     else if(data.weather[0].main === "Foggy")
        //     {
        //         document.querySelector(".image5").src = "fog.png";
        //     }
        //     else if(data.weather[0].main === "Haze")
        //     {
        //         document.querySelector(".image5").src = "haze.png";
        //     }
        // }

        document.querySelector(".favdisplay").style.display = "block";
    }
}

heartt.onclick = async function(){
    if(searchBox.value === "") {
        alert("Please enter a city name first.");
        return;
    }
    for(i = 0; i < favorites.length; i++)
        if(searchBox.value === favorites[i])
        {
            heartt.src = "addfavorite.png";
            
        }
    document.body.classList.toggle("addtofavorite");
    if(document.body.classList.contains("addtofavorite")) {
        heartt.src = "addfavorite.png";
        if(favorites.length >= 3) {
            alert("You cannot add more than 3 weathers.");
            heartt.src = "removefavorite.png";
            return;
        } else {
            for(i = 0; i < favorites.length; i++)
                if(searchBox.value === favorites[i])
                {
                    heartt.src = "addfavorite.png";
                    return;
                }
            favorites.push(searchBox.value);
            loop(favorites);
        }
    } else {
        heartt.src = "removefavorite.png";
    }
}

searchBtn.onclick = function(){
    for(i = 0; i < favorites.length; i++){
        if(searchBox.value === favorites[i])
        {
            heartt.src = "addfavorite.png";
            
        }
        else{
            heartt.src = "removefavorite.png";
        }
    }
}
// TRASH BUTTON # 01
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('trash')) {
        if(favorites.length === 1)
        {
            favorites.splice(0);
            totalDisplay(favorites.length);
            heartt.src = "removefavorite.png";
            // console.log(favorites);
            return;
        }
        else if(favorites.length === 2)
        {
            const citiElement1 = document.querySelector(".citi");
            const citiElement2 = document.querySelector(".citi2");
            citiElement1.textContent = citiElement2.textContent;

            const tempElement1 = document.querySelector(".temperature");
            const tempElement2 = document.querySelector(".temperature2");
            tempElement1.textContent = tempElement2.textContent;

            const imgElement1 = document.querySelector(".image");
            const imgElement2 = document.querySelector(".image2");
            imgElement1.src = imgElement2.src;

            favorites.splice(1);
            totalDisplay(favorites.length);
            heartt.src = "removefavorite.png";
            // console.log(favorites);
            return;
        }
        else if(favorites.length === 3)
        {
            const citiElement1 = document.querySelector(".citi");
            const citiElement2 = document.querySelector(".citi2");
            citiElement1.textContent = citiElement2.textContent;

            const citiElement3 = document.querySelector(".citi3");
            citiElement2.textContent = citiElement3.textContent;

            const tempElement1 = document.querySelector(".temperature");
            const tempElement2 = document.querySelector(".temperature2");
            tempElement1.textContent = tempElement2.textContent;

            const tempElement3 = document.querySelector(".temperature3");
            tempElement2.textContent = tempElement3.textContent;

            const imgElement1 = document.querySelector(".image");
            const imgElement2 = document.querySelector(".image2");
            imgElement1.src = imgElement2.src;

            const imgElement3 = document.querySelector(".image3");
            imgElement2.src = imgElement3.src;

            favorites.splice(2);
            totalDisplay(favorites.length);
            heartt.src = "removefavorite.png";
            // console.log(favorites);
            return;
        }
        // REPLACING CITIES 
        // const citiElement1 = document.querySelector(".citi");
        // const citiElement2 = document.querySelector(".citi2");
        // citiElement1.textContent = citiElement2.textContent;

        // const citiElement3 = document.querySelector(".citi3");
        // citiElement2.textContent = citiElement3.textContent;

        // const citiElement4 = document.querySelector(".citi4");
        // citiElement3.textContent = citiElement4.textContent;

        // const citiElement5 = document.querySelector(".citi5");
        // citiElement4.textContent = citiElement5.textContent;

        // // REPLACING TEMPERATURE 
        // const tempElement1 = document.querySelector(".temperature");
        // const tempElement2 = document.querySelector(".temperature2");
        // tempElement1.textContent = tempElement2.textContent;

        // const tempElement3 = document.querySelector(".temperature3");
        // tempElement2.textContent = tempElement3.textContent;

        // const tempElement4 = document.querySelector(".temperature4");
        // tempElement3.textContent = tempElement4.textContent;

        // const tempElement5 = document.querySelector(".temperature5");
        // tempElement4.textContent = tempElement5.textContent;

        // // REPLACING IMAGES 
        // const imgElement1 = document.querySelector(".image");
        // const imgElement2 = document.querySelector(".image2");
        // imgElement1.src = imgElement2.src;

        // const imgElement3 = document.querySelector(".image3");
        // imgElement2.src = imgElement3.src;

        // const imgElement4 = document.querySelector(".image4");
        // imgElement3.src = imgElement4.src;

        // const imgElement5 = document.querySelector(".image5");
        // imgElement4.src = imgElement5.src;

        
        // if(favorites.length === 2)
        // {
        //     favorites[0] = favorites[1];
        //     favorites.splice(1);
        // }
        
        // totalDisplay(favorites.length);
        // heartt.src = "removefavorite.png";
        // console.log(favorites);
    }
});

// TRASH BUTTON # 02
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('trash2')) {
        if(favorites.length === 2)
        {
            favorites.splice(1);
            totalDisplay(favorites.length);
            heartt.src = "removefavorite.png";
            // console.log(favorites);
            return;
        }
        // REPLACING CITIES 
        const citiElement2 = document.querySelector(".citi2");
        const citiElement3 = document.querySelector(".citi3");
        citiElement2.textContent = citiElement3.textContent;

        // REPLACING TEMPERATURE 
        const tempElement2 = document.querySelector(".temperature2");
        const tempElement3 = document.querySelector(".temperature3");
        tempElement2.textContent = tempElement3.textContent;

        // REPLACING IMAGES 
        const imgElement2 = document.querySelector(".image2");
        const imgElement3 = document.querySelector(".image3");
        imgElement2.src = imgElement3.src;
        
        favorites.splice(2);
        totalDisplay(favorites.length);
        heartt.src = "removefavorite.png";
        // console.log(favorites);
    }
});

// TRASH BUTTON # 03
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('trash3')) {
        favorites.splice(2);
        totalDisplay(favorites.length);
        heartt.src = "removefavorite.png";
        // console.log(favorites);
        return;
    }
});

// TRASH BUTTON # 04
// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('trash4')) {
//         if(favorites.length === 4)
//         {
//             favorites.splice(3);
//             totalDisplay(favorites.length);
//             heartt.src = "removefavorite.png";
//             // console.log(favorites);
//             return;
//         }
//         // REPLACING CITIES 
//         const citiElement4 = document.querySelector(".citi4");
//         const citiElement5 = document.querySelector(".citi5");
//         citiElement4.textContent = citiElement5.textContent;

//         // REPLACING TEMPERATURE 
//         const tempElement3 = document.querySelector(".temperature3");
//         const tempElement4 = document.querySelector(".temperature4");
//         tempElement3.textContent = tempElement4.textContent;

//         const tempElement5 = document.querySelector(".temperature5");
//         tempElement4.textContent = tempElement5.textContent;

//         // REPLACING IMAGES 
//         const imgElement3 = document.querySelector(".image3");
//         const imgElement4 = document.querySelector(".image4");
//         imgElement3.src = imgElement4.src;

//         const imgElement5 = document.querySelector(".image5");
//         imgElement4.src = imgElement5.src;

        
//         if(favorites.length === 4)
//         {
//             favorites[3] = favorites[4];
//             favorites.splice(4);
//         }
        
//         totalDisplay(favorites.length);
//         heartt.src = "removefavorite.png";
//         console.log(favorites);
//     }
// });

// TRASH BUTTON # 05
// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('trash5')) {
//         favorites.splice(4);
//         totalDisplay(favorites.length);
//         heartt.src = "removefavorite.png";
//         // console.log(favorites);
//         return;
//     }
// });
// console.log(favorites);
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }
    else{
        icon.src = "moon.png";       
    }
}

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "raining.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Foggy")
        {
            weatherIcon.src = "fog.png";
        }
        else if(data.weather[0].main == "Haze")
        {
            weatherIcon.src = "haze.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }    
}

searchBtn.addEventListener("click", () =>{
    if(searchBox.value === "")
    {
        alert("Please enter a city name first.");
        return;
    }
    checkWeather(searchBox.value);
});


const hoDisplay = document.querySelector(".favHome");
const favDisplay = document.querySelector(".hoFavorite");

hoDisplay.onclick = function()
{
    document.querySelector(".container").style.display = "block";
    document.querySelector(".favcontainer").style.display = "none";
}
favDisplay.onclick = function()
{
    document.querySelector(".container").style.display = "none";
    document.querySelector(".favcontainer").style.display = "block";
}

document.querySelector(".favcontainer").style.display = "none";