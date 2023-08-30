import { TestemunhoContent } from "./style";
import TestemunhoItem from "./TestemunhoItem";

export default function Testemunho(){
  return(
    <TestemunhoContent>
      <h1>What people are saying...</h1>
      <div className="cards testemunhos">
        <TestemunhoItem />
      </div>
    </TestemunhoContent>
  )
}