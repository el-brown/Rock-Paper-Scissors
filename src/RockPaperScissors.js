import React, { useReducer, useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMeta, Icon } from 'semantic-ui-react';

const RockPaperScissors = () => {
  //Need states for declaring winner, showing wins,losses, and ties.
  const [winner, setWinner] = useState(true)
  const [showWins, setShowWins] = useState(0)
  const [showLosses, setShowLosses] = useState(0)
  const [showTies, setShowTies] = useState(0)
  const [userChoice, setUserChoice] = useState("")
  const [compChoice, setCompChoice] = useState("")


  //Need an onClick to trigger the
  //- logic to determine who won

  // Logic:

  
  // if the hand matches the computer's answer, +1 is added to Ties

  // the computer randomly generates a rock, paper, or scissors answer
  const options = [
    "rock", "paper", "scissors"
  ]
  
  const choice = options[Math.floor(Math.random()*options.length)];
  console.log("computer's choice:", choice)

  // Need counters for wins, losses and ties
  // setShowWins += 1 
  // setShowLosses += 1
  // setShowTies += 1
  // const reducerFunction =(state, action) => {
  //   switch(action.type){
  //     case "rock":
  //       return setWinner(false)
  //     default:
  //       return state
  //   }
  // }
//dispatch would be win, loss, or tie.  When triggered it increments.
  // const [count, dispatch] = useReducer(reducerFunction, 0)


// the user clicks one of the hands
  return (
    <div>
      <h1>You VS the Computer</h1>
      <h4>Computer's choice: {choice} --- User's choice: {userChoice} </h4>
      <p>
      <Icon  
      link name='hand rock'
      size ='huge' 
      onClick={() => setUserChoice("rock")}
      />
      <Icon 
      link name='hand paper' 
      size='huge' 
      onClick={() => setUserChoice("paper")}
      />
      <Icon 
      link name='hand scissors' 
      size='huge' 
      onClick={() => setUserChoice("scissors")}
      /> 
      </p>
      <p>{winner ? "You win" : "You lose"}</p>
      <Card>
        <CardContent>
        <CardHeader>Results</CardHeader>
        <CardMeta>
          Wins {showWins}
          </CardMeta>
        <CardMeta>
          Losses {showLosses}
          </CardMeta>
        <CardMeta>
          Ties {showTies}
          </CardMeta>
        </CardContent>
      </Card>
    </div>
  )
}

export default RockPaperScissors;