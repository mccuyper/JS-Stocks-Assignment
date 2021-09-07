
const searchButton = document.getElementById('searchButton');
const showStockList = document.getElementById('appearListOnClick');

function fetchData(){
    searchButton.addEventListener(
        'click', (search = (searchValue) => {
            showStockList.innerHTML = '';
            // get input
            searchValue = document.querySelector('.search-bar').value;
            const symbol = searchValue;
            const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${symbol}&limit=10&exchange=NASDAQ`
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    return Error("ERROR");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const companyData = data.map(companyName => {
                    return `
                    <span class="listItem">${companyName.name} (${companyName.symbol})</span>  
                    `
                }).join(" ");
                
            
                console.log(companyData)

                data.forEach((company, index, arr) => {
                    // console.log(company) - object
                    console.log('a['+index+']='+company.name)
                    const companyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${company.symbol}`;
                    fetch(companyUrl)
                    .then(response => {
                        if (!response.ok) {
                            return Error("ERROR");
                        }
                        return response.json();
                    })
                    .then(data => {
                        const profileArray = [];
                        profileArray.push(data);
                        uniqueProfile = [...profileArray];
                        console.log(uniqueProfile);
                        profileArray.forEach((company, index) =>{
                            let image = company.profile.image;
                            console.log(company.symbol)
                                            
                            let companyImage = document.createElement(`img`);
                            companyImage.setAttribute(`src`, image);
                            companyImage.setAttribute(`height`, `50px`);
                            companyImage.setAttribute(`weight`, `50px`);
                            const test = document.querySelector("#appearListOnClick").insertAdjacentElement("beforeend",companyImage);
                            console.log(test)
                            // document.getElementById("companyProfile").appendChild(companyImage);
                            console.log(companyImage)
                            // const link = document.querySelector('.companyProfile')
                            // link.insertAdjacentElement('afterbegin', companyImage)
                            // console.log(link)

                          
                            // const companyImage = document.getElementById("companyImg")
                            // console.log(companyImage)
                            // companyImage.setAttribute(`src`, image)
                            // console.log(image)
                            // console.log(document.getElementById('companyImg'))

                        })
                        
                    })
                    
                })


                // Timeout to appear after clicking on searchButton
                setTimeout(function(){document.querySelector('#appearListOnClick').insertAdjacentHTML("afterbegin", companyData);}, 1000);
                
            })
            
           


            .catch(error => {
                console.log(error);
            });
        })
)
}

fetchData();


