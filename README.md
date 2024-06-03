# Azure OpenAI Action

This GitHub Action enables users to integrate Azure OpenAI services into their workflows, allowing for advanced natural language processing tasks.

## Purpose and Functionality

The action provides a straightforward way to interact with Azure OpenAI services, offering capabilities such as text generation, summarization, and language translation. It leverages the Azure OpenAI API to process text inputs and produce relevant outputs based on the specified prompts.

## How to Use

To use this action, you need to have an Azure account with OpenAI services set up. The action requires several inputs to function:

- `api_url`: The endpoint URL of Azure OpenAI Services.
- `deployment_id`: The deployment ID of Azure OpenAI Services.
- `api_key`: The API key to run Azure OpenAI Services.
- `system_prompt`: The prompt to pass to the model.
- `input_text`: The text to pass to the model.

For more details on inputs and outputs, refer to the [`action.yml`](action.yml) file.

### Example Workflow

```yaml
name: Example Workflow with Azure OpenAI Action
on: [push]

jobs:
  text-processing:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Process Text with Azure OpenAI
        uses: your-repo/azure-openai-action@main
        with:
          api_url: ${{ secrets.API_URL }}
          deployment_id: ${{ secrets.DEPLOYMENT_ID }}
          api_key: ${{ secrets.API_KEY }}
          system_prompt: 'Translate the text into Japanese.'
          input_text: 'Hello, how are you?'

      - name: Print the Response
        run: echo "${{ steps.process-text.outputs.response }}"
```

## Implementation Details

For a deeper understanding of how this action is implemented, please refer to the [`src/main.ts`](src/main.ts) file. This file contains the core logic for interacting with Azure OpenAI services.
