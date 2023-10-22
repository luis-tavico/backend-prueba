import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Relational } from '../Expression/Relational';

export class Select extends Instruction {
  
    constructor(line: number, column: number,  private columns: [] | null, private name: String, private condition: Relational | null) {
        super(line, column);
    }

    public execute(environment : Environment){
        if (this.condition == null) {
            if (this.columns != null) {
                environment.select(this.name.toString().toLocaleLowerCase(), this.columns, null)        
            } else {
                environment.select(this.name.toString().toLocaleLowerCase(), null, null)
            }
        } else {
            environment.select(this.name.toString().toLocaleLowerCase(), this.columns, this.condition)        
        }
    }
      
}