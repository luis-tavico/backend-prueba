import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Relational } from '../Expression/Relational';
import { Assignment } from './Assignment';

export class Update extends Instruction {
  
    constructor(line: number, column: number, private name: String, private columns: Assignment[], private condition: Relational) {
        super(line, column);
    }

    public execute(environment : Environment){
        environment.update(this.name.toString().toLocaleLowerCase(), this.columns, this.condition)        
    }
      
}