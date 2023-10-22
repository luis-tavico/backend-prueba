import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Expression } from '../Abstract/Expression';

export class Rename extends Instruction {
  
    constructor(line: number, column: number, private name: String, private new_name: Expression) {
        super(line, column);
    }
    
      public execute(environment: Environment) {
        const new_name = this.new_name.execute(environment);
        environment.renameTable(this.name.toString(), new_name);
    }
      
}