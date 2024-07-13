import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {
    const {dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return ( 
        <div className='bg-slate-100 p-4 rounded-lg shadow-lg'>
            <h1 className="text-lg font-bold">{workout.title}</h1>
            <p><strong>Load (lbs):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <button onClick={handleClick} className='rounded-md bg-red-400 px-2 py-1 mt-2 w-20 font-bold text-white'>Delete</button>
        </div>
     );
}
 
export default WorkoutDetails;