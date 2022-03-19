"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
    username: process.env.POSTGRES_USERNAME || "Omar_Mostafa",
    password: process.env.POSTGRES_PASSWORD || "ooooooo7",
    database: process.env.POSTGRES_DB || "postgres",
    port: Number(process.env.PORT) || 5432,
    host: process.env.POSTGRES_HOST ||
        "database-2.cliu0jbrgvse.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_BUCKET,
    url: process.env.URL || "http://localhost:8080",
    jwt: {
        secret: process.env.JWT_SECRET,
    },
};
//# sourceMappingURL=config.js.map