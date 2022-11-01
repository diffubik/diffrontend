import { Buffer } from 'buffer';
import {
  createPromiseClient,
  createGrpcWebTransport,
} from "@bufbuild/connect-web";

import {
  GenerationService,
  Request,
  Prompt,
  ImageParameters,
} from "sdgrpc-web";

export const engineId = "stable-diffusion-v1-4";

async function genImg({ baseUrl, prompt }: { baseUrl: string; prompt: string }) {
  const transport = createGrpcWebTransport({ baseUrl });
  const client = createPromiseClient(GenerationService, transport);
  const res = await client.generate(
    new Request({
      prompt: [new Prompt({ prompt: { case: "text", value: prompt } })],
      engineId,
      params: {
        case: "image",
        value: new ImageParameters({
          width: 512n,
          height: 512n,
          steps: 50n,
        }),
      },
    })
  );

  for await (const r of res) {
    for (const a of r.artifacts) {
      if (a.data.case !== 'binary') {
        throw new Error();
      }
      const p = document.createElement('img')
      p.src = `data:image/png;base64,${Buffer.from(a.data.value).toString('base64')}`;
      document.documentElement.append(p);
    }
  }
}

function getValue(elId: string): string | null {
  const e = document.querySelector(`#${elId}`);
  if (e) {
    return (e as HTMLInputElement).value;
  }
  throw new Error();
}

window.addEventListener('load', function () {
  const res = document.querySelector('#submit');
  if (!res) {
    throw new Error();
  }
  res.addEventListener('click', function () {
    const baseUrl = getValue('baseUrl');
    const prompt = getValue('prompt');
    if (baseUrl && prompt) {
      return genImg({ baseUrl, prompt });
    }
    throw new Error();
  })
})
