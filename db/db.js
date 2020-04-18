const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://boyanivskyy:pJpVlENI2hUS4Kf9@course-work-wnaib.mongodb.net/test?',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
