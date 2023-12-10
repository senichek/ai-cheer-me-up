import json
import boto3

def getAiResponse():
    brt = boto3.client(service_name='bedrock-runtime', region_name='us-east-1')

    prompt = "Provide one fact about the trains but the sentence you provide should not exceed 15 words."

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

    return response_body.get('completions')[0].get('data').get('text')


def handler(event, context):
  print(event)

  response = getAiResponse()
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(response)
  }