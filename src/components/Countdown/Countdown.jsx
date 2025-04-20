export function Countdown() {
  return (
    <div className="flex bg-bisque-100 rounded-lg justify-center items-center font-sans-serif">
      <div>
        <h1 className="text-3xl font-bold underline">Countdown timer app</h1>
        <div id="input" className="rounded-lg bg-gray-200">
          <input type="datetime-local" id="datetime" />
          <button id="start">Start</button>
        </div>
        <div id="countdown-display" className="text-xl mt-4"></div>
      </div>
    </div>
  );
}
