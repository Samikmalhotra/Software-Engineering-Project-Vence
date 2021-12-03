import mongoose from "mongoose";
import {PasswordManager} from "../services/password-manager";

interface UserAttrs {
    name: string;
    email: string;
    password: string;   
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await PasswordManager.hashPassword(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

const user = User.build({
    name: 'test',
    email: 'test@test.com',
    password: 'test'
});

export {User};