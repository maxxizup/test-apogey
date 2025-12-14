from pydantic import BaseModel, EmailStr, ConfigDict


class ClientAdd(BaseModel):
    name: str
    email: EmailStr


class Client(ClientAdd):
    id: int
    
    model_config = ConfigDict(from_attributes= True)
