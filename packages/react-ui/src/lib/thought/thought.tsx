import { IThought } from '@surjit/types';

export interface ThoughtProps {
  thought: IThought;
}

export function Thought({ thought }: ThoughtProps) {
  return (
    <div>
      <h1 className="text-yellow-600">{thought.title}</h1>
    </div>
  );
}

export default Thought;
