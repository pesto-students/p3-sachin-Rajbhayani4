import { Request, Response } from "express";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req: Request, file: any, callback: any) {
        callback(null, './Assets')
    },
    filename: function (req: Request, file: any, callback: any) {
        callback(null, file.fieldname + '-' + Date.now());
    }
})

// const fileFilter = (req: Request, file: any, callback: any) => {
//     if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
//         callback(null, true);
//     } else {
//         callback(null, false);
//     }
// }

export const upload = multer({ storage: storage }).single("image")