
const weatherToday = 'Rainy'

function trainFootball (warmUp = 'Jog', mainDrill= 'Small sided game'){

    if (weatherToday== 'Rainy'){
        return `The weather is not favourable to train`
    }
    else{
        return `Training will happen. It will start with ${warmUp} and then ${mainDrill}`
    }

    console.log(`Get in the field and ${warmUp} before the ${mainDrill}`)

    
}
const trainStatus= trainFootball(warmUp = 'Jumps and sprints',mainDrill= 'Scoring goals practice')

console.log(trainStatus)
