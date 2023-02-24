import Button from "./Button";
import Count from "./Count";

export default function Counter({ count, id, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button handler={() => increment(id)}> Increment</Button>
        <Button handler={() => decrement(id)}>Decrement</Button>
      </div>
    </div>
  );
}
