console.log(window.location.search); // OUTPUT  ?query=${SYMBOL}
        const urlParams = new URLSearchParams(window.location.search);
        const url = urlParams.get('query')
        console.log(url)
        const companyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${url}`;
        console.log(companyUrl);
        fetch(companyUrl).then(response => response.json()).then(data =>  {
            console.log(data);
            const info =
            `<div class="companyInfo"> 
                <div class="imageName mb-3">
                    <img src="${data.profile.image}" alt="image ${data.profile.companyName}">
                    <p>${data.profile.companyName}<span class="companyValue"> $${data.profile.price} (${data.profile.changesPercentage})</span></p>
                </div>
                <p class='symbol'>${data.symbol}</p>
                <div class="description">
                    <p class="description-par">${data.profile.description}</p>
                    <p class="symbol"><a href="${data.profile.website}" class="symbol website">${data.profile.website}</a></p>
                </div>
             </div>`
            console.log(info);
            document.querySelector('#main').insertAdjacentHTML("afterbegin", info);
        })

// window.onload = function(){ colorChanger(); }
// function colorChanger() {
//     r = document.getElementsByClassName('changesPercentage')
//     console.log(r)
// } 
// colorChanger()