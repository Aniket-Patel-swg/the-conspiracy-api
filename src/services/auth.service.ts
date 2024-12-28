import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { user } from "../model/user.model";
import { BadRequestError } from "../utils/errorHandling/exceptions";

dotenv.config();

class AuthService {


    public async signup(username: string, password: string): Promise<boolean> {
        try {

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new user({
                username,
                password: hashedPassword,
            });

            await newUser.save();

            return true;

        } catch (error) {
            console.error(error);
            throw new BadRequestError("Failed to sign up");
        }
    }

    public async login(username: string, password: string): Promise<string> {

        try {
            const userDetails = await user.findOne({ username });
            if (!userDetails) {
                throw new BadRequestError("User not found");
            }

            const savedHashedPassword = userDetails.password;
            const userId = userDetails._id;

            const isPasswordCorrect = await bcrypt.compare(password, savedHashedPassword);
            if (!isPasswordCorrect) {
                throw new BadRequestError("Invalid password");
            }

            const token = jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "1h" });
            return token;
        } catch (error) {
            throw new BadRequestError("Failed to login");
        }
    }
}

export default AuthService;
