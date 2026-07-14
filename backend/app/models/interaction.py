from pydantic import BaseModel


class Interaction(BaseModel):
    hcp_name: str = ""
    date: str = ""
    product: str = ""
    sentiment: str = ""
    brochure_shared: bool = False
    notes: str = ""