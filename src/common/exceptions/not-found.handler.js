const NotFoundHandler = (app) => {
    app.use((req, res) => {
        res.status(404).json({
            message: "آدرس مورد نظر یافت نشد !",
            method: req.method,
            url: req.originalUrl
        });
    });
};

export default NotFoundHandler;