d3.csv('pie_chart/data/movie.csv').then(
    result => {
        draw_piechart(result)
    }
);

function draw_piechart(result){
    console.log(result);
    let piechart = document.getElementById('piechart');
    let trace111 = {};
    trace111.type = "pie";
    trace111.title = "電影銷售票數"
    trace111.labels = [];
    trace111.values = [];
    trace111.domain = {
        row:0,
        column:0
    };

    for(let x=0; x<result.length; x++){
        trace111.labels[x] = result[x]['中文片名'];
        trace111.values[x] = result[x]['銷售票數'];
    }

    let trace222 = {};
    trace222.type = "pie";
    trace222.title = "電影上映院數";
    trace222.labels = [];
    trace222.values = [];
    trace222.domain = {
        row: 0,
        column: 1
    };

    for(let x=0; x<result.length; x++){
        trace222.labels[x] = result[x]['中文片名'];
        trace222.values[x] = result[x]['上映院數'];
    }

    // let trace333 = {};
    // trace333.type = "pie";
    // trace333.title = "電影周票數變動率";
    // trace333.labels = [];
    // trace333.values = [];
    // trace333.domain = {
    //     row: 1,
    //     column: 0
    // };

    // for(let i=0; i<result.length; i++){
    //     trace333.labels[i] = result[i]['中文片名'];
    //     trace333.values[i] = result[i]['電影周票數變動率'];
    // }

    // let trace444 = {};
    // trace444.type = "pie";
    // trace444.title = "電影累計銷售金額";
    // trace444.labels = [];
    // trace444.values = [];
    // trace444.domain = {
    //     row: 1,
    //     column: 1
    // };

    // for(let i=0; i<result.length; i++){
    //     trace444.labels[i] = result[i]['中文片名'];
    //     trace444.values[i] = result[i]['累計銷售金額'];
    // }

    trace111.hole = 0.5;
    trace222.hole = 0.5;
    //trace333.hole = 0.5;
    //trace444.hole = 0.5;

    let data3 = [];
    data3.push(trace111);
    data3.push(trace222);
    //data3.push(trace333);
    //data3.push(trace444);

    let layout3 = {
        margin:{
            t:100,
            l:0,
        },
        grid:{
            rows: 2,
            columns: 2
        }
    };
    Plotly.newPlot(piechart, data3, layout3);
}