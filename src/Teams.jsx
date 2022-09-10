import { useState } from "react"
import { Box, Text } from "@chakra-ui/react"



const Teams = () => {
  const [ teams, setTeams ] = useState([{
    id: 1,
    name: 'John Doe',
    age: 23,
    team: 'TeamA'
  },
  {
    id: 2,
    name: 'Johny Cage',
    age: 32,
    team: 'TeamB'
  },
  {
    id: 3,
    name: 'TJ Combo',
    age: 25,
    team: 'TeamC'
  }
  ])
  
  return (
    <Box>
      {
        teams.map(team => (
          <Box 
            border='1px'
            my='1rem'
            key={team.id}
          >
            <Text fontSize='2xl'>{team.name}</Text>
            <Text fontSize='xs' >{team.team}</Text>
          </Box>
          )
        )
      }
    </Box>
  )
}

export default Teams