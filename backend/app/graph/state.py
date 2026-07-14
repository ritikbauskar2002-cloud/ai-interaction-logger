from typing import TypedDict

from app.models.interaction import Interaction


class GraphState(TypedDict):
    message: str
    interaction: Interaction | None
    response: str