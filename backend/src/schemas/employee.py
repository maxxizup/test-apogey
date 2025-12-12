from pydantic import BaseModel, EmailStr, ConfigDict


class EmployeeAdd(BaseModel):
    name: str
    email: EmailStr


class Employee(EmployeeAdd):
    id: int
    
    model_config = ConfigDict(from_attributes= True)


class EmployeePatch(BaseModel):
    name: str | None = None
    email: EmailStr | None = None 