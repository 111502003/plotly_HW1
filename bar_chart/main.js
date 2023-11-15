d3.csv('bar_chart/data/acidr.csv').then(
    rest => {
        draw_barchart(rest)
    }
);

function draw_barchart(rest){
    console.log(rest)
    let barchart = document.getElementById('barchart');
    let trace11 = {};
    trace11.type = "bar";
    trace11.name = "cl"
    trace11.x = [];
    trace11.y = [];

    for(let i=0; i<10; i++){
        trace11.x[i] = rest[i]['county'];
        trace11.y[i] = rest[i]['cl'];
    }

    trace11.text = trace11.y;
    trace11.textfront = {
        color:'white',
        size:15
    };

    let trace22 = {};
    trace22.type = "bar";
    trace22.name = "no3"
    trace22.x = [];
    trace22.y = [];

    for(let i=0; i<10; i++){
        trace22.x[i] = rest[i]['county'];
        trace22.y[i] = rest[i]['no3'];
    }

    trace22.text = trace22.y;
    trace22.textfront = {
        color:'white',
        size:15
    };

    let trace33 = {};
    trace33.type = "bar";
    trace33.name = "so42"
    trace33.x = [];
    trace33.y = [];

    for(let i=0; i<10; i++){
        trace33.x[i] = rest[i]['county'];
        trace33.y[i] = rest[i]['so42'];
    }

    trace33.text = trace33.y;
    trace33.textfront = {
        color:'white',
        size:15
    };

    let data2 = [];
    data2.push(trace11);
    data2.push(trace22);
    data2.push(trace33);

    let layout2 = {
        title:'台灣各地空汙比較',
        margin:{
            t:50
        },
        barmode:'stack'
    };
    
    Plotly.newPlot(barchart, data2, layout2);
}