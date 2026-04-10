import {prisma} from '../config/db.js'
import bcrypt from 'bcryptjs';

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required" });
    }

    const userExists = await prisma.user.findUnique({
        where: { email },
    });

    if (userExists) {
        return res.status(400).json({ error: "User already exists with this email" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    res.status(201).json({
        status: "success",
        data: {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        },
    });

    
   
};


const login = async(req, res) => {
    const {email,password} = req.body;

    //check if user email exists
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if(!user){
        return res.status(401).json({error:"Invalid email or password"});
    }

    //verify password 
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({error:"Invalid email or password"});
    }
    res.status(201).json({
        status: "success",
        data: {
            user: {
                id: user.id,
                email: user.email,
            },
        },
    });
};

export { register, login };