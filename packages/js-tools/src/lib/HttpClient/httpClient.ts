import { betterFetch } from './betterFetch';

interface IHttpClientOptions {
  baseURL: string;
  defaultHeaders: HeadersInit;
}

export class HttpClient {
  private baseURL: IHttpClientOptions['baseURL'];
  private defaultHeaders: IHttpClientOptions['defaultHeaders'];

  constructor({ baseURL, defaultHeaders }: IHttpClientOptions) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
  }

  get(url: string, headers: Headers) {
    return betterFetch(this.baseURL + url, {
      headers: { ...this.defaultHeaders, ...headers },
    });
  }
}

export default HttpClient;
