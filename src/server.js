import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Normal express config defaults
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// test Route Response
app.get('/', (req, res) =>
  res.json({ status: 200, message: 'Welcome to Eventhome' }),
);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () =>
  console.log(`🚀 🚀 Server started on localhost:${port}`),
);

export default app;
