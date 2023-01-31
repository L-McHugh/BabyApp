import request from "supertest"
import { expect, test } from "@jest/globals"
import app from "../app.js"
import { resetObjectTable } from "./helpersFeeding.js"
import { pool } from "../db/index.js"


beforeEach(() => {
    return resetObjectTable();
});


test("GET all objects - Feeding", async function () {
    const response = await request(app).get("/api/feeding/1")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Array)
    })
});

test("GET specific object - 30ml", async function () {
    const response = await request(app).get("/api/feeding/1/30")
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
                baby_id: 1,
                feeding_id: 1,
                start_time: "2022-12-17T14:14:00.000Z",
                volume: 30
        }]
    })
});

test("POST a new object - feeding", async function () {
    const response = await (await request(app).post("/api/feeding").send({baby_id: 1, start_time: '2022-12-17 13:04:00 +0000', volume: 50, }))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            feeding_id: expect.any(Number),
            baby_id: 1,
            start_time: "2022-12-17T13:04:00.000Z",
            volume: 50
        }]
    })
});


test ("Should return a JSON object with a payload", async () => {
    const response = await request(app).patch("/api/feeding/1").send({baby_id: 1, volume: 80, start_time: '2022-12-17 13:04:00 +0000'})
    expect(response.status).toEqual(200)
    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            feeding_id: 1,
            baby_id: 1,
            start_time: "2022-12-17T13:04:00.000Z",
            volume: 80
        }]
    })

});

test("EDIT an object by id - feeding", async function () {
    const response = await (await request(app).patch("/api/feeding/1").send({baby_id: 1, volume: 80, start_time: '2022-12-17 13:04:00 +0000'}))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            feeding_id: 1,
            baby_id: 1,
            start_time: "2022-12-17T13:04:00.000Z",
            volume: 80
        }]
    })
});

test("DELETE an object by id - feeding", async function () {
    const response = await (await request(app).delete("/api/feeding/1"))
    expect(response.status).toEqual(200)

    console.log(response.body)

    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            feeding_id: 1,
            baby_id: 1,
            start_time: "2022-12-17T14:14:00.000Z",
            volume: 30
        }]
    })
});


afterAll(() => {
    return resetObjectTable();
});
    
afterAll(async () => {
    await pool.end();
});