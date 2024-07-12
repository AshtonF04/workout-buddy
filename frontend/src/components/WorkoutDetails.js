const WorkoutDetails = ({workout}) => {
    return ( 
        <div className='bg-slate-100 p-4 rounded-lg shadow-lg'>
            <h1 className="text-lg font-bold">{workout.title}</h1>
            <p><strong>Load (lbs):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <button className='rounded-md bg-red-400 px-2 py-1 mt-2 w-20 font-bold'>Delete</button>
        </div>
     );
}
 
export default WorkoutDetails;