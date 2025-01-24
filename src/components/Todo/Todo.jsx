export default function Todo({todoData}) {
  return (
    <div>
        <input type="checkbox" />
        <h1> {todoData} </h1>
        <butoon> Edit </butoon>
        <button> Delete </button>
    </div>
  )
}