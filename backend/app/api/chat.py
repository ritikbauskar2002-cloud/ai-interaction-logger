from fastapi import APIRouter

from app.graph.builder import build_graph
from app.graph.state import GraphState
from app.models.interaction import Interaction

router = APIRouter()

graph = build_graph()


@router.post("/chat")
def chat(interaction: Interaction):

    state: GraphState = {
        "message": interaction.notes,
        "interaction": interaction,
        "response": ""
    }

    result = graph.invoke(state)

    return result