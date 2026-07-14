from langgraph.graph import StateGraph, END

from app.graph.state import GraphState
from app.graph.nodes import start_node


def build_graph():
    workflow = StateGraph(GraphState)

    workflow.add_node("start", start_node)

    workflow.set_entry_point("start")

    workflow.add_edge("start", END)

    return workflow.compile()