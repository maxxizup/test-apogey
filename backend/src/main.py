from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.employee import router as employees_router

app = FastAPI()

app.include_router(employees_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins= ["http://localhost:3000/"]
)
