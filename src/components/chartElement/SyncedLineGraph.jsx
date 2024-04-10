import Chart from "react-apexcharts";
const SyncedLineGraph = () => { 

      
       const series = [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }]
        const options = {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
            height: 160
          },
          colors: ['#008FFB']
        }
      
        const series2 = [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 30
          })
        }] 
        const optionsLine2 = {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
            height: 160
          },
          colors: ['#546E7A']
        }
    
        const seriesArea = [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }]

        const optionsArea = {
          chart: {
            id: 'yt',
            group: 'social',
            type: 'area',
            height: 160
          },
          colors: ['#00E396']
        }
      
        const seriesSmall = [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }]
        const optionsSmall = {
          chart: {
            id: 'ig',
            group: 'social',
            type: 'area',
            height: 160,
            width: 300
          },
          colors: ['#008FFB']
        }
      
        const seriesSmall2 = [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }]
        const optionsSmall2 = {
          chart: {
            id: 'li',
            group: 'social',
            type: 'area',
            height: 160,
            width: 300
          },
          colors: ['#546E7A']
        }


  


      return (
        <div>
          <div>
            <div id="wrapper">
              <div id="chart-line">
                <Chart
                  options={options}
                  series={series}
                  type="line"
                  height={160}
                />
              </div>
              <div id="chart-line2">
                <Chart
                  options={optionsLine2}
                  series={series2}
                  type="line"
                  height={160}
                />
              </div>
              <div id="chart-area">
                <Chart
                  options={optionsArea}
                  series={seriesArea}
                  type="area"
                  height={160}
                />
              </div>
              <div className="columns">
                <div id="chart-small">
                  <Chart
                    options={optionsSmall}
                    series={seriesSmall}
                    type="area"
                    height={160}
                    width={300}
                  />
                </div>
                <div id="chart-small2">
                  <Chart
                    options={optionsSmall2}
                    series={seriesSmall2}
                    type="area"
                    height={160}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <div id="html-dist"></div>
          </div>
        </div>
      );

  }