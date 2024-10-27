import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post('/verify', async (request, response) => {
  console.log("Received captcha value:", captchaValue); 
  
  const { captchaValue } = request.body;
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${captchaValue}`
  );
  response.send(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});