d3.csv('line_scatter_final/data/movie.csv').then(
    res => {
        draw_line_scatter(res)
    }
);

function draw_line_scatter(res){
    console.log(res)
    let line_scatter = document.getElementById('line_scatter');

    let trace1 = {};
    trace1.mode = "markers+text";
    trace1.type = "scatter";
    trace1.name = "電影上映院數";
    trace1.visible = true;
    trace1.marker = {
        size:10
    };
    trace1.x = [];
    trace1.y = [];
    trace1.text = [];
    trace1.textposition = "bottom left";
    trace1.textfont = {
        family:"Raleway, sans-serif",
        size:10
    };

    for(let i=19; i<28; i++){
        trace1.x[i] = res[i]['中文片名'];
        trace1.y[i] = res[i]['上映院數'];
        trace1.text[i] = res[i]['上映院數'];
    }

    let trace2 = {};
    trace2.mode = "lines";
    trace2.type = "scatter";
    trace2.name = "電影周票數變動";
    trace2.visible = false;
    trace2.line = {
        color:'red'
    };
    trace2.x = [];
    trace2.y = [];
    trace2.text = [];

    for(let i=19; i<28; i++){
        trace2.x[i] = res[i]['中文片名'];
        trace2.y[i] = res[i]['週票數變動率'];
    }

    let trace3 = {};
    trace3.mode = "lines+markers";
    trace3.type = "scatter";
    trace3.name = "銷售票數";
    trace3.visible = false;
    trace3.line={
        color:'green',
        shape:'spline'
    };
    trace3.x = [];
    trace3.y = [];
    trace3.text = [];

    for (let i=19; i<28; i++){
        trace3.x[i] = res[i]['中文片名'];
        trace3.y[i] = res[i]['銷售票數'];
        // trace3.text[i] = set3[i][2];
    }

    let data1 = [];
    data1.push(trace1);
    data1.push(trace2);
    data1.push(trace3);

    let layout1 = {
        title:'全國電影票房統計數據',
        margin: { 
            t: 50
        },
        // xaxis:{
        //     range:[0, 6]
        // },
        // yaxis:{
        //     range:[0, 25]
        // },

        updatemenus:[{
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[{
                method:'restyle',
                args:['visible', [true, false, false]],
                label:'電影上映院數'
            },
            {
                method:'restyle',
                args:['visible', [false ,true , false]],
                label:'電影周票數變動'
            },
            {
                method:'restyle',
                args:['visible', [false, false, true]],
                label:'電影銷售票數'
            },
            // {
            //     method:'restyle',
            //     args:['visible', [true, true, true]],
            //     label:'Display All'
            // }
            ]
        }
        ]
    };


    Plotly.newPlot(line_scatter, data1, layout1);
}