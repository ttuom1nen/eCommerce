"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var express_sslify_1 = __importDefault(require("express-sslify"));
// loads .env file
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
var app = express_1.default();
var port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
if (process.env.NODE_ENV === "production") {
    // Setting trustProtoHeader: true is for reverse proxies
    app.use(express_sslify_1.default.HTTPS({ trustProtoHeader: true }));
    // __dirname is part of node.js, it is the current directory
    app.use(express_1.default.static(path_1.default.join(__dirname, "../frontend/build")));
    app.get("*", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../frontend/build", "index.html"));
    });
}
app.listen(port, function () {
    console.log("Server running on port: ", port);
});
app.get("/service-worker.js", function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, "..", "build", "service-worker.js"));
});
app.post("/payment", function (req, res) {
    var body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
    };
    res.status(200).send({ success: body });
    console.log("Payment: " + JSON.stringify(body));
});
