function calculates() {
    let valueOne = document.getElementById("color1").value;
    switch(valueOne)
    {
        case 'Black':
            FirstValue = 0
            break;
        case 'Brown':
            FirstValue = 1
            break;
        case 'Red':
            FirstValue = 2
            break;
        case 'Orange':
            FirstValue = 3
            break;
        case 'Yellow':
            FirstValue = 4
            break;
        case 'Green':
            FirstValue = 5
            break;
        case 'Blue':
            FirstValue = 6
            break;
        case 'Violet':
            FirstValue = 7
            break;
        case 'Grey':
            FirstValue = 8
            break;  
        case 'White':
            FirstValue = 9
            break;        
    }
    let valueTwo = document.getElementById("color2").value;
    switch(valueTwo)
    {
        case 'Black':
            SecondValue = 0
            break;
        case 'Brown':
            SecondValue = 1
            break;
        case 'Red':
            SecondValue = 2
            break;
        case 'Orange':
            SecondValue = 3
            break;
        case 'Yellow':
            SecondValue = 4
            break;
        case 'Green':
            SecondValue = 5
            break;
        case 'Blue':
            SecondValue = 6
            break;
        case 'Violet':
            SecondValue = 7
            break;
        case 'Grey':
            SecondValue = 8
            break;  
        case 'White':
            SecondValue = 9
            break;        
    }
    // let valueAdd = document.getElementById("color5").value;
    // switch(valueAdd)
    // {
    //     case 'Black':
    //         AddValue = 1
    //         break;
    //     case 'Brown':
    //         AddValue = 2
    //         break;
    //     case 'Red':
    //         AddValue = 3
    //         break;
    //     case 'Orange':
    //         AddValue = 4
    //         break;
    //     case 'Green':
    //         AddValue = 5
    //         break;
    //     case 'Blue':
    //         AddValue = 6
    //         break;
    //     case 'Violet':
    //         AddValue = 7
    //         break;
    //     case 'Grey':
    //         AddValue = 8
    //         break;  
    //     case 'Grey':
    //         AddValue = 9
    //         break;
    //     default :
    //         break;        
    // }
    let valueThree = document.getElementById("color3").value;
    switch(valueThree)
    {
        case 'Black':
            ThirdValue = 1
            break;
        case 'Brown':
            ThirdValue = 10
            break;
        case 'Red':
            ThirdValue = 100
            break;
        case 'Orange':
            ThirdValue = 1000
            break;
        case 'Yellow':
            ThirdValue = 10000
            break;
        case 'Green':
            ThirdValue = 100000
            break;
        case 'Blue':
            ThirdValue = 1000000
            break;
        case 'Violet':
            ThirdValue = 10000000
            break;
        case 'Grey':
            ThirdValue = 100000000
            break;
        case 'White':
            ThirdValue = 1000000000
            break;
        case 'Gold':
            ThirdValue = 0.1
            break;  
        case 'Silver':
            ThirdValue = 0.01
            break;        
    }
    let valueFour = document.getElementById("color4").value;
    switch(valueFour)
    {
 
        case 'Brown':
            FourthValue = 1
            break;
        case 'Red':
            FourthValue = 2
            break;  
        case 'Green':
            FourthValue = 0.5
            break;
        case 'Blue':
            FourthValue = 0.25
            break;
        case 'Violet':
            FourthValue = 0.10
            break;  
        case 'Grey':
            FourthValue = 0.05
            break;  
        case 'Gold':
            FourthValue = 5
            break;  
        case 'Silver':
            FourthValue = 10
            break;
        default:
            FourthValue = 20
            break;    
    }

    let actualValue = ('' + FirstValue + SecondValue )
    let mainValue = parseInt('actualValue')
    // document.write(typeof(mainValue))
    // document.write(typeof(ThirdValue))
    // let calcs = mainValue * ThirdValue
    // document.write(calcs)
    // document.write(`<h2>The Value of resistor in your hand is  ${actualValue} * ${ThirdValue} Ω ± ${FourthValue}</h2>`)
    result.innerHTML = (`<h2>The Value of resistor in your hand is  ${actualValue} * ${ThirdValue} Ω ± ${FourthValue}%</h2>`)

    // document.write(`<h2>${actualValue}</h2>`)
}