const popularStocks = ['IBM', "AAPL", "AMZN", "FB", "TSLA","AMD","NFLX","TMUS","FOX","GOOGL","IPG","ROKU","JNJ","DIS","UWMC","SAGE","ATH","NLY","COP","LPX","CMG","GME","CLF","PFE","BNTX","KO"]
const newList = []
for (let i=0; i<popularStocks.length -1; i++) {
    // console.log(popularStocks[i])
    const companyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${popularStocks[i]}`;
    // console.log(companyUrl)
    fetch(companyUrl)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        const perChangeSliced = `${data.profile.changesPercentage}`
        const setList = `
            <li>${data.symbol} (<span id='percSliced'>${perChangeSliced}</span>%)</li>
        `
        document.querySelector('#stockList').insertAdjacentHTML("afterbegin", setList);
        document.getElementById('percSliced').innerHTML = perChangeSliced.slice(0,4)
        if (perChangeSliced > 0) {
            document.getElementById('percSliced').style.color = "green";
            
            document.querySelector('#percSliced').insertAdjacentHTML("afterbegin", '+');
        } else {
            document.getElementById('percSliced').style.color = "red";
        }
    })
}
