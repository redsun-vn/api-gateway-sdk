// import { createParamDecorator } from '@nestjs/common';
// import { Request } from 'express';

// import * as requestIp from 'request-ip';

// export const IpAddress = createParamDecorator((data, req) => {
// if (req.clientIp) return req.clientIp;
// let ip: string = '';
// console.log(req.args[0].headers)
// ip = req.headers['cf-connecting-ip']? req.headers['cf-connecting-ip'] : '';
// if (!ip.length) {
// 	ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
// 	if (ip && ip.substring(0, 7) == '::ffff:') {
// 		ip = ip.substring(7);
// 	}
// }
// const clientIp = ip.length ? ip : requestIp.getClientIp(req);
// return clientIp || '127.0.0.1'; // In case we forgot to include requestIp.mw() in main.ts
// });
