/* eslint-disable-next-line */
export interface ThoughtProps {}

export function Thought(props: ThoughtProps) {
  return (
    <div>
      <h1 className="text-yellow-600">Welcome to Thought! {Math.random()}</h1>
    </div>
  );
}

export default Thought;
