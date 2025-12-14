from fastapi import APIRouter, HTTPException
from sqlalchemy import insert, select, delete

from src.database import async_session_maker
from src.schemas.employee import EmployeeAdd, Employee
from src.models.employee import EmployeeOrm


router = APIRouter(prefix="/employees", tags= ["Сотрудники"])

@router.get("")
async def read_employee():
    async with async_session_maker() as session:
        query = select(EmployeeOrm)
        result = await session.execute(query)

        return [Employee.model_validate(item, from_attributes= True) for item in result.scalars().all()]

@router.post("")
async def create_employee(employee_data: EmployeeAdd):
    async with async_session_maker() as session:
        add_employee_stmt = insert(EmployeeOrm).values(**employee_data.model_dump())
        await session.execute(add_employee_stmt)
        await session.commit()
      
    return {"status": "ok"}
