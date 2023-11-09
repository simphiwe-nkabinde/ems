import express, { Request, Response } from "express";
import employeesRoutes from './api/employee/routes/employee.routes'
import authRoutes from './api/auth/routes/auth.routes'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/employees', employeesRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});