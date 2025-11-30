import json
import requests
from typing import Dict,Any,List
from langgraph.graph import StateGraph,END,START


API_ENDPOINT = "https://ukj1mdzfde.execute-api.eu-north-1.amazonaws.com/default/places"

def call_api_gateway_tool(endpoint_url:str,payload:Dict[str,Any]) -> List[Dict[str,Any]]:
    try:
        response=requests.post(
            endpoint_url,
            json=payload,
            timeout=15
        )

        response.raise_for_status()
        api_data=response.json()

        print('api data',api_data)

        if isinstance(api_data, dict):
            return api_data.get("data", [])
        return api_data

    except requests.exceptions.RequestException as e:
        print(f"ERROR calling API Gateway: {e}")
        # Return an empty list on failure so the graph can continue gracefully
        return []
    
def retrieve_places_list(state:Dict[str,Any]) -> Dict[str,Any]:
    """LangGraph node to call the remote retrieve_places_list Lambda via API Gateway."""
    user_query = state.get("user_query", "food spots")
    
    # Example logic to extract preferences from a query (in a real agent, an LLM would do this)
    preferences = ["restaurant", "takeaway"] 
    
    # Prepare payload for the remote Lambda
    payload = {"query": user_query, "preferences": preferences}
    
    # Call the API Gateway wrapper
    places_list_result = call_api_gateway_tool(API_ENDPOINT, payload)
    
    # Update the LangGraph state with the result
    return {"places_data": places_list_result}


def format_output_node(state: Dict[str, Any]) -> Dict[str, Any]:
    """LangGraph node to format the final output for the React frontend."""
    places = state.get("places_data", [])
    
    if not places:
        final_response = "I couldn't find any places matching your query. Please try searching for a different area or type of place."
    else:
        # Format the top 3 results neatly
        formatted_list = "\n".join([f"- {p.get('name', 'Unnamed Place')} (Rating: {p.get('rating', 'N/A')})" 
                                    for p in places[:3]])
        
        final_response = (
            f"I found {len(places)} results for '{state['user_query']}'.\n"
            f"Here are the top 3:\n{formatted_list}"
        )
        
    return {"final_answer": final_response}

class AgentState(Dict):
    user_query:str
    places_data:List[Dict[str,Any]]
    final_answer:str

workflow = StateGraph(AgentState)

# 1. Add Nodes
workflow.add_node("lookup", retrieve_places_list)
workflow.add_node("format", format_output_node)

# 2. Define Edges (flow)
workflow.add_edge(START, "lookup")
workflow.add_edge("lookup", "format")
workflow.add_edge("format", END)

# Compile the graph
app = workflow.compile()