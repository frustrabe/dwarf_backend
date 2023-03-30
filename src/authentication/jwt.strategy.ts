import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validateUser(payload: any) {
    return {
      id: payload.id,
      username: payload.username,
      tenantId: payload.tenantId,
    };
  }

  async validateTenant(payload: any) {
    return {
      id: payload.id,
      username: payload.username,
      tenantId: payload.tenantId,
    };
  }
}