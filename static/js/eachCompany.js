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
                <div class="d-flex justify-content-center align-items-center mb-3">
                    <img src="${data.profile.image}" class="rounded shadow" onerror="this.onerror=null; this.src='./static/img/default.jfif'" height="100px" width="100px" alt="image ${data.profile.companyName}">
                    <p class="fs-1 fw-bold px-5">${data.profile.companyName}<span class="companyValue"> $${data.profile.price} (<span id='colorChange'>${data.profile.changesPercentage}</span>)</span></p>
                </div>
                <p class='symbol'>${data.symbol}</p>
                <div class="description">
                    <p class="description-par">${data.profile.description}</p>
                    <p class="symbol"><a href="${data.profile.website}" class="symbol website">${data.profile.website}</a></p>
                </div>
             </div>`
            console.log(info);
           
            document.querySelector('#main').insertAdjacentHTML("afterbegin", info);
            
            const chPerc = `${data.profile.changesPercentage}`
            document.getElementById('colorChange').innerHTML = chPerc.slice(0,5)
           
            // color Changer condition
            if (chPerc > 0) {
                document.getElementById('colorChange').style.color = "blue";
                
                document.querySelector('#colorChange').insertAdjacentHTML("afterbegin", '+');
            } else {
                document.getElementById('colorChange').style.color = "red";
            }
        });
     