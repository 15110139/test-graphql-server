import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export default () => {
  const app = express();
  app.use(cors());

  app.disable('x-powered-by');
  // logger
  app.use(morgan('dev'));

  app.use(cookieParser());

  app.use(bodyParser.json());



  return app;
};
