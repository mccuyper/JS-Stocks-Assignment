console.log(window.location.search); // OUTPUT  ?query=${SYMBOL}
        const urlParams = new URLSearchParams(window.location.search);
        const url = urlParams.get('query')
        console.log(url)
        const companyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${url}`;
        const historyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${url}?serietype=line
        `
        console.log(companyUrl);
        console.log(historyUrl);
        fetch(companyUrl)
        .then(response => response.json())
        .then(data =>  {
            console.log(data);
            const info =
            `<div class="companyInfo"> 
                <div class="d-flex justify-content-center align-items-center mb-3">
                    <img src="${data.profile.image}" class="rounded shadow" onerror="this.onerror=null; this.src='./static/img/default.jfif'" height="100px" width="100px" alt="image ${data.profile.companyName}">
                    <p class="fs-1 fw-bold px-5">${data.profile.companyName}<span class="companyValue"> $${data.profile.price} <span id='colorChange'>${data.profile.changesPercentage}</span></span></p>
                </div>
                <p class='fs-1 fw-bold text-center'>${data.symbol}</p>
                <div class="description">
                    <p class="description-par">${data.profile.description}</p>
                    <p class="symbol"><a href="${data.profile.website}" class="symbol website">${data.profile.website}</a></p>
                </div>
             </div>`
            console.log(info);
            document.title = `${data.symbol} ${data.profile.companyName}`
            setTimeout(function() {
            document.querySelector('#main').insertAdjacentHTML("afterbegin", info);
            
            const chPerc = `${data.profile.changesPercentage}`
            
            document.getElementById('colorChange').innerHTML = chPerc.slice(0,5)
           
            // color Changer condition
            if (chPerc > 0) {
                document.getElementById('colorChange').style.color = "green";
                
                document.querySelector('#colorChange').insertAdjacentHTML("afterbegin", '(+');
                document.querySelector('#colorChange').insertAdjacentHTML("beforeend", '%)');
            } else {
                document.getElementById('colorChange').style.color = "red";
                document.querySelector('#colorChange').insertAdjacentHTML("afterbegin", '(');
                document.querySelector('#colorChange').insertAdjacentHTML("beforeend", '%)');
            }
        }, 4000)
        });
     
        setTimeout(function(){
            document.getElementById('loadSpinner').style.display='none';
        }, 4000)
        fetch(historyUrl)
        .then(r => r.json()).then(historyData => {
            const hLabels = []
            const hClose = []
            setTimeout(function(){
            for (let i=0; i<10; i++ ){
                const label = `${historyData.historical[i].date}`
                hLabels.push(label)
                // console.log(hLabels)
                const dataSet = `${historyData.historical[i].close}`
                hClose.push(dataSet)
                // console.log(hClose)
            }
            const labels = hLabels.reverse();
            const data = {
                labels: labels,
                datasets: [{
                  label: 'Stock Price',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: hClose.reverse(),
                }]
              };
              
            const config = {
                type: 'line',
                data: data,
                options: {}
              };
              var myChart = new Chart(
                document.getElementById('myChart'),
                config
              );
            }, 4000)
            // console.log(historyData)
        })