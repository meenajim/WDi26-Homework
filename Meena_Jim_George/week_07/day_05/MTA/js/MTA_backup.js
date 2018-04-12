const station = { lineN:["Times Square", "34th", "28th", "23rd", "Union Square","8th"] ,
                  lineL:["8th", "6th", "Union Square", "3rd", "1st"],
                  line6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

//create a function called getStations with one parameter where we input the line.
//This returns all the stations in that line.
const  getStations= function(Line)
{
  //loop through the station object


  for(let i = 0;i < Object.keys(station).length; i++)
  {
    let str = "";
    //saving the line name in a string because its not working when used directly inside the if statement
    str = Object.keys(station)[i];
    //if the line we input is same as the line from the loop, then return all the stations
    if(str  === Line)
    {
    //console.log(`Station list for ${str} : ${Object.values(station)[i]}`);
    //return all the stations in this line.
    return Object.values(station)[i];
    }
  }

}


  const planTrip = function(startLine,startLocation, endLine, endLocation){
  //displays the requirement
  console.log(`User wants to start on line: ${startLine} from station: ${startLocation} and end on line: ${endLine} on station: ${endLocation}.`)
  //if startline and endline are the same
  if(startLine === endLine)
  {
    console.log(`StartLine and EndLine are the same`);
    let stops = [];
    //get the index of startline and endline
    let startLocationIndex = getStations(startLine).indexOf(startLocation);
    let endLocationIndex = getStations(endLine).indexOf(endLocation);
    // if the user is going backward, then reverse the array and list and count the stops
    if(startLocationIndex > endLocationIndex)
    {
      let reverseStations = getStations(startLine).reverse();// reverse the array
      //get the new indices from the reveresed array
      let r_startLocationIndex = reverseStations.indexOf(startLocation);
      let r_endLocationIndex = reverseStations.indexOf(endLocation);
      //slice the new array. plus1 in the end to add the last one
      stops = reverseStations.slice(r_startLocationIndex, r_endLocationIndex + 1);

    }
    else //if the user is going forwards
    {
      //Creating a slice of the array to show the stops
      stops = getStations(startLine).slice(startLocationIndex,endLocationIndex + 1);

    }
      //Displaying the number of stops that user must travel
      console.log(`You must travel through the following stops on the ${startLine}: ${stops}.`);
      //count the total number of stops
      console.log(`${stops.length} stops in total.`);
  }
  else
  {
    //If the user is getting on 2 lines
    console.log(`StartLine and EndLine are different`);
    //get the index of the start location. End location will always be Union Square(intersection)
    let startLocation1Index = getStations(startLine).indexOf(startLocation);
    let endLocation1Index = getStations(startLine).indexOf("Union Square");
    //if the user is going backwards
    if(startLocation1Index > endLocation1Index)
    {
      //then reverse, get the index and slice. plus 1 to get the last station
      let reverseStations1 = getStations(startLine).reverse();
      let r_startLocationIndex1= reverseStations1.indexOf(startLocation);
      let r_endLocationIndex1= reverseStations1.indexOf("Union Square");
      stops_part1 =reverseStations1.slice(r_startLocationIndex1 + 1,r_endLocationIndex1 + 1);

    }
    else //if the user is going forwards
    {
    //Slice the array
    stops_part1 = getStations(startLine).slice(startLocation1Index, endLocation1Index +1);
    }
    //Display the first part of the journey.
    console.log(`You must travel through the following stops on the ${startLine}: ${stops_part1}`);
    console.log(`Change at Union Square`);
    //Part1 over
    //starting Part2 which is the end line and end location.
    //always starts at Union Square and ends with end location
    let startLocationIndex2 = getStations(endLine).indexOf("Union Square");
    let endLocationIndex2 = getStations(endLine).indexOf(endLocation);
    // if the user is going backwards, then reverse,get index and slice the array
    if(startLocationIndex2 > endLocationIndex2)
    {
      reverseStations2=getStations(endLine).reverse();
      r_startLocationIndex2 = reverseStations2.indexOf("Union Square");
      r_endLocationIndex2 = reverseStations2.indexOf(endLocation);
      //plus 1 is to avoid Union Square and add the last station
      stops_part2 = reverseStations2.slice(r_startLocationIndex2 + 1, r_endLocationIndex2 + 1);
    }
    else //if the user is going forward then slice
    {
    stops_part2 = getStations(endLine).slice(startLocationIndex2 + 1, endLocationIndex2 + 1);
    }
    //Display the second part of the journey.
    console.log(`Your journey continues through the following stops: ${stops_part2}.`);
    //get the total number of stops of part1 and part2
    let totStops = stops_part1.length + stops_part2.length;
    console.log(` ${totStops} stops in total.`);
  }
  }

  // Testing all options!
  // { lineN:["Times Square", "34th", "28th", "23rd", "Union Square","8th"] ,
  //   lineL:["8th", "6th", "Union Square", "3rd", "1st"],
  //   line6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  //Option 1 - Same line - moving forwards
  //planTrip("lineL","6th","lineL","3rd");
  //Option 2 - Same line - moving backwards
  //planTrip("lineL","1st","lineL","8th");
  //Option 3 - Different lines - moving forward on both lines
  //planTrip("lineL","6th","line6","Astor Place");
  //Option 4 - Different lines - moving forward on first line and backward on second line
  //planTrip("lineL","6th","line6","Grand Central");
  //Option 5 - Different lines - moving backward on first line and forward on second line
  //planTrip("lineL","1st","line6","Astor Place");
  //Option 6 - Different lines - moving backwards on both lines
  planTrip("lineL","1st","line6","33rd");
