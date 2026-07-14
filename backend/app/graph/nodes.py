from app.graph.state import GraphState


def start_node(state: GraphState) -> GraphState:
    print("Received Message:", state["message"])

    return state
