export default function Todo({todoData}) {
  return (
    <div>
        <input type="checkbox" />
        <h1> {todoData} </h1>
        <button> Edit </button>
        <button> Delete </button>
    </div>
  )
}