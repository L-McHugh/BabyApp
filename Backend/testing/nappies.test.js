import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetObjectTable } from "./helpersNappies"
import { pool } from "../db/index.js"
import { deleteBaby } from "../models/baby_models.js"

beforeEach(() => {
    return resetObjectTable();
});

test("GET all objects - Nappies", async function () {
    const response = await request(app).get("/api/nappies/1")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Array)
    })
})

test("GET specific object - Poop", async function () {
    const response = await request(app).get("/api/nappies/1/Poop")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
                nappy_id: 2,
                baby_id: 1,
                start_time: "2022-12-17T13:04:00.000Z",
                description: "Poop"
        }]
    })
})

test("POST a new object - nappies", async function () {
    const response = await (await request(app).post("/api/nappies").send({baby_id: 1, start_time: '2022-12-17 13:04:00 +0000', description: 'test', }))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            nappy_id: expect.any(Number),
            baby_id: 1,
            start_time: "2022-12-17T13:04:00.000Z",
            description: 'test'
        }]
    })
})

test("EDIT an object by id - nappies", async function () {
    const response = await (await request(app).patch("/api/nappies/1").send({baby_id: 1, start_time: '2022-12-17 13:04:00 +0000', description: 'test',}))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            nappy_id: expect.any(Number),
            baby_id: 1,
            start_time: "2022-12-17T13:04:00.000Z",
            description: 'test'
        }]
    })
})

test("DELETE an object by id - nappies", async function () {
    const response = await (await request(app).delete("/api/nappies/1"))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            nappy_id: expect.any(Number),
            baby_id: 1,
            start_time: "2022-12-10T14:14:00.000Z",
            description: 'Wee'
        }]
    })
})


afterAll(async function () {
    await resetObjectTable();
    await pool.end()
});
