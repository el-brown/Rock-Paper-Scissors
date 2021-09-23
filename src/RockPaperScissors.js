import React, { useEffect, useReducer, useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMeta, Icon } from 'semantic-ui-react';

const RockPaperScissors = () => {
  const [winner, setWinner] = useState("")
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)
  const [userChoice, setUserChoice] = useState("")
  const [compChoice, setCompChoice] = useState("")

  useEffect(() => {

  }, [compChoice])
 

  const getCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    let choice = options[Math.floor(Math.random()*options.length)]; 
    setCompChoice(choice)
    return choice
  }

  const handleClick = (uc) => {
    setUserChoice(uc)
    let cc = getCompChoice()
    if (uc === "rock" && cc === "rock") {
      setTies(prevState => prevState + 1)
      console.log("ties", ties)
      setWinner("tie")
    } else if (uc === "rock" && cc === "scissors") {
      setWins(prevState => prevState + 1)
      setWinner("You")
    } else if (uc === "rock" && cc === "paper") {
      setLosses(prevState => prevState + 1)
      setWinner("Computer")
    } else if (uc === "scissors" && cc === "rock") {
      setLosses(prevState => prevState + 1)
      setWinner("Computer")
    } else if (uc === "scissors" && cc === "scissors") {
      setTies(prevState => prevState + 1)
      setWinner("tie")
    } else if (uc === "scissors" && cc === "paper") {
      setWins(prevState => prevState + 1)
      setWinner("You")
    } else if (uc === "paper" && cc === "rock") {
      setWins(prevState => prevState + 1)
      setWinner("You")
    } else if (uc === "paper" && cc === "scissors") {
      setLosses(prevState => prevState + 1)
      setWinner("Computer")
    } else if (uc === "paper" && cc === "paper") {
      setTies(prevState => prevState + 1)
      setWinner("tie")
    };
  };

  // const checkWinner = (uc, cc) => {
  //   if (uc === "rock" && cc === "rock") {
  //     setTies(prevState => prevState + 1)
  //     console.log("ties", ties)
  //     setWinner("tie")
  //   } else if (uc === "rock" && cc === "scissors") {
  //     setWins(prevState => prevState + 1)
  //     setWinner("You")
  //   } else if (uc === "rock" && cc === "paper") {
  //     setLosses(prevState => prevState + 1)
  //     setWinner("Computer")
  //   } else if (uc === "scissors" && cc === "rock") {
  //     setLosses(prevState => prevState + 1)
  //     setWinner("Computer")
  //   } else if (uc === "scissors" && cc === "scissors") {
  //     setTies(prevState => prevState + 1)
  //     setWinner("tie")
  //   } else if (uc === "scissors" && cc === "paper") {
  //     setWins(prevState => prevState + 1)
  //     setWinner("You")
  //   } else if (uc === "paper" && cc === "rock") {
  //     setWins(prevState => prevState + 1)
  //     setWinner("You")
  //   } else if (uc === "paper" && cc === "scissors") {
  //     setLosses(prevState => prevState + 1)
  //     setWinner("Computer")
  //   } else if (uc === "paper" && cc === "paper") {
  //     setTies(prevState => prevState + 1)
  //     setWinner("tie")
  //   };
  // };


  return (
    <div>
      <Card>
        <CardContent>
          <h1>You VS Computer</h1>
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
            <p>Winner: {winner}</p>
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
        </CardContent>
      </Card>
    </div>
  )
}

export default RockPaperScissors;
