
import { Expression } from '../Abstract/Expression';
import { Return } from '../Abstract/Return';
import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Table } from '../Symbol/Table';
import { Field } from '../Expression/Field';

export class CreateTable extends Instruction {

  constructor(line: number, column: number, private name: String, private columns: Field[]) {
    super(line, column);
  }

  public execute(environment: Environment) {
    const columns = this.columns.map((item) => {
    const value = item.execute(environment);
    return value;
    });
    environment.saveTable(this.name.toString(), new Table(this.name.toString(), columns));
  }

}