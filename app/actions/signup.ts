"use server"
import client from "db";

export default async function (email:string, password:string) {
    const user = await client.user.create({
        data: {
            username: email,
            password: password
        }
    });
}