# JS-Stocks-Assignment
 
 
 
 <h1>Javascript Project 1 - Stock Exchange></h1>
______________________________________________________________________________________

Summary

In this project you will build a multipage stock exchange data website.
Push your code to a personal github repo using github classroom (a link will be provided)
Notify your mentor on each milestone you finished, and where this mentor can check this milestone for review.
This project is based on Financial Modeling Prep - FinancialModelingPrep, you can find all of the API endpoints here: Free Stock API and Financial Statements API - FMP API
You can move forward to the other milestones, but remember you need approval for each milestone, given by your mentor. 

We do not provide a design through figma, instead we add a screenshot for inspiration - but feel free to use your imagination. 
Milestones that have a decimal number are optional - do them only if you feel you have enough time. You can skip them, and return to them when you finish the mandatory milestones.

Use Live Server, do not load your files directly into the browser

!!Notice!!
In our project we will use a custom server for communicating with the API. This is the server base url: https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com
Meaning, that if you see in the documentation an endpoint like this: https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=some_api
In your code, the domain should be replaced  to the custom server domain, and look like this:  https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/profile/AAPL (without the apikey)
<br><br><br>

<h1>Milestone 1</h1>

Features
<ul>
 <li>Create a website that has a simple search input, with a search button</li>
<li>When the button is clicked, the website should load and present 10 search results from the company search in the Free Stock API, when searching in Nasdaq</li>
<li>The endpoint looks like this: https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ, where query=AA is where you put the input from the user</li>
 <li>Present the result as a list to the user</li>
 <li>Add loading indicator when making the search</li>
 <li>Each item in the list should show the company name and symbol (AAPL for Apple)</li>
<li>Each item should link to /company.html?symbol=AAPL, where AAPL should be replaced with the company symbol you received from the API request.</li>
 <li>Show loading indicator when searching.</li><br>
<img src="https://user-images.githubusercontent.com/49821742/132095648-81362d42-a139-479d-a38e-4c2316ae2bab.png" height="400px" weight="350px" style="margin-left: 200px;">


