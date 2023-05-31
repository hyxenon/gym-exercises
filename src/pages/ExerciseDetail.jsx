import React, { useEffect, useState } from 'react'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { useParams } from 'react-router-dom'
const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})

  const [exerciseVideos, setExerciseVideos] = useState([])

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])

  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams()

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents)

      const targetMuscleData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleData)

      const equipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentData)

      

    }

    fetchExercisesData()
  }, [id])


  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        
    </Box>
  )
}

export default ExerciseDetail