type Callback = (error: Error | null, result?: boolean) => void;

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Callback,
) => {
  if (!file) callback(new Error('No file provided'), false);
  const fileExtesion = file.originalname.split('.').pop();
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  if (allowedExtensions.includes(fileExtesion)) {
    callback(null, true);
  }
  callback(null, false);
};
