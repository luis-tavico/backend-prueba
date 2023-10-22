import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";

export class Block extends Instruction {

    constructor(line: number, column: number, private code: Array<Instruction>) {
        super(line, column);
    }

    public execute(env: Environment) {
        const newEnv = new Environment(env);
    
        for (const instr of this.code) {

            if(instr){
                try {
                    const element = instr.execute(newEnv);
                    if (element != undefined || element != null)
                        return element;
                } catch (error) {
                    console.log('Error envieroment: ', error);    
                }
            }else{
                console.log('Error envieroment', instr);
            }

        }
    }
}