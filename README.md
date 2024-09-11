# Thesis-Build



## Overview

A continuation of the build for the Stock Visualisation app I made for my thesis as a way of exhibiting modern web development tools and how much more accessible they have become. The application itself is a tool that visualises stock data in a chart, with candlestick values and line values to display the data, as well as the means to advance in time to witness the progression of the stock value over the course of a year. The application itself was also built at no-cost, using only free tools and unpaid tiers in order to provide a working example.

It was built with 
  - React
  - ApexCharts
  - Node
  - Express
  - Mongodb
  - Date -fns
  - Preact Signals
  - react-search-autocomplete

It also uses a custom dataset representing Small-Cap stock values, a choice made as it fit the thesis' supposition that as web development becomes more accessible it means more specialised products can be built to cater to niche demands. In this case providing a tool to help users study and learn the trading patterns of a volatile but rewarding trading cap in order to help make safer investments.

The application itself consists of:
  - Three chart components
    - Two Candlestick
    - One Line
  - A searchbar component
  - A date progression button
  - Two period selector dropdown menus
  - Two unit of time selector dropdown menus



## Description

The initial page will display the the top 5 companies of the given date, refreshing for each new date, and if the user searches for company names in the searchbar it will render two new charts below this where they can see the stock's history in both line and candlestick forms with the ability to select different periods and units to display the data for each chart.

In order to provide the required data for displaying small cap stock history at no cost, a large dataset had to be whittled down into a small enough size to fit into MongoDB Atlas's limitations, which is why there's only data for 2016, as the stock history for each selected company takes up a considerable amount of the available space. The data also had to be optimised for better performance, which consumed more of the limited space.



## Current State

The application is close to functional completion, having expanded on the original thesis version with new features and a differentl code base structure. Currently the transition between months results in updated data being retrieved from the server needs to be fixed and the end of the timeline has yet to be given a handler. The code is also due a clean up, with a degree of refactoring happening during development that will need to be applied to code that has not been altered since first written.



## Future Updates

As this application is meant mostly as a means of practicing concepts and learning new techniques, additional features will be added in the future. Currently, owing to the difficulty in build the entire application at no-cost, there are several limitations in what was possible with the application, specifically in regards to the dataset and the retrieval of the data from mongodb in the free-tier.

Currently the server connects to a locally hosted database, as it allows for more freedom for experimentation than the Atlas one, but eventually the application will be hosted online. Another feature to be considered would be allowing the user to buy and trade stock, turning it into a trading simulator. The algorithms required for understanding how investments can alter the value of a stock are beyond me though, as that kind of maths is a totally different industry and if I knew it I wouldn't be building no-cost web applications, that's for sure.
