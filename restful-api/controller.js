Controller = {
  // stringifies payload and sets to response body, in devel
  // this will pretty print. Prevents caching for this response.
  json(conn, payload) {
    checkArgLenth(arguments, 2);
    const spacer = process.env.NODE_ENV === 'development' ? 2 : null;
    conn.res.setHeader("Content-type", "application/json");
    conn.res.setHeader('Cache-Control', 'no-store');
    conn.res.setHeader('Pragma', 'no-cache');
    conn.res.write(JSON.stringify(payload, null, spacer));
    return conn;
  },

  setStatus(conn, code) {
    checkArgLenth(arguments, 2);
    conn.res.statusCode = code;
    return conn;
  },

  setHeader(conn, key, value) {
    checkArgLenth(arguments, 3);
    conn.res.setHeader(key, value);
    return conn;
  },
};

// ! throws if args are not correct
function checkArgLenth(args, len) {
  if (args.length !== len) {
    throw new Error(`Must pass in ${len} arguments, conn first.`);
  }
}
