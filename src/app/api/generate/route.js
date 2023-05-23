import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

if (!configuration.apiKey) throw new Error('OPENIA_API_KEY is undefined');

const  openai = new OpenAIApi(configuration);

export async function POST(request) {

  const body = await request.json()

  if(!body.prompt || body.prompt === 0){
    return NextResponse.error(new Error('Prompt is required'))
  }
  try {
    const response = await openai.createCompletion({
      prompt: `Dame un titulo llamativo sobre ${body.prompt}`,
      model: 'text-davinci-003',
      temperature: 0.7,
      max_tokens: 200
    });
    console.log(response.data.choices)
    return NextResponse.json(response.data.choices[0].text);
  } catch(error){
    return NextResponse.error,{
      status: 500
    }
  }
}
