image = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3xWWqMes5mLCwXYk6xbDkaI05ZroxDwxpQ&usqp=CAU/1000/500',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hH748yVL7fW1q5kUvMjsQ3f3OcR3Gxu7RA&usqp=CAU/1000/500',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXGF0qdPVKl32R9GYiuncM6iU5qdwWTbngA&usqp=CAU/1000/500',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cEoG-4qRbN8c6PIXWcu3JVP3xrV0RupwEg&usqp=CAU',
]

let indexNumber = 0;

    const goPrev = () =>{
if(indexNumber == 0){
    indexNumber = 4;
}
        indexNumber -= 1;
        document.getElementById("uni").src = image[indexNumber];
         console.log(indexNumber);
    } 
    const goNext = () =>{
        if(indexNumber > 2){
        indexNumber = 0;
        }
        document.getElementById("uni").src = image[indexNumber];
        indexNumber += 1
        console.log(indexNumber);}
