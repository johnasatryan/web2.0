const http = require('node:http');
const { URL } = require('node:url');

const createApp = () => {
  const middlewares = [];

  function use(fn) {
    if (typeof fn === 'function') {
      middlewares.push(fn);
    }
  }
  function handler(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}` || 'localhost');

    req.path = url.pathname;
    req.query = Object.fromEntries(url.searchParams.entries());

    res.statusCode = 200;

    res.status = function (code) {
      res.statusCode = code;
      return res;
    };

    res.set = function (key, value) {
      // homework
    };
    res.send = function (body) {
      if (body === undefined || body === null) body = '';

      if (Buffer.isBuffer(body)) {
        if (!res.get('Content-type'))
          res.setHeader('Content-type', 'application/octet-stream');
      }

      if (typeof body === 'object') {
        res.setHeader('Content-type', 'application/json');
      }
      if (!res.get('Content-type'))
        res.setHeader('Content-type', 'inner/text; charset=utf-8');
      res.end(body);
    };

    res.json = function (body) {
      if (body === undefined || body === null) body = '';
      res.setHeader('Content-type', 'application/json; charset=utf-8');
      res.end(JSON.parse(body));
    };

    let idx = 0;

    function next(err) {
      while (idx < middlewares.length) {
        const mw = middlewares[idx++];
        const isErrorMw = mw.length === 4;
        const isNormalMw = mw.length <= 3;

        try {
          if (err) {
            if (isErrorMw) {
              return mw(err, req, res, next);
            }
          } else {
            if (isNormalMw) {
              return mw(req, res, next);
            }
          }
        } catch {
          next(err);
        }
      }

      res.end();
    }
    next();
  }

  function listen(port, cb) {
    const server = http.createServer(handler);
    server.listen(port, cb);
    return server;
  }
  return { use, listen };
};

const app = createApp();

app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.listen(3001, () => {
  console.log('Server is runing on port:3001');
});
