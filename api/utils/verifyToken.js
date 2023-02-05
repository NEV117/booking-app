import  Jwt  from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.acces_token;
    if(!token){
        return next(createError(401, "you are not authenticated"))
    }

    Jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return next(createError(403, "Token not valid"));
        req.user = user;
        next()

    })
}

export const verifyUser = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(403, "You are nor autehticated!"))
        }
    })
}

export const verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(403, "You are not authorized!"))
        }
    })
}