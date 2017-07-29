A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.

Two rectangles overlapping a little. It must be love.
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this:

  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

Your output rectangle should use this format as well.
------------------------------------------------------------
my Answer

  var mine = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};


var yours = {
    
    
    leftX: 2,
    bottomY: 3,

    // width and height
    width: 5,
    height: 7,
    
}

var result = intersection(mine,yours);
console.log(result);

function intersection(my,your){
     
    var myLX        = my.leftX                  ;
    var myRX        = my.leftX     + my.width   ; 
    var myTopY      = my.bottomY   + my.height  ;
    var myBottomY   = my.bottomY                ;
    
    var yourRX      = your.leftX   + your.width ; 
    var yourLX      = your.leftX                ;
    var yourTopY    = your.bottomY + your.height;
    var yourBottomY = your.bottomY              ;
    
    var width=0, height=0 ,leftX=0 , bottomY = 0;
    
    for(var i=myLX ; i<=myRX ; i++){
        
        for(var j=yourLX ; j<=yourRX ; j++){
           if(i==j ){ 
              if(leftX == 0) leftX = i;
              else width++;
           }
       }
    }
    
    for(var i=myBottomY ; i<=myTopY ; i++){
        
        for(var j=yourBottomY ; j<=yourTopY ; j++){
           if(i==j ){ 
              if(bottomY == 0) bottomY = i;
              else height++;
           }
       }
    }
    
     var cross={};
    
    if(width!=0 && height!=0)
    {
       cross.leftX=leftX;
        cross.bottomY=bottomY;
        cross.width=width;
        cross.height=height;
         return cross; 
    }
  
    else return false;
}
