import app from './app';
import routes from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://test:test@ds111638.mlab.com:11638/redit-api',()=>{
    console.log('connectd to redit-api successfully');
});

app.use(bodyParser.json());
app.use('/api',routes);

app.listen(3000,()=>{
    console.log(`listening on port `);
});
