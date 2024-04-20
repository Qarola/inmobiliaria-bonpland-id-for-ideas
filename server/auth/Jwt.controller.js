const {SignJWT, jwtVerify} = require("jose");
const dotenv = require("dotenv");
const passport = require("passport");
const {Strategy : BearerStrategy } = require('passport-http-bearer');

dotenv.config('../');


// Configurar la estrategia de autenticación Bearer
passport.use(
    new BearerStrategy(async (token, done) => {
      try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
          token,
          encoder.encode(process.env.JWT_SECRET)
        );
  
        // Aquí puedes realizar verificaciones adicionales si es necesario
  
        return done(null, payload);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  const requireRole = (role) => {
    return (req, res, next) => {
      passport.authenticate(
        "bearer",
        { session: false },
        (err, user) => {
          if (err) {
            return res.status(401).json({ message: "Unauthorized" });
          }
          if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
          }
          if (user.role !== role) {
            return res.status(403).json({ message: "Forbidden" });
          }
          req.user = user;
          next();
        }
      )(req, res, next);
    };
  };

  const validateToken = async (req, res, next) => {
  try {
    const { payload } = await jwtVerify(
      req.headers.authorization.split(" ")[1],
      Buffer.from(process.env.JWT_SECRET, "utf8")
    );
    if (payload.role === "admin" || payload.role === "user") {
      req.user = payload;
      console.log(req.user);
      return next();
    } else {
      return res.status(404).json({ status: 404, message: "Not found role" });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

  //Route to create the token

  //Todo: Implement or join this with the database, to have a better security, that in the future, the front-end will send us username and password, and we will verify the role, and give access with a token with the role, this is only a skeleton of what should be done.
  
  const createToken = async (req, res) => {
    const encoder = new TextEncoder();
    if (req.body.role == "admin" || req.body.role == "usuario") {
      const jwtConstructor = await new SignJWT(req.body)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(encoder.encode(process.env.JWT_SECRET));
      res.send(JSON.stringify({ role: req.body.role, token: jwtConstructor }));
    } else {
      res
        .status(400)
        .send(
          JSON.stringify({ status: 400, message: "Invalid credentials required" })
        );
    }
  };

  module.exports = { validateToken, requireRole, createToken };
