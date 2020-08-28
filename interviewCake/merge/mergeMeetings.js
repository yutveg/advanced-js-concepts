// Given an array of objects

// Each object contains the startTime and endTime of meetings

// startTime and endTime = n * 30 minute blocks after 9:00am

// We want to merge the ranges 

// Return an array of all the times when people are NOT available

function mergeRangesCake(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  
    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];
  
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
  
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
  
    return mergedMeetings;
  }

function mergeRanges(times) {
    // Initial step sort by startTime
    times.sort((a, b) => {
        return a.startTime > b.startTime ? 1 : -1
    })
    
  

    let mergedArray = []
    // hold flag for compiling merges
    let compiling = false;

    // keep a variable for current time slot
    let currentSlot = {startTime: 0, endTime: 0}

    for (let i = 0; i < times.length - 1; i++){
        if (times[i].endTime >= times[i+1].startTime){
            if (compiling === false){
                compiling = true;
                currentSlot = times[i]
            } 
            // keeping a running log of highest endTime when compiling
            else if (currentSlot.endTime < times[i].endTime) {
                currentSlot.endTime = times[i].endTime
            }
        }

       
        else {
            if (compiling === true){
                compiling = false;
                if (currentSlot.endTime < times[i].endTime){
                    currentSlot.endTime = times[i].endTime
                }
            } 
            
            else {
                currentSlot = times[i]
            }
            mergedArray.push({...currentSlot})
        }
    }

    if (compiling === true){
        if (currentSlot.endTime < times[times.length - 1].endTime){
            currentSlot.endTime = times[times.length - 1].endTime
        }
        mergedArray.push(currentSlot)
    }

    return mergedArray
}

console.log(mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
  ]))

  
console.log(mergeRangesCake([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
    ]))