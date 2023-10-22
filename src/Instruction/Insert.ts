import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Literal } from '../Expression/Literal';

export class Insert extends Instruction {
  
  constructor(line: number, column: number, private name: String, private columns: [], private values: Literal[]) {
    super(line, column);
  }

  public execute(environment : Environment){
    if (this.columns.length == this.values.length) {
        const values = this.values.map((item) => {
          const value = item.execute(environment);
          return value;
        });
        environment.insert(this.name.toString().toLocaleLowerCase(), this.columns, values);
    } else {
      console.log("Error: la cantidad de campos no coincide con la cantidad de valores");
    }
      
  }

}