import * as crypto from 'crypto';
// import { v4 as uuid } from 'uuid';
type Callback = (error: Error | null, result?: string) => void;

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Callback,
) => {
  // if (!file) callback(new Error('No file provided'), false);
  const fileExtension = file.mimetype.split('/')[1];
  // const fileName = `${Date.now()}-${file.originalname}`;
  // callback(null, `${uuid()}-${file.originalname}`);
  const hash = crypto
    .createHash('sha256')
    .update(file.originalname)
    .digest('hex');
  callback(null, `${hash}.${fileExtension}`);
};
