import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any
from langgraph_app import app

class SearchQuery(BaseModel):
    user_input:str

app_server=FastAPI(
    title='LangGraph Search Agent API',
    description='API to run the place search workflow'
)

## allow react app running in different port (e.g. 3000) to talk to this server (8000)
origins=[
    'http://localhost',
    'http://localhost:3000'
]

app_server.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app_server.post('/search')
async def run_langgraph_search(query:SearchQuery) -> Dict[str,Any]:
    """
    Receives user input from React, runs the LangGraph workflow, 
    and returns the final answer.
    """
    print('user query: ',query.user_input)
    initial_state={'user_query':query.user_input}

    try:
        ## invoke the langgraph
        final_state=app.invoke(initial_state)
        final_answer = final_state.get("final_answer", "Search completed, but no answer was formatted.")
        places_data = final_state.get('places_data',[])

        return {
            'status':'success',
            'result':final_answer,
            'data':places_data
        }
    except Exception as e:
        print(f'Server Error during LangGraph execution: {e}')
        return {
            'status':'error',
            'message':f'Server failed to execute agemt: {str(e)}'
        }

if __name__=='__main__':
    uvicorn.run(app_server,host='0.0.0.0',port=8001)