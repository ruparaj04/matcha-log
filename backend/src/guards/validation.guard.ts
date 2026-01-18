import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ValidationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Basic validation guard - checks if request has valid headers
    if (request.method === 'POST' || request.method === 'PUT') {
      const contentType = request.headers['content-type'];
      return contentType && contentType.includes('application/json');
    }
    
    return true;
  }
}
