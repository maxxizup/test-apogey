from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String

from src.database import Base


class ClientOrm(Base):
    __tablename__ = "clients"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(40))
    email: Mapped[str] = mapped_column(String(40))