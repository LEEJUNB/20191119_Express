import routes from "./routes";

export const localMiddleware = (req,res,next) => {
    res.locals.siteName = "Juntube!!";
    res.locals.routes = routes;
    next();
};