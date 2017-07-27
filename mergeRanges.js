Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]
-------------------------------------------------------------------------------------------
[ MY ANSWER ]

 var arr =     [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];



arr.sort(
    function(a,b){
    if(a.startTime > b.startTime) return 1;
    if(a.startTime < b.startTime) return -1;
    return 0;
    
    }
)

var newArr= merge(arr);
console.log(newArr);


function merge(arr){
    
  
  var newArr=[];
  var tmp   ={startTime:'',endTime:''};
    
  for(var i=1; i <= arr.length ; i++){
     
    if(tmp.startTime=='' && tmp.endTime==''){  
      tmp.startTime = arr[i-1].startTime;
      tmp.endTime   = arr[i-1].endTime;
    }
      
    if( arr.length !=i 
        && arr[i].startTime >= tmp.startTime 
        && arr[i].startTime <= tmp.endTime)
    {
      tmp.startTime = tmp.startTime;
      tmp.endTime   = Math.max(tmp.endTime,arr[i].endTime);
      
      
    }
    else {
   
        newArr.push({startTime:tmp.startTime, endTime:tmp.endTime});
        tmp.startTime='';
        tmp.endTime='';
    }
  
}
    
      return newArr;
}

 
