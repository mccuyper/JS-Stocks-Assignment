console.log(window.location.search);
        const urlParams = new URLSearchParams(window.location.search);
        const url = urlParams.get('query')
        console.log(url)
        const companyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${url}`;
        console.log(companyUrl);
        fetch(companyUrl).then(response => response.json()).then(data =>  {
            console.log(data);
            const info =
             `  <p>${data.profile.companyName}</p>
                <p>${data.profile.description}</p>
                <p>${data.profile.website}</p>
                <p>${data.profile.price}</p>
                <p>${data.profile.changesPercentage}</p>
                <p>${data.symbol}</p>`
            console.log(info);
            document.querySelector('#main').insertAdjacentHTML("afterbegin", info);
        })