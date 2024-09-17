import cors from 'cors';

const whitelist = ['http://localhost:3000', 'http://localhost:5173'];

export const corsOptions: cors.CorsOptions = {
    origin: function (origin, callback) {
        if (process.env.NODE_ENV === 'development') {
            // Allow any origin in development
            callback(null, true);
        } else if (whitelist.indexOf(<string>origin) !== -1 || !origin) {
            // Allow specific origins in production
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};