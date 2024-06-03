import * as core from '@actions/core'
import { OpenAIClient, AzureKeyCredential } from '@azure/openai'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const apiUrl: string = core.getInput('api_url')
    const deploymentId: string = core.getInput('deployment_id')
    const apiKey: string = core.getInput('api_key')
    const prompt: string = core.getInput('prompt')

    const client = new OpenAIClient(apiUrl, new AzureKeyCredential(apiKey))
    const { choices } = await client.getCompletions(deploymentId, [prompt])
    core.info(`Response: ${choices}`)
    const response = choices[0].text
    core.setOutput('response', response)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
