from fastapi import APIRouter, HTTPException
from sqlalchemy import insert, select, delete

from src.database import async_session_maker
from src.schemas.clients import ClientAdd, Client
from src.models.clients import ClientOrm


router = APIRouter(prefix="/clients", tags= ["Клиенты"])

@router.get("")
async def read_client():
    async with async_session_maker() as session:
        query = select(ClientOrm)
        result = await session.execute(query)

        return [Client.model_validate(item, from_attributes= True) for item in result.scalars().all()]

@router.post("")
async def create_client(client_data: ClientAdd):
    async with async_session_maker() as session:
        add_client_stmt = insert(ClientOrm).values(**client_data.model_dump())
        await session.execute(add_client_stmt)
        await session.commit()
      
    return {"status": "ok"}

