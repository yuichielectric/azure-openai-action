import * as core from '@actions/core'
import { HttpClient } from '@actions/http-client'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const apiUrl: string = core.getInput('api_url')
    const apiKey: string = core.getInput('api_key')
    const model: string = core.getInput('model')
    const prompt: string = core.getInput('prompt')
    const inputText: string = core.getInput('input_text')

    const requestBody = {
      model: model,
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: inputText }
      ]
    }

    const httpClient = new HttpClient('azure-openai-service-action')
    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey
    }

    const response = await httpClient.postJson(apiUrl, requestBody, headers)
    if (response.statusCode >= 200 && response.statusCode < 300) {
      core.info(`Response: ${JSON.stringify(response.result)}`)
      core.setOutput('response', JSON.stringify(response.result))
    } else {
      throw new Error(`Failed to call API: ${response.statusCode} - ${response.result}`)
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
