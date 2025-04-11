
import express,{Request,Response,NextFunction} from "express";

// import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import bookRoutes from "./routes/bookRoutes";

const app = express();

// Middleware
app.use(express.json());
// app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);


app.use((req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
    });
  });
  

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  });

export default app;
