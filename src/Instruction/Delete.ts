import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Relational } from '../Expression/Relational';

export class Delete extends Instruction {
  
    constructor(line: number, column: number, private name: String, private condition: Relational) {
        super(line, column);
    }

    public execute(environment : Environment){
        environment.delete(this.name.toString().toLocaleLowerCase(), this.condition)        
    }
      
}