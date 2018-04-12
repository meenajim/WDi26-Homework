const station = { LineN:["Times Square", "34th", "28th", "23rd", "Union Square","8th"] ,
                  LineL:["8th", "6th", "Union Square", "3rd", "1st"],
                  Line6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


const  getStations= function(Line)
{
  for(let i = 0;i < Object.keys(station).length; i++)
  {
    let str = "";
    str = Object.keys(station)[i];
    if(str  === Line)
    {
    return Object.values(station)[i];
    }
  }
}

const planTrip = function(startLine,startLocation, endLine, endLocation){
let tripResult = '';
console.log(`User wants to start on line: ${startLine} from station: ${startLocation} and end on line: ${endLine} on station: ${endLocation}.`);
tripResult += `User wants to start on line: <span id = "special">${startLine}</span> from station: <span id = "special">${startLocation}</span> and end on line: <span id = "special">${endLine}</span> on station: <span id = "special">${endLocation}</span>.<br><br>`;
if(startLine === endLine)
{
  console.log(`StartLine and EndLine are the same`);
  // tripResult += `StartLine and EndLine are the same.<br><br>`;
  let stops = [];
  let startLocationIndex = getStations(startLine).indexOf(startLocation);
  let endLocationIndex = getStations(endLine).indexOf(endLocation);
  if(startLocationIndex > endLocationIndex)
  {
    let reverseStations = getStations(startLine).reverse();
    let r_startLocationIndex = reverseStations.indexOf(startLocation);
    let r_endLocationIndex = reverseStations.indexOf(endLocation);
    stops = reverseStations.slice(r_startLocationIndex, r_endLocationIndex + 1);

  }
  else
  {
    stops = getStations(startLine).slice(startLocationIndex,endLocationIndex + 1);

  }
    console.log(`You must travel through the following stops on the ${startLine}: ${stops}.`);
    tripResult += `You must travel through the following stops on the <span id = "special">${startLine}: ${stops}</span>.<br><br>`;
    console.log(`${stops.length} stops in total.`);
    tripResult += `<span id = "special">${stops.length}</span> stops in total.<br><br>`;
}
else
{
  console.log(`StartLine and EndLine are different.`);
  // tripResult += `StartLine and EndLine are different.<br><br>`;
  let startLocation1Index = getStations(startLine).indexOf(startLocation);

  let endLocation1Index = getStations(startLine).indexOf("Union Square");
  if(startLocation1Index > endLocation1Index)
  {
    let reverseStations1 = getStations(startLine).reverse();
    let r_startLocationIndex1= reverseStations1.indexOf(startLocation);
    let r_endLocationIndex1= reverseStations1.indexOf("Union Square");
    stops_part1 =reverseStations1.slice(r_startLocationIndex1 + 1,r_endLocationIndex1 + 1);

  }
  else
  {
  stops_part1 = getStations(startLine).slice(startLocation1Index, endLocation1Index +1);
  }
  console.log(`You must travel through the following stops on the ${startLine}: ${stops_part1}`);
  tripResult += `You must travel through the following stops on the <span id = "special">${startLine}: ${stops_part1}</span>.<br><br>`;
  console.log(`Change at Union Square.`);
  tripResult += `Change at <span id = "special">Union Square</span>.<br><br>`;

  let startLocationIndex2 = getStations(endLine).indexOf("Union Square");
  let endLocationIndex2 = getStations(endLine).indexOf(endLocation);
  if(startLocationIndex2 > endLocationIndex2)
  {
    reverseStations2=getStations(endLine).reverse();
    r_startLocationIndex2 = reverseStations2.indexOf("Union Square");
    r_endLocationIndex2 = reverseStations2.indexOf(endLocation);
    stops_part2 = reverseStations2.slice(r_startLocationIndex2 + 1, r_endLocationIndex2 + 1);
  }
  else
  {
  stops_part2 = getStations(endLine).slice(startLocationIndex2 + 1, endLocationIndex2 + 1);
  }
  console.log(`Your journey continues through the following stops: ${stops_part2}.`);
  tripResult += `Your journey continues through the following stops: <span id = "special">${stops_part2}</span>.<br><br>`
  let totStops = stops_part1.length + stops_part2.length;
  console.log(` ${totStops} stops in total.`);
  tripResult += ` <span id = "special">${totStops} </span>stops in total.<br><br>`;
}
return tripResult;
}

$(document).ready(function () {
  let s_line = ' ';
  let s_station = ' ';
  let e_line = ' ';
  let e_station = ' ';
  let $p = $('<p>');

$('#select_start').on('change', function () {
  const value = $(this).val();
  const parts = value.split(',');
  s_line = parts[0];
  s_station = parts[1];
  console.log(s_line, s_station);
  $p.html('');

})
$('#select_end').on('change', function () {
  const value = $(this).val();
  const parts = value.split(',');
  e_line = parts[0];
  e_station = parts[1];
  console.log(e_line, e_station);
  tripResult = planTrip(s_line,s_station,e_line,e_station);
  console.log(tripResult);
  // let $p = $('<p>');
  $p.html(tripResult);
  $p.appendTo('#display');
})
});
