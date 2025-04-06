
export default function Card ( {children} ) {

  return (
    <div
      style={{
        background: "grey",
        color: "white",
        padding: 10,
        borderRadius: 10,
        margin: 10,
      }}
    >
      {children}
    </div>

  );
}