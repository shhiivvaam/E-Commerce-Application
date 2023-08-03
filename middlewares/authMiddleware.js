import Jwt from "jsonwebtoken";

// Protected Route
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = Jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );           // wehave used here headers, because the auth Token is only found in Headers -> Authorization
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
};

