import React, { useEffect, useReducer, useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMeta, Icon } from 'semantic-ui-react';

const RockPaperScissors = () => {

  function reducer(state, action) {
    switch (action.type) {
      case "win"
        //Would this work?
        newWins = state.wins + 1
        return newWins
      case "lose":
        return { losses: state.losses + 1}
      case "tie":
        return { ties: state.ties + 1}
      default:
        return state
    };
  };

  const [state, dispatch] = useReducer(reducer, { wins: 0, losses: 0, ties: 0 })
  // const [winner, setWinner] = useState(null)
  // const [losses, setLosses] = useState(0)
  // const [ties, setTies] = useState(0)
  const [userChoice, setUserChoice] = useState("")
  const [compChoice, setCompChoice] = useState("")

  useEffect(() => {

  }, [])
 
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
      dispatch({type: "tie"})
    } else if (uc === "rock" && cc === "scissors") {
      dispatch({type: "win"})
    } else if (uc === "rock" && cc === "paper") {
      dispatch({ type: 'lose'})
    } else if (uc === "scissors" && cc === "rock") {
      dispatch({ type: 'lose'})
    } else if (uc === "scissors" && cc === "scissors") {
      dispatch({ type: "tie"})
    } else if (uc === "scissors" && cc === "paper") {
      dispatch({type: "win"})
    } else if (uc === "paper" && cc === "rock") {
      dispatch({type: "win"})
    } else if (uc === "paper" && cc === "scissors") {
      dispatch({ type: 'lose'})
    } else if (uc === "paper" && cc === "paper") {
      dispatch({ type: "tie"})
    };
  };


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
          Wins {state.wins}
          </CardMeta>
        <CardMeta>
          Losses {state.losses}
          </CardMeta>
        <CardMeta>
          Ties {state.ties}
          </CardMeta>
        </CardContent>
      </Card>

    </div>
  )
}

export default RockPaperScissors;
