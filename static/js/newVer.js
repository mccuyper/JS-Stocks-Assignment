const searchButton = document.getElementById('searchButton');
const showStockList = document.getElementById('appearListOnClick');

function fetchData() {
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
                data.forEach((company, index) => {
                    console.log('element['+index+']='+company.name+' ('+company.symbol+')');

                    const companyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${company.symbol}`;
                    fetch(companyUrl)
                    .then(response => {
                        if (!response.ok) {
                            return Error("ERROR");
                        }
                        return response.json();
                    })
                    .then(data => {
                        const companyRow = `
                                <div  id="companyLink" class="d-flex align-items-center justify-content-between p-1" >
                                    <a href="${data.profile.website}" class="companyProfile" target="_blank">
                                        <img src="${data.profile.image}" onerror="this.onerror=null; this.src='./static/img/default.jfif'" alt="" height="50" width="50">
                                        <span class="listItem">
                                            ${data.profile.companyName}</span></a>
                                                  
                                            <p class="percent">(<span id='colorChange'>${data.profile.changesPercentage}</span>%)</p> 
                                            <a href="./company.html?query=${data.symbol}" class="btn btn-primary">${data.symbol}</a>                            
                                </div>`
                                
                                // console.log(companyRow);
                                setTimeout(function(){document.querySelector('#appearListOnClick').insertAdjacentHTML("afterbegin", companyRow);
                                const chPerc = `${data.profile.changesPercentage}`
                                document.getElementById('colorChange').innerHTML = chPerc.slice(0,5)
                               
                                // color Changer condition
                                if (chPerc > 0) {
                                    document.getElementById('colorChange').style.color = "green";
                                    
                                    document.querySelector('#colorChange').insertAdjacentHTML("afterbegin", '+');
                                } else {
                                    document.getElementById('colorChange').style.color = "red";
                                }}, 1000);
                        })
                })              
            })
        })
    )}

fetchData();

