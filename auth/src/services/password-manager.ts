import bcrypt from 'bcrypt'

export class PasswordManager{
    static async hashPassword(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    static async comparePassword(password:string, hashedPassword:string):Promise<boolean>{
        return await bcrypt.compare(password, hashedPassword)
    }
}