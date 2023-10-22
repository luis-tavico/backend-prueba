import { Error } from "./Error";

export let errors : Array<Error> = new Array();

export const cleanErrors = ()=>{
    errors = []
}