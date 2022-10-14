import jwt from "jsonwebtoken";

export const geneTokens = async (data: any) => {
    return await jwt.sign({ ...data?._doc }, process.env.JWT_PRIVATE_KEY || 'qwasdf12');
};
