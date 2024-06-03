# Azure OpenAI Action

[![GitHub Super-Linter](https://github.com/yuichielectric/azure-openai-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
[![CI](https://github.com/yuichielectric/azure-openai-action/actions/workflows/ci.yml/badge.svg)](https://github.com/yuichielectric/azure-openai-action/actions/workflows/ci.yml)
[![Check dist/](https://github.com/yuichielectric/azure-openai-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/yuichielectric/azure-openai-action/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/yuichielectric/azure-openai-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/yuichielectric/azure-openai-action/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

This action enables you to call the Azure OpenAI Service Chat Completions API
within your GitHub Actions workflow.

## Prerequisites

Before using this action, you need to have an
[Azure subscription](https://azure.microsoft.com/free/dotnet/) and
[Azure OpenAI](https://learn.microsoft.com/azure/cognitive-services/openai/overview#how-do-i-get-access-to-azure-openai)
access. For more information, see
[Quickstart: Get started generating text using Azure OpenAI Service](https://learn.microsoft.com/azure/cognitive-services/openai/quickstart).

## How to Use

To use this action, you need to have an Azure account with OpenAI services set
up. The action requires several inputs to function:

- `api_url`: The endpoint URL of Azure OpenAI Service.
- `deployment_id`: The deployment ID of Azure OpenAI Service.
- `api_key`: The API key to run Azure OpenAI Service.
- `system_prompt`: Specify the instructions for the task you want the model to
  perform.
- `input_text`: Provide the text to be input for the task.

This action returns the text obtained from the model as `response`.

### Example Workflow

```yaml
name: Translate Text with Azure OpenAI
on: [workflow_dispatch]

jobs:
  translate:
    runs-on: ubuntu-latest
    steps:
      - name: Process Text with Azure OpenAI
        id: process-text
        uses: yuichielectric/azure-openai-action@v1
        with:
          api_url: ${{ secrets.API_URL }}
          deployment_id: ${{ secrets.DEPLOYMENT_ID }}
          api_key: ${{ secrets.API_KEY }}
          system_prompt: 'Translate the text into Japanese.'
          input_text: 'Hello, how are you?'

      - name: Print the Response
        run: echo "${{ steps.process-text.outputs.response }}"
```
