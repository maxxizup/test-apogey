from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins= ["http://localhost:3000/"]
)

film = {
    "name": "Oblasty_tymy",
    "length": 300
}

@app.get("/")
async def get_film():
    return film