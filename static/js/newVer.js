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
                        console.log(data.profile.companyName);
                        console.log(data.symbol);
                        console.log(data.profile.website)
                        // data.map(info => {
                        //     return  `
                        //         <div  id="companyLink" class="companyProfile">
                        //             <a  class="companyLink">
                        //                 <img src="" alt="">
                        //                 <span class="listItem">
                        //                     ${info.profile.companyName} (${info.symbol})
                        //                 </span> 
                        //             </a>
                        //         </div> 
                        //         `
                        //     }).join(" ");
                        
                        const companyRow = `
                                <div  id="companyLink" >
                                    <a href="${data.profile.website}" class="companyProfile" target="_blank">
                                        <img src="${data.profile.image}" onerror="this.onerror=null; this.src='./static/img/default.jfif'" alt="" height="50px" weight="50px">
                                        <span class="listItem">
                                            ${data.profile.companyName} (${data.symbol})
                                        </span> 
                                    </a>
                                </div> 
                                `
                                console.log(companyRow);
                                setTimeout(function(){document.querySelector('#appearListOnClick').insertAdjacentHTML("afterbegin", companyRow);}, 1000);
                        })
                        

                    // const companyData = data.map(companyInfo => {
                    //     return `
                    //     <div  id="companyLink" class="companyProfile">
                    //         <a  class="companyLink">
                    //             <img src="" alt="">
                    //             <span class="listItem">
                    //                 ${companyInfo.name} (${companyInfo.symbol})
                    //             </span> 
                    //         </a>
                    //     </div> 
                    //     `
                    // }).join(" ");
                    // console.log(companyData);
                })
                
                // setTimeout(function(){document.querySelector('#appearListOnClick').insertAdjacentHTML("afterbegin", companyData);}, 3000);
            })
        })
    )}

fetchData();