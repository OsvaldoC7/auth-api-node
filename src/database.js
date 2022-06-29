import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/modular', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useFindAndModify: true,
  // useCreateIndex: true
}).then(db => (
  console.log('Database is connected')
)).catch(error => (
  console.log(error)
))
