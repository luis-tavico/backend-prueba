import { Type } from "../Symbol/Type";

export const types = [
    [Type.INT,    Type.DOUBLE, Type.DATE, Type.INT,     Type.NULL, Type.NULL],
    [Type.DOUBLE, Type.DOUBLE, Type.DATE, Type.DOUBLE,  Type.NULL, Type.NULL],
    [Type.DATE,   Type.DATE,   Type.NULL, Type.DATE,    Type.NULL, Type.NULL],
    [Type.INT,    Type.DOUBLE, Type.DATE, Type.VARCHAR, Type.NULL, Type.NULL],
    [Type.NULL,   Type.NULL,   Type.NULL, Type.NULL,    Type.NULL, Type.NULL],
    [Type.NULL,   Type.NULL,   Type.NULL, Type.NULL,    Type.NULL, Type.NULL],
];