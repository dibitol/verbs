let jso,
    inter;
function preload(){
    let url = "https://raw.githubusercontent.com/Drulac/English-Verbs-Conjugates/master/verbs-conjugations.json";
    jso = loadJSON(url);
    }
function setup(){
    noCanvas();
    selectAll("button")[0].mouseOver(()=>{
        inter = setInterval(()=>{
            selectAll("button")[0].style("background-color", color(floor(random(255)),floor(random(255)),floor(random(255))));
        },1);
    });
    selectAll("button")[0].mouseOut(()=>{
        clearInterval(inter);
        selectAll("button")[0].style("background-color", color(255));

     });
     selectAll("button")[1].mouseOver(()=>{
        inter = setInterval(()=>{
            selectAll("button")[1].style("background-color", color(floor(random(255)),floor(random(255)),floor(random(255))));
        },1);

    });
    selectAll("button")[1].mouseOut(()=>{
        clearInterval(inter);
        selectAll("button")[1].style("background-color", color(255));

     });
    let select1 = select("#selection1");
    select1.mousePressed(()=>{
        select("#textarea").style("display:block");
        select("#textarea").value("");
        select("#searchbutton1").style("display:block");
        select("#searchbutton2").style("display:none");

        select("#form1").html("");
        select("#form2").html("");
        select("#form3").html("");

    });
    let select2 = select("#selection2");
    select2.mousePressed(()=>{
        select("#textarea").style("display:none");
        select("#searchbutton1").style("display:none");
        select("#searchbutton2").style("display:block");

        select("#form1").html("");
        select("#form2").html("");
        select("#form3").html("");
    });
    let button1 = select("#searchbutton1");
    button1.mousePressed(()=>{
        let textarea = select("#textarea");
        if(textarea.elt.value.trim() == ""){
            alert("bızz");
            select("#textarea").value("");
        }
        else{
        var f = false;
        for(let i=0;i<Object.keys(jso).length;i++){
            if(textarea.elt.value==jso[i].infinitive){
                f = true;
                select("#form1").html(jso[i].indicative.present[0]);
                select("#form2").html(jso[i].indicative.imperfect[0]);
                select("#form3").html(jso[i].indicative.perfect[0]);
            }         
        }
        if(!f){
            alert("bızz")
            select("#textarea").value("");
        }
        }
    });
    let button2 = select("#searchbutton2");
    button2.mousePressed(()=>{
        const index = floor(random(Object.keys(jso).length));
        for(let i=0;i<Object.keys(jso).length;i++){
            if(index==i){
                select("#form1").html(jso[i].indicative.present[0]);
                select("#form2").html(jso[i].indicative.imperfect[0]);
                select("#form3").html(jso[i].indicative.perfect[0]);
            }
        }
    });
}
function draw(){
    select("#footer").style("color", color(floor(random(100))));
    select("#footer").style("margin-left", `${floor(random(10))}px`);    
}