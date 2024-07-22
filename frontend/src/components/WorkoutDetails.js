import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutDetails = ({workout}) => {
    const { dispatch: workoutsDispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user){
            return
        }

        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
            workoutsDispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return ( 
        <div className='bg-slate-100 p-4 rounded-lg shadow-lg'>
            <h1 className="text-lg font-bold">{workout.title}</h1>
            <p><strong>Load (lbs):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <button onClick={handleClick} className='material-symbols-outlined rounded-md bg-red-400 p-1 mt-2 font-bold text-white'>delete</button>
        </div>
     );
}
 
export default WorkoutDetails;