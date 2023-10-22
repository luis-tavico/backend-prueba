import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';

export class Truncate extends Instruction {
  
  constructor( line: number, column: number, private name: String) {
    super(line, column);
  }

  public execute(environment : Environment){
    environment.truncate(this.name.toString().toLocaleLowerCase());     
  }

}