import boto3
import json

brt = boto3.client(service_name='bedrock-runtime', region_name='us-east-1')

prompt = "Cheer me up a bit but do not use more than 10 words"

body = json.dumps({
    "prompt": prompt, 
    "maxTokens": 200,
    "temperature": 0.5,
    "topP": 0.5
})

modelId = 'ai21.j2-mid-v1'
accept = 'application/json'
contentType = 'application/json'

response = brt.invoke_model(
    body=body, 
    modelId=modelId, 
    accept=accept, 
    contentType=contentType
)

response_body = json.loads(response.get('body').read())

# text
print(response_body.get('completions')[0].get('data').get('text'))