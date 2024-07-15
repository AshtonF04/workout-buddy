import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const {workouts, dispatch: workoutsDispatch} =  useWorkoutsContext()

    // useEffect hook to fire once when page is loaded and fetch data
    useEffect(() => {
        const fetchWorkouts = async() => {
            // API request to get workouts from database 
            const response = await fetch('/api/workouts')

            // store json response from fetch
            const json = await response.json()

            // run logic only if response is ok
            if (response.ok){
                workoutsDispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [])

    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-8 sm:col-span-2">
                {/* Check if workouts exist, and if so map over workouts array*/}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    );
}
 
export default Home;