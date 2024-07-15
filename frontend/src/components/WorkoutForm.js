import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    const { dispatch: workoutsDispatch } = useWorkoutsContext()

    // Create states for all workout fields
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok){
            setError(json.msg)
            setEmptyFields(json.emptyFields)
        } else {
            setError(null) 
            setEmptyFields([])
            setTitle('')
            setLoad('')
            setReps('')
            workoutsDispatch({type: "CREATE_WORKOUT", payload: json})
        }
    }

    return ( 
        <form onSubmit={handleSubmit} className="shadow-lg rounded-lg bg-slate-100 p-4 flex flex-col gap-4 px-8 h-96">
            <h2 className="text-lg font-bold">Add a New Workout</h2>

            <div className="flex flex-col gap-2">
                <label>Exercise Title:</label>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={`rounded-md p-1 ${emptyFields.includes('title') ? 'border-2 border-red-400' : ''}`}
                />
            </div>
            
            <div className="flex flex-col gap-2">
                <label>Load (in lbs):</label>
                <input 
                    type="number" 
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    className={`remove-arrow rounded-md p-1 ${emptyFields.includes('load') ? 'border-2 border-red-400' : ''}`}
                />
            </div>
            
            <div className="flex flex-col gap-2">
                <label>Reps:</label>
                <input 
                    type="number" 
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    className={`remove-arrow rounded-md p-1 ${emptyFields.includes('reps') ? 'border-2 border-red-400' : ''}`}
                />
            </div>

            <button className="justify-self-start w-24 py-1 rounded-md bg-blue-400 text-white font-bold">Submit</button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
        </form>
     );
}
 
export default WorkoutForm;