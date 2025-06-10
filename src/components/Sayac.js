import useCounter from "../useCounter";

function Sayac() {
  const [num, increment, decrement, reset] = useCounter();

  return (
    <div className="Box">
      <div>Sayı = {num}</div>
      <div>
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
}

export default Sayac;
