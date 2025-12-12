from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins= ["http://localhost:3000/"]
)

employeers = [{
    "id": 1
    "name": "Maxim",
    "email": "example@gmail.com"
}]

@app.get("/")
async def read_employee():
    return employeers

@app.post("/")
async def create_employee(employee_data: dict):
    employeers.append(employee_data)
    return employeers