// Data Elements

var states = ["", "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "DC", "Florida", "Georgia", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

var stuIS25 = 31000;
var stuIS50 = 36600;
var stuIS75 = 48000;
var stuOS25 = 73000;
var stuOS50 = 93000;
var stuOS75 = 117000;

var wor25 = 38700;
var wor50 = 44000;
var wor75 = 49500;

var liv25 = 21300;
var liv50 = 22190;
var liv75 = 24400;

var res = ["", "Yes", "No"];

var stuState = [];
var stuStateName = [];
var uniName = [];
var resStatus = [];
var worState = [];
var worStateName = [];

var schoolCostYear = [0];
var schoolCostTotal = [0];
var schoolISMedian = 36657;
var schoolOSMedian = 93215;
var designMedian = [0];
var stateMedian = [0];
var nationalDesignMedian = 44395;
var nationalMedian = 35475;
var workMedians = [0];
var livingCost = [0];
var livingMedian = 22190;
var repayTen = [0];
var livingSavings = [0];
var livingBalance = [0];

var dropHeight = 30;



//  Dynamic Elements

function drawDisplay() {

    //  Output Display

    var outputDisplay = d3.select("#svg")
        .append("g")
        .attr("id", "outputdisplay")
        .style("opacity", "0.0")



    //  School Display

    var schoolDisplay = d3.select("#outputdisplay")
        .data(schoolCostTotal)
        .append("g")
        .attr("id", "schooldisplay")

    schoolDisplay
        .append("text")
        .text("Study Cost Estimate")
        .attr("x", "10%")
        .attr("y", 125)
        .style("transform", "translate(-135px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "2em")

    schoolDisplay
        .append("image")
        .attr("xlink:href", "icons/study.svg")
        .attr("x", "10%")
        .attr("y", 145)
        .attr("width", 120)
        .attr("height", 120)
        .style("transform", "translate(-130px,0px)")

    schoolDisplay
        .append("text")
        .text(function (d, i) {
            return "$--";
        })
        .attr("id", "schoolcosttotal")
        .attr("x", "10%")
        .attr("y", 200)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "6em")

    schoolDisplay
        .append("text")
        .text("For 4 years")
        .attr("x", "10%")
        .attr("y", 230)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "1.5em")

    schoolDisplay
        .append("text")
        .text(function (d, i) {
            return "at a cost of $-- per year.";
        })
        .attr("id", "schoolcostyear")
        .attr("x", "10%")
        .attr("y", 250)
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    stuState.length = 0;

    //  Work Display

    var workDisplay = d3.select("#outputdisplay")
        .data(designMedian)
        .append("g")
        .attr("id", "workdisplay")

    workDisplay
        .append("text")
        .text("State Salary Estimate")
        .attr("x", "10%")
        .attr("y", 395)
        .style("transform", "translate(-135px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "2em")

    workDisplay
        .append("image")
        .attr("xlink:href", "icons/salary.svg")
        .attr("x", "10%")
        .attr("y", 435)
        .attr("width", 85)
        .attr("height", 85)
        .style("transform", "translate(-110px,0px)")

    workDisplay
        .append("text")
        .text(function (d, i) {
            return "$--";
        })
        .attr("id", "designmedian")
        .attr("x", "10%")
        .attr("y", 470)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "6em")

    workDisplay
        .append("text")
        .text("Median salary")
        .attr("x", "10%")
        .attr("y", 500)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "1.5em")

    workDisplay
        .append("text")
        .text("for graphic designers.")
        .attr("id", "designstate")
        .attr("x", "10%")
        .attr("y", 520)
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    //  Living Display

    var livingDisplay = d3.select("#outputdisplay")
        .data(livingCost)
        .append("g")
        .attr("id", "livingdisplay")

    livingDisplay
        .append("text")
        .text("Living Cost Estimate")
        .attr("x", "10%")
        .attr("y", 585)
        .style("transform", "translate(-135px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "2em")

    livingDisplay
        .append("image")
        .attr("xlink:href", "icons/home.svg")
        .attr("x", "10%")
        .attr("y", 615)
        .attr("width", 100)
        .attr("height", 100)
        .style("transform", "translate(-115px,0px)")

    livingDisplay
        .append("text")
        .text(function (d, i) {
            return "$--";
        })
        .attr("id", "livingcost")
        .attr("x", "10%")
        .attr("y", 660)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "6em")

    livingDisplay
        .append("text")
        .text("Expenses per year")
        .attr("x", "10%")
        .attr("y", 690)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "1.5em")

    livingDisplay
        .append("text")
        .text("for one person.")
        .attr("id", "livingstate")
        .attr("x", "10%")
        .attr("y", 710)
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    //  Information Section

    var infoSection = d3.select("#outputdisplay")
        .append("g")
        .attr("id", "infosection")

    //  Study Info

    var studyInfo = d3.select("#infosection")
        .append("g")
        .attr("id", "studyinfo")

    studyInfo
        .append("text")
        .text("Studying in:")
        .attr("x", "32.5%")
        .attr("y", 125)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "2em")

    studyInfo
        .append("image")
        .attr("id", "stustateimg")
        .attr("xlink:href", "icons/states/california.svg")
        .attr("x", "32.5%")
        .attr("y", 130)
        .attr("width", 100)
        .attr("height", 100)

    studyInfo
        .append("text")
        .text("California")
        .attr("id", "stustatetitle")
        .attr("x", "32.5%")
        .attr("y", 190)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "6em")

    studyInfo
        .append("text")
        .text("California State University")
        .attr("id", "universitytitle")
        .attr("x", "32.5%")
        .attr("y", 215)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "1.5em")

    //  Study Graph

    studyInfo
        .append("text")
        .text("Study Cost")
        .attr("x", "32.5%")
        .attr("y", 265)
        .attr("text-anchor", "end")
        .style("transform", "translate(90px,0px)")
        .style("fill", "#aaaaaa")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "1.5em")

    studyInfo
        .append("rect")
        .attr("id", "studymedianbar")
        .attr("x", "32.5%")
        .attr("y", 240)
        .attr("width", 200)
        .attr("height", 20)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#aaaaaa")

    studyInfo
        .append("text")
        .text("US Average")
        .attr("x", "32.5%")
        .attr("y", 255)
        .style("transform", "translate(105px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    studyInfo
        .append("text")
        .text("$20000")
        .attr("id", "studymedian")
        .attr("x", "32.5%")
        .attr("y", 255)
        .attr("text-anchor", "end")
        .style("transform", "translate(295px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    studyInfo
        .append("rect")
        .attr("id", "studycurrentbar")
        .attr("x", "32.5%")
        .attr("y", 262)
        .attr("width", 200)
        .attr("height", 20)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#e33400")

    studyInfo
        .append("text")
        .text("State")
        .attr("id", "barstate")
        .attr("x", "32.5%")
        .attr("y", 277)
        .style("transform", "translate(105px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    studyInfo
        .append("text")
        .text("$20000")
        .attr("id", "studycurrent")
        .attr("x", "32.5%")
        .attr("y", 277)
        .attr("text-anchor", "end")
        .style("transform", "translate(295px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    // Study Description

    studyInfo
        .append("text")
        .text("$$$$")
        .attr("id", "studytier")
        .attr("x", "32.5%")
        .attr("y", 324)
        .attr("text-anchor", "end")
        .style("transform", "translate(90px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "3em")

    studyInfo
        .append("text")
        .text("At $5000 per year, California State University is in the most affordable 25% of in-state universities in America.")
        .attr("id", "studydescription")
        .attr("x", "32.5%")
        .attr("y", 320)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    //  Work Info

    var workInfo = d3.select("#infosection")
        .append("g")
        .attr("id", "workinfo")

    workInfo
        .append("text")
        .text("Working in:")
        .attr("x", "32.5%")
        .attr("y", 395)
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "2em")

    workInfo
        .append("image")
        .attr("xlink:href", "icons/states/california.svg")
        .attr("id", "worstateimg")
        .attr("x", "32.5%")
        .attr("y", 400)
        .attr("width", 100)
        .attr("height", 100)

    workInfo
        .append("text")
        .text("California")
        .attr("id", "worstatetitle")
        .attr("x", "32.5%")
        .attr("y", 470)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "6em")

    //  Salary Graph

    workInfo
        .append("text")
        .text("Salary")
        .attr("x", "32.5%")
        .attr("y", 535)
        .attr("text-anchor", "end")
        .style("transform", "translate(90px,0px)")
        .style("fill", "#aaaaaa")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "1.5em")

    workInfo
        .append("rect")
        .attr("id", "salarymedianbar")
        .attr("x", "32.5%")
        .attr("y", 510)
        .attr("width", 200)
        .attr("height", 20)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#aaaaaa")

    workInfo
        .append("text")
        .text("US Average")
        .attr("x", "32.5%")
        .attr("y", 525)
        .style("transform", "translate(105px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    workInfo
        .append("text")
        .text("$20000")
        .attr("id", "salarymedian")
        .attr("x", "32.5%")
        .attr("y", 525)
        .attr("text-anchor", "end")
        .style("transform", "translate(295px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    workInfo
        .append("rect")
        .attr("id", "salarycurrentbar")
        .attr("x", "32.5%")
        .attr("y", 532)
        .attr("width", 200)
        .attr("height", 20)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#e33400")

    workInfo
        .append("text")
        .text("State")
        .attr("id", "salarystate")
        .attr("x", "32.5%")
        .attr("y", 547)
        .style("transform", "translate(105px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    workInfo
        .append("text")
        .text("$20000")
        .attr("id", "salarycurrent")
        .attr("x", "32.5%")
        .attr("y", 547)
        .attr("text-anchor", "end")
        .style("transform", "translate(295px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    // Salary Description

    workInfo
        .append("text")
        .text("$$$$")
        .attr("id", "salarytier")
        .attr("x", "32.5%")
        .attr("y", 594)
        .attr("text-anchor", "end")
        .style("transform", "translate(90px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "3em")

    workInfo
        .append("text")
        .text("Averaging $50000 per year, California is in the top 25% of states for design salaries.")
        .attr("id", "salarydescription")
        .attr("x", "32.5%")
        .attr("y", 590)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    //  Living Cost Graph

    workInfo
        .append("text")
        .text("Living Cost")
        .attr("x", "32.5%")
        .attr("y", 655)
        .attr("text-anchor", "end")
        .style("transform", "translate(90px,0px)")
        .style("fill", "#aaaaaa")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "1.5em")

    workInfo
        .append("rect")
        .attr("id", "livingmedianbar")
        .attr("x", "32.5%")
        .attr("y", 630)
        .attr("width", 200)
        .attr("height", 20)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#aaaaaa")

    workInfo
        .append("text")
        .text("US Average")
        .attr("x", "32.5%")
        .attr("y", 645)
        .style("transform", "translate(105px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    workInfo
        .append("text")
        .text("$20000")
        .attr("id", "livingmedian")
        .attr("x", "32.5%")
        .attr("y", 645)
        .attr("text-anchor", "end")
        .style("transform", "translate(295px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    workInfo
        .append("rect")
        .attr("id", "livingcurrentbar")
        .attr("x", "32.5%")
        .attr("y", 652)
        .attr("width", 200)
        .attr("height", 20)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#e33400")

    workInfo
        .append("text")
        .text("State")
        .attr("id", "livingstatelabel")
        .attr("x", "32.5%")
        .attr("y", 667)
        .style("transform", "translate(105px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    workInfo
        .append("text")
        .text("$20000")
        .attr("id", "livingcurrent")
        .attr("x", "32.5%")
        .attr("y", 667)
        .attr("text-anchor", "end")
        .style("transform", "translate(295px,0px)")
        .style("fill", "#eaeaea")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    //  Living Cost Description

    workInfo
        .append("text")
        .text("$$$$")
        .attr("id", "livingtier")
        .attr("x", "32.5%")
        .attr("y", 714)
        .attr("text-anchor", "end")
        .style("transform", "translate(90px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "700")
        .style("font-size", "3em")

    workInfo
        .append("text")
        .text("Averaging $25000 per year, California is in the most expensive 25% of states to live.")
        .attr("id", "livingdescription")
        .attr("x", "32.5%")
        .attr("y", 710)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    // Loan Repayments

    workInfo
        .append("image")
        .attr("id", "loancheckimg")
        .attr("xlink:href", "icons/check.svg")
        .attr("x", "32.5%")
        .attr("y", 730)
        .attr("width", 50)
        .attr("height", 50)
        .style("transform", "translate(50px,0px)")

    workInfo
        .append("text")
        .text("California State University loans are likely affordable living in California.")
        .attr("id", "loancheck")
        .attr("x", "32.5%")
        .attr("y", 760)
        .style("transform", "translate(100px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")



    //  Input Display

    var inputDisplay = d3.select("#svg")
        .append("g")
        .attr("id", "inputdisplay")

    //  Reset Button

    d3.select("#inputdisplay")
        .append("text")
        .text("Reset")
        .attr("x", "90%")
        .attr("y", 30)
        .style("transform", "translate(-200px,0px)")
        .style("fill", "#e33400")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            location.reload();
        })

    //  Calculate Button

    var calcButton = d3.select("#inputdisplay")
        .append("g")
        .attr("id", "calcbutton")

    calcButton
        .append("rect")
        .attr("id", "calcbox")
        .attr("x", "70%")
        .attr("y", 10)
        .attr("width", 130)
        .attr("height", 30)
        .style("transform", "translate(-65px,0px)")
        .style("fill", "#e33400")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            calcOutputs.call();
        })

    calcButton
        .append("text")
        .text("Calculate!")
        .attr("id", "calctext")
        .attr("x", "70%")
        .attr("y", 30)
        .style("transform", "translate(-55px,0px)")
        .style("fill", "#eeeeee")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("pointer-events", "none")

    //  Work State Selection

    var worStateSelect = d3.select("#inputdisplay")
        .append("g")
        .attr("id", "worstateinterface")

    var worStateCurrent = d3.select("#worstateinterface")
        .append("g")
        .attr("id", "worstatecurrent")

    worStateCurrent
        .append("text")
        .text("I want to work in:")
        .attr("x", "50%")
        .attr("y", 30)
        .style("transform", "translate(-135px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    worStateCurrent
        .append("rect")
        .attr("id", "worbox")
        .attr("x", "50%")
        .attr("y", 10)
        .attr("width", 130)
        .attr("height", dropHeight)
        .style("transform", "translate(-15px,0px)")
        .style("fill", "#cccccc")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            d3.select(this)
                .style("fill", "#aaaaaa")
                .style("transition", "fill 0.2s ease")
            d3.selectAll(".worstateoptions")
                .style("display", "block")
        })

    worStateCurrent
        .append("text")
        .text("Select")
        .attr("id", "worselection")
        .attr("x", "50%")
        .attr("y", 30)
        .style("transform", "translate(-5px,0px)")
        .style("fill", "#eeeeee")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("pointer-events", "none")

    var worStateOptions = d3.select("#worstateinterface").selectAll("g")
        .data(states)
        .enter()
        .append("g")
        .attr("class", "worstateoptions")
        .style("display", "none")

    worStateOptions
        .append("rect")
        .attr("x", function (d, i) {
            if (i <= 10) {
                return "50%"
            }
            if (11 <= i && i <= 20) {
                return "50%"
            }
            if (21 <= i && i <= 30) {
                return "50%"
            }
            if (31 <= i && i <= 40) {
                return "50%"
            }
            if (41 <= i && i <= 50) {
                return "50%"
            }
        })
        .attr("y", function (d, i) {
            if (i <= 10) {
                return (i + 1) * dropHeight - 19;
            }
            if (11 <= i && i <= 20) {
                return (i - 9) * dropHeight - 19;
            }
            if (21 <= i && i <= 30) {
                return (i - 19) * dropHeight - 19;
            }
            if (31 <= i && i <= 40) {
                return (i - 29) * dropHeight - 19;
            }
            if (41 <= i && i <= 50) {
                return (i - 39) * dropHeight - 19;
            }
        })
        .attr("width", 130)
        .attr("height", dropHeight)
        .style("transform", function (d, i) {
            if (i <= 10) {
                return "translate(-15px,0px)"
            }
            if (11 <= i && i <= 20) {
                return "translate(115px,0px)"
            }
            if (21 <= i && i <= 30) {
                return "translate(245px,0px)"
            }
            if (31 <= i && i <= 40) {
                return "translate(375px,0px)"
            }
            if (41 <= i && i <= 50) {
                return "translate(505px,0px)"
            }
        })
        .style("fill", "#dddddd")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            d3.select("#worselection")
                .text(d)
            d3.select("#worbox")
                .style("fill", "#e33400")
                .style("transition", "fill 0.2s ease")
            d3.selectAll(".worstateoptions")
                .style("display", "none")
            worState.length = 0;
            worState.push(i);
        })

    worStateOptions
        .append("text")
        .text(function (d, i) {
            return d;
        })
        .attr("x", function (d, i) {
            if (i <= 10) {
                return "50%"
            }
            if (11 <= i && i <= 20) {
                return "50%"
            }
            if (21 <= i && i <= 30) {
                return "50%"
            }
            if (31 <= i && i <= 40) {
                return "50%"
            }
            if (41 <= i && i <= 50) {
                return "50%"
            }
        })
        .attr("y", function (d, i) {
            if (i <= 10) {
                return (i + 1) * dropHeight - 1;
            }
            if (11 <= i && i <= 20) {
                return (i - 9) * dropHeight - 1;
            }
            if (21 <= i && i <= 30) {
                return (i - 19) * dropHeight - 1;
            }
            if (31 <= i && i <= 40) {
                return (i - 29) * dropHeight - 1;
            }
            if (41 <= i && i <= 50) {
                return (i - 39) * dropHeight - 1;
            }
        })
        .style("transform", function (d, i) {
            if (i <= 10) {
                return "translate(-5px,0px)"
            }
            if (11 <= i && i <= 20) {
                return "translate(125px,0px)"
            }
            if (21 <= i && i <= 30) {
                return "translate(255px,0px)"
            }
            if (31 <= i && i <= 40) {
                return "translate(385px,0px)"
            }
            if (41 <= i && i <= 50) {
                return "translate(515px,0px)"
            }
        })
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("pointer-events", "none")

    //  State Resident Selection

    var resSelect = d3.select("#inputdisplay")
        .append("g")
        .attr("id", "resinterface")

    var resCurrent = d3.select("#resinterface")
        .append("g")
        .attr("id", "rescurrent")

    resCurrent
        .append("text")
        .text("I'm a state resident:")
        .attr("x", "30%")
        .attr("y", 30)
        .style("transform", "translate(-150px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    resCurrent
        .append("rect")
        .attr("id", "resbox")
        .attr("x", "30%")
        .attr("y", 10)
        .attr("width", 130)
        .attr("height", dropHeight)
        .style("transform", "translate(-15px,0px)")
        .style("fill", "#cccccc")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            d3.select(this)
                .style("fill", "#aaaaaa")
                .style("transition", "fill 0.2s ease")
            d3.selectAll(".resoptions")
                .style("display", "block")
        })

    resCurrent
        .append("text")
        .text("Select")
        .attr("id", "resselection")
        .attr("x", "30%")
        .attr("y", 30)
        .style("transform", "translate(-5px,0px)")
        .style("fill", "#eeeeee")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("pointer-events", "none")

    var resOptions = d3.select("#resinterface").selectAll("g")
        .data(res)
        .enter()
        .append("g")
        .attr("class", "resoptions")
        .style("display", "none")

    resOptions
        .append("rect")
        .attr("x", "30%")
        .attr("y", function (d, i) {
            return (i + 1) * dropHeight - 19;
        })
        .attr("width", 130)
        .attr("height", dropHeight)
        .style("transform", "translate(-15px,0px)")
        .style("fill", "#dddddd")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            d3.select("#resselection")
                .text(d)
            d3.select("#resbox")
                .style("fill", "#e33400")
                .style("transition", "fill 0.2s ease")
            d3.selectAll(".resoptions")
                .style("display", "none")
            resStatus.length = 0;
            resStatus.push(i);
        })

    resOptions
        .append("text")
        .text(function (d, i) {
            return d;
        })
        .attr("x", "30%")
        .attr("y", function (d, i) {
            return (i + 1) * dropHeight - 1;
        })
        .style("transform", "translate(-5px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("pointer-events", "none")

    //  Study State Selection

    var stuStateSelect = d3.select("#inputdisplay")
        .append("g")
        .attr("id", "stustateinterface")

    var stuStateCurrent = d3.select("#stustateinterface")
        .append("g")
        .attr("id", "stustatecurrent")

    stuStateCurrent
        .append("text")
        .text("I want to study in:")
        .attr("x", "10%")
        .attr("y", 30)
        .style("transform", "translate(-135px,0px)")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")

    stuStateCurrent
        .append("rect")
        .attr("id", "stubox")
        .attr("x", "10%")
        .attr("y", 10)
        .attr("width", 130)
        .attr("height", dropHeight)
        .style("transform", "translate(-15px,0px)")
        .style("fill", "#cccccc")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            d3.select(this)
                .style("fill", "#aaaaaa")
                .style("transition", "fill 0.2s ease")
            d3.selectAll(".stustateoptions")
                .style("display", "block")
        })

    stuStateCurrent
        .append("text")
        .text("Select")
        .attr("id", "stuselection")
        .attr("x", "10%")
        .attr("y", 30)
        .style("transform", "translate(-5px,0px)")
        .style("fill", "#eeeeee")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("pointer-events", "none")

    var stuStateOptions = d3.select("#stustateinterface").selectAll("g")
        .data(states)
        .enter()
        .append("g")
        .attr("class", "stustateoptions")
        .style("display", "none")

    stuStateOptions
        .append("rect")
        .attr("x", function (d, i) {
            if (i <= 10) {
                return "10%"
            }
            if (11 <= i && i <= 20) {
                return "10%"
            }
            if (21 <= i && i <= 30) {
                return "10%"
            }
            if (31 <= i && i <= 40) {
                return "10%"
            }
            if (41 <= i && i <= 50) {
                return "10%"
            }
        })
        .attr("y", function (d, i) {
            if (i <= 10) {
                return (i + 1) * dropHeight - 19;
            }
            if (11 <= i && i <= 20) {
                return (i - 9) * dropHeight - 19;
            }
            if (21 <= i && i <= 30) {
                return (i - 19) * dropHeight - 19;
            }
            if (31 <= i && i <= 40) {
                return (i - 29) * dropHeight - 19;
            }
            if (41 <= i && i <= 50) {
                return (i - 39) * dropHeight - 19;
            }
        })
        .attr("width", 130)
        .attr("height", dropHeight)
        .style("transform", function (d, i) {
            if (i <= 10) {
                return "translate(-15px,0px)"
            }
            if (11 <= i && i <= 20) {
                return "translate(115px,0px)"
            }
            if (21 <= i && i <= 30) {
                return "translate(245px,0px)"
            }
            if (31 <= i && i <= 40) {
                return "translate(375px,0px)"
            }
            if (41 <= i && i <= 50) {
                return "translate(505px,0px)"
            }
        })
        .style("fill", "#dddddd")
        .style("cursor", "pointer")
        .on("click", function (d, i) {
            d3.select("#stuselection")
                .text(d)
            d3.select("#stubox")
                .style("fill", "#e33400")
                .style("transition", "fill 0.2s ease")
            d3.selectAll(".stustateoptions")
                .style("display", "none")
            stuState.length = 0;
            stuState.push(i);
        })

    stuStateOptions
        .append("text")
        .text(function (d, i) {
            return d;
        })
        .attr("x", function (d, i) {
            if (i <= 10) {
                return "10%"
            }
            if (11 <= i && i <= 20) {
                return "10%"
            }
            if (21 <= i && i <= 30) {
                return "10%"
            }
            if (31 <= i && i <= 40) {
                return "10%"
            }
            if (41 <= i && i <= 50) {
                return "10%"
            }
        })
        .attr("y", function (d, i) {
            if (i <= 10) {
                return (i + 1) * dropHeight - 1;
            }
            if (11 <= i && i <= 20) {
                return (i - 9) * dropHeight - 1;
            }
            if (21 <= i && i <= 30) {
                return (i - 19) * dropHeight - 1;
            }
            if (31 <= i && i <= 40) {
                return (i - 29) * dropHeight - 1;
            }
            if (41 <= i && i <= 50) {
                return (i - 39) * dropHeight - 1;
            }
        })
        .style("transform", function (d, i) {
            if (i <= 10) {
                return "translate(-5px,0px)"
            }
            if (11 <= i && i <= 20) {
                return "translate(125px,0px)"
            }
            if (21 <= i && i <= 30) {
                return "translate(255px,0px)"
            }
            if (31 <= i && i <= 40) {
                return "translate(385px,0px)"
            }
            if (41 <= i && i <= 50) {
                return "translate(515px,0px)"
            }
        })
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-weight", "400")
        .style("font-size", "1.5em")
        .style("pointer-events", "none")

}



//  Calculations

function calcOutputs() {

    //  School Calculations

    schoolCostTotal.length = 0;
    schoolCostYear.length = 0;
    stuStateName.length = 0;
    uniName.length = 0;
    repayTen.length = 0;

    if (resStatus[0] == 1) {
        schoolCostTotal.push(database[stuState - 1][3]);
        schoolCostYear.push(database[stuState - 1][2]);
    } else {
        schoolCostTotal.push(database[stuState - 1][5]);
        schoolCostYear.push(database[stuState - 1][4]);
    }

    stuStateName.push(states[stuState]);
    uniName.push(database[stuState - 1][14]);

    repayTen.push(schoolCostTotal / 10);

    //  Work Calculations

    designMedian.length = 0;
    stateMedian.length = 0;
    worStateName.length = 0;

    designMedian.push(database[worState - 1][11]);
    stateMedian.push(database[worState - 1][12]);

    worStateName.push(states[worState]);

    //  Living Calculations

    livingCost.length = 0;
    livingSavings.length = 0;
    livingBalance.length = 0;

    livingCost.push(database[worState - 1][13]);
    livingSavings.push(designMedian - livingCost);
    livingBalance.push(livingSavings - repayTen);

    //  Update Output

    updateOutput();

}

function updateOutput() {

    //  Update School

    d3.select("#schoolcosttotal")
        .text(function (d, i) {
            return "$" + schoolCostTotal;
        })

    d3.select("#schoolcostyear")
        .text(function (d, i) {
            return "at a cost of $" + schoolCostYear + " per year.";
        })

    //  Update Work

    d3.select("#designmedian")
        .text(function (d, i) {
            return "$" + designMedian;
        })

    d3.select("#designstate")
        .text(function (d, i) {
            return "for graphic designers in " + worStateName + ".";
        })

    //  Update Living

    d3.select("#livingcost")
        .text(function (d, i) {
            return "$" + livingCost;
        })

    d3.select("#livingstate")
        .text(function (d, i) {
            return "for one person living in " + worStateName + ".";
        })

    //  Update Info Section

    //  Study Section

    d3.select("#stustatetitle")
        .text(function (d, i) {
            return stuStateName;
        })

    d3.select("#universitytitle")
        .text(function (d, i) {
            return uniName;
        })

    d3.select("#stustateimg")
        .attr("xlink:href", function (d, i) {
            return "icons/states/" + stuStateName + ".svg";
        })

    //  Graph

    d3.select("#studymedianbar")
        .attr("width", function (d, i) {
            if (resStatus[0] == 1) {
                return schoolISMedian / 150;
            } else {
                return schoolOSMedian / 150;
            }
        })

    d3.select("#studymedian")
        .text(function (d, i) {
            if (resStatus[0] == 1) {
                return "$" + schoolISMedian;
            } else {
                return "$" + schoolOSMedian;
            }
        })
        .style("transform", function (d, i) {
            if (resStatus[0] == 1) {
                return "translate(" + (95 + schoolISMedian / 150) + "px,0px)";
            } else {
                return "translate(" + (95 + schoolOSMedian / 150) + "px,0px)";
            }
        })

    d3.select("#studycurrentbar")
        .attr("width", function (d, i) {
            return schoolCostTotal / 150;
        })

    d3.select("#studycurrent")
        .text(function (d, i) {
            return "$" + schoolCostTotal;
        })
        .style("transform", function (d, i) {
            return "translate(" + (95 + schoolCostTotal / 150) + "px,0px)";
        })

    d3.select("#barstate")
        .text(function (d, i) {
            return stuStateName;
        })

    //  Study Description

    d3.select("#studytier")
        .text(function (d, i) {
            if (resStatus[0] == 1 && schoolCostTotal < stuIS25) {
                return "$";
            }
            if (resStatus[0] == 1 && stuIS25 < schoolCostTotal && schoolCostTotal < stuIS50) {
                return "$$";
            }
            if (resStatus[0] == 1 && stuIS50 < schoolCostTotal && schoolCostTotal < stuIS75) {
                return "$$$";
            }
            if (resStatus[0] == 1 && stuIS75 < schoolCostTotal) {
                return "$$$$";
            }
            if (resStatus[0] == 2 && schoolCostTotal < stuOS25) {
                return "$";
            }
            if (resStatus[0] == 2 && stuOS25 < schoolCostTotal && schoolCostTotal < stuOS50) {
                return "$$";
            }
            if (resStatus[0] == 2 && stuOS50 < schoolCostTotal && schoolCostTotal < stuOS75) {
                return "$$$";
            }
            if (resStatus[0] == 2 && stuOS75 < schoolCostTotal) {
                return "$$$$";
            }
        })

    d3.select("#studydescription")
        .text(function (d, i) {
            if (resStatus[0] == 1 && schoolCostTotal < stuIS25) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is in the 25% most affordable in-state universities.";
            }
            if (resStatus[0] == 1 && stuIS25 < schoolCostTotal && schoolCostTotal < stuIS50) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is a fairly affordable in-state university.";
            }
            if (resStatus[0] == 1 && stuIS50 < schoolCostTotal && schoolCostTotal < stuIS75) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is a fairly expensive in-state university.";
            }
            if (resStatus[0] == 1 && stuIS75 < schoolCostTotal) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is in the 25% most expensive in-state universities.";
            }
            if (resStatus[0] == 2 && schoolCostTotal < stuOS25) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is in the 25% most affordable out-of-state universities.";
            }
            if (resStatus[0] == 2 && stuOS25 < schoolCostTotal && schoolCostTotal < stuOS50) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is a fairly affordable out-of-state university.";
            }
            if (resStatus[0] == 2 && stuOS50 < schoolCostTotal && schoolCostTotal < stuOS75) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is a fairly expensive out-of-state university.";
            }
            if (resStatus[0] == 2 && stuOS75 < schoolCostTotal) {
                return "At $" + schoolCostYear + " per year, " + uniName + " is in the 25% most expensive out-of-state universities.";
            }
        })

    //  Work Section

    d3.select("#worstatetitle")
        .text(function (d, i) {
            return worStateName;
        })

    d3.select("#worstateimg")
        .attr("xlink:href", function (d, i) {
            return "icons/states/" + worStateName + ".svg";
        })

    //  Salary Graph

    d3.select("#salarymedianbar")
        .attr("width", function (d, i) {
            return nationalDesignMedian / 150;
        })

    d3.select("#salarymedian")
        .text(function (d, i) {
            return "$" + nationalDesignMedian;
        })
        .style("transform", function (d, i) {
            return "translate(" + (95 + nationalDesignMedian / 150) + "px,0px)";
        })

    d3.select("#salarycurrentbar")
        .attr("width", function (d, i) {
            return designMedian / 150;
        })

    d3.select("#salarycurrent")
        .text(function (d, i) {
            return "$" + designMedian;
        })
        .style("transform", function (d, i) {
            return "translate(" + (95 + designMedian / 150) + "px,0px)";
        })

    d3.select("#salarystate")
        .text(function (d, i) {
            return worStateName;
        })

    //  Salary Description

    d3.select("#salarytier")
        .text(function (d, i) {
            if (designMedian < wor25) {
                return "$";
            }
            if (wor25 < designMedian && designMedian < wor50) {
                return "$$";
            }
            if (wor50 < designMedian && designMedian < wor75) {
                return "$$$";
            }
            if (wor75 < designMedian) {
                return "$$$$";
            }
        })

    d3.select("#salarydescription")
        .text(function (d, i) {
            if (designMedian < wor25) {
                return "Averaging $" + designMedian + " per year, " + worStateName + " is in the bottom 25% of states for design salaries.";
            }
            if (wor25 < designMedian && designMedian < wor50) {
                return "Averaging $" + designMedian + " per year, " + worStateName + " is in the lower-middle 25% of states for design salaries.";
            }
            if (wor50 < designMedian && designMedian < wor75) {
                return "Averaging $" + designMedian + " per year, " + worStateName + " is in the upper-middle 25% of states for design salaries.";
            }
            if (wor75 < designMedian) {
                return "Averaging $" + designMedian + " per year, " + worStateName + " is in the top 25% of states for design salaries.";
            }
        })

    //  Living Cost Graph

    d3.select("#livingmedianbar")
        .attr("width", function (d, i) {
            return livingMedian / 150;
        })

    d3.select("#livingmedian")
        .text(function (d, i) {
            return "$" + livingMedian;
        })
        .style("transform", function (d, i) {
            return "translate(" + (95 + livingMedian / 150) + "px,0px)";
        })

    d3.select("#livingcurrentbar")
        .attr("width", function (d, i) {
            return livingCost / 150;
        })

    d3.select("#livingcurrent")
        .text(function (d, i) {
            return "$" + livingCost;
        })
        .style("transform", function (d, i) {
            return "translate(" + (95 + livingCost / 150) + "px,0px)";
        })

    d3.select("#livingstatelabel")
        .text(function (d, i) {
            return worStateName;
        })

    //  Living Cost Description

    d3.select("#livingtier")
        .text(function (d, i) {
            if (livingCost < liv25) {
                return "$";
            }
            if (liv25 < livingCost && livingCost < liv50) {
                return "$$";
            }
            if (liv50 < livingCost && livingCost < liv75) {
                return "$$$";
            }
            if (liv75 < livingCost) {
                return "$$$$";
            }
        })

    d3.select("#livingdescription")
        .text(function (d, i) {
            if (livingCost < liv25) {
                return "Averaging $" + livingCost + " per year, " + worStateName + " is in the most affordable 25% of states to live in.";
            }
            if (liv25 < livingCost && livingCost < liv50) {
                return "Averaging $" + livingCost + " per year, " + worStateName + " is a fairly affordable state to live in.";
            }
            if (liv50 < livingCost && livingCost < liv75) {
                return "Averaging $" + livingCost + " per year, " + worStateName + " is a fairly expensive state to live in.";
            }
            if (liv75 < livingCost) {
                return "Averaging $" + livingCost + " per year, " + worStateName + " is in the most expensive 25% of states to live in.";
            }
        })

    //  Loan Repayment

    d3.select("#loancheckimg")
        .attr("xlink:href", function (d, i) {
            if (livingBalance > 0) {
                return "icons/check.svg";
            } else {
                return "icons/cross.svg";
            }
        })

    d3.select("#loancheck")
        .text(function (d, i) {
            if (resStatus[0] == 1 && livingBalance > 0) {
                return "In-state " + uniName + " loans are likely affordable living in " + worStateName + ".";
            }
            if (resStatus[0] == 2 && livingBalance > 0) {
                return "Out-of-state " + uniName + " loans are likely affordable living in " + worStateName + ".";
            }
            if (resStatus[0] == 1 && livingBalance < 0) {
                return "In-state " + uniName + " loans are likely unaffordable living in " + worStateName + ".";
            }
            if (resStatus[0] == 2 && livingBalance < 0) {
                return "Out-of-state " + uniName + " loans are likely unaffordable living in " + worStateName + ".";
            }
        })
    
    //  Show Information Display
    
    d3.selectAll("#outputdisplay")
        .style("opacity", "1.0")
        .style("transition", "opacity 0.2s ease")

}



//  Load Functions

window.onload = function () {
    drawDisplay();
}
