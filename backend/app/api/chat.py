from fastapi import APIRouter
from app.models.interaction import Interaction

router = APIRouter()


@router.post("/chat")
def chat(interaction: Interaction):
    return {
        "status": "success",
        "data": interaction
    }