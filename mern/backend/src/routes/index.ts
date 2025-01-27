import express from 'express';
import { userRoutes } from './User';
import { urlRoutes } from './url';

import multer from 'multer';  // for storing files
import { blogRoutes } from './blog';
import { userLogin, userSignup } from '../controlleres/loginUser';
import { authenticateToken } from './mid_check';

interface MulterRequest extends Request {
    file?: Express.Multer.File;
  }
  

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`)   // for proper format -${file.originalname}
    }
  })
  
  const upload = multer({ storage: storage })


const appRouter = express.Router();

appRouter.post('/login', userLogin);
appRouter.post('/signup' , userSignup);

appRouter.use('/user', authenticateToken, userRoutes);
appRouter.use('/blog' , authenticateToken, blogRoutes);
appRouter.use('/shorturl',authenticateToken ,  urlRoutes);

appRouter.post('/upload', upload.single('file'), (req, res) => {
    try {
      console.log('File uploaded:', req.file);
      res.json({
        message: 'File uploaded successfully',
        file: req.file,
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ message: 'File upload failed', error });
    }
  });
  

export { appRouter };