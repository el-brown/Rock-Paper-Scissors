import React, { useEffect, useReducer, useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMeta, Icon } from 'semantic-ui-react';

const RockPaperScissors = () => {
  //Need states for declaring winner, showing wins,losses, and ties.
  // const [winner, setWinner] = useState(null)
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)
  const [userChoice, setUserChoice] = useState("")
  const [compChoice, setCompChoice] = useState("")

  useEffect(() => {

  }, [ties, wins, losses])

  // Compare choice to userChoice.  If user wins, increment wins by 1.
  // If user loses, increment losses by 1.  
  // If they're the same you increment ties by 1. 
  // Based on that, print "You won!" or "You lost!" 
 
  const getCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    let choice = options[Math.floor(Math.random()*options.length)]; 
    setCompChoice(choice)
  }

  const handleClick = (a) => {
    setUserChoice(a)
    getCompChoice()
    checkWinner(userChoice, compChoice)
  };

  const checkWinner = (uc, cc) => {
    if (uc === "rock" && cc === "rock") {
      setTies((ties) => ties + 1)
    } else if (uc === "rock" && cc === "scissors") {
      setWins((wins) => wins + 1)
    } else if (uc === "rock" && cc === "paper") {
      setLosses((losses) => losses + 1)
    } else if (uc === "scissors" && cc === "rock") {
      setLosses((losses) => losses + 1)
    } else if (uc === "scissors" && cc === "scissors") {
      setTies((ties) => ties + 1)
    } else if (uc === "scissors" && cc === "paper") {
      setWins((wins) => wins + 1)
    } else if (uc === "paper" && cc === "rock") {
      setWins((wins) => wins + 1)
    } else if (uc === "paper" && cc === "scissors") {
      setLosses((losses) => losses + 1)
    } else if (uc === "paper" && cc === "paper") {
      setTies((ties) => ties + 1)
    };
  };

 



// the user clicks one of the hands
  return (
    <div>
      <h1>You VS the Computer</h1>
      <p>Your Choice: {userChoice}</p>
      <p>
      <Icon  
      link name='hand rock'
      size ='huge' 
      onClick={() => handleClick("rock")}
      />
      <Icon 
      link name='hand paper' 
      size='huge' 
      onClick={() => handleClick("paper")}
      />
      <Icon 
      link name='hand scissors' 
      size='huge' 
      onClick={() => handleClick("scissors")}
      /> 
      </p>
      <p>Computer's Choice: {compChoice}</p>

      <Card>
        <CardContent>
        <CardHeader>Results</CardHeader>
        <CardMeta>
          Wins {wins}
          </CardMeta>
        <CardMeta>
          Losses {losses}
          </CardMeta>
        <CardMeta>
          Ties {ties}
          </CardMeta>
        </CardContent>
      </Card>

    </div>
  )
}

export default RockPaperScissors;
