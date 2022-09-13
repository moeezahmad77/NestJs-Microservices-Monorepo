import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class HelperService {
  constructor(private readonly httpService: HttpService) {}

  apiCall(url, method, headers?, data?) {
    return this.httpService
      .request({
        url: url,
        method: method,
        headers: headers,
        data: data,
      })
      .toPromise();
  }
}
