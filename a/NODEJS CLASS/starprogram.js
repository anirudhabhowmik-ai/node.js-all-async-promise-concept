//         5
//       4 4 
//     3 3 3
//   2 2 2 2 
// 1 1 1 1 1

function starProgram() {
    var space = "";
    var counter = 0;
    for(x=5;x>=1;x--) {
        space = "";
        counter++;
        for(var i=1;i<x;i++) {
            space += " ";
        }
        for(var j=1;j<=counter;j++) {
            space+=x;
        }
        console.log(space);
    }
}
starProgram()