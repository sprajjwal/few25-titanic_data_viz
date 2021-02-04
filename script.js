import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 15px)'
titanic.style.gridGap = '1px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  if (data[i].fields.age >= 18) {
    p.style.width = '15px'
    p.style.height = '15px'
  } else {
    p.style.width = '10px'
    p.style.height = '10px'
  }

  p.style.borderRadius = data[i].fields.sex === "female" ? '50%' : '0'
  
  p.style.opacity = data[i].fields.survived === 'Yes' ? '100%' : '50%'
  if (data[i].fields.embarked === 'S') {
    p.style.backgroundColor = 'red'
  } else if (data[i].fields.embarked == "C") {
    p.style.backgroundColor = 'yelow'
  } else {
    p.style.backgroundColor = 'blue'
  }
})

// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



