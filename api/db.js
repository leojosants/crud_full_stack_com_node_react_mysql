// 
import mysql from "mysql";

export const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "l1j1o1s1",
        database: "crud"
    }
);