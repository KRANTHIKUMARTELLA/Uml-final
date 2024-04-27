import React, {useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import {exerciseOptions,fetchData} from '../utils/fetchData';
import HorizonalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
  
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all',...bodyPartsData]);
    }
    fetchExercisesData();
    
  },[])

  const handleSearch = async () => {
        if(search){
          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
          console.log(exercisesData);
          
          const SearchedExercises = exercisesData.filter((exercise) => 
             exercise.name.toLowerCase().includes(search)
             || exercise.target.toLowerCase().includes(search)
             ||exercise.equipment.toLowerCase().includes(search)
             ||exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch('');
        setExercises(SearchedExercises);
        } 
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
           
            <HorizonalScrollbar data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
        </Box>
    </Stack>
  )
}

export default SearchExercises
