
    const search = () => {
        const searchbox = document.getElementById("search-city").value.toUpperCase();
        const citylist = document.getElementById("city-list")
        const cities = document.querySelectorAll(".card")
        const cityname = citylist.getElementsByTagName("h2")
        for(var i=0; i<cityname.length; i++){
            let match = cities[i].getElementsByTagName('h2')[0];
            if(match){
                let textvalue = match.textContent || match.innerHTML
                if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                    cities[i].style.display = "";
                }
                else{
                    cities[i].style.display = "none";
                }
            }
        }
    }
