import multer, { StorageEngine } from "multer";

const storage: StorageEngine = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./public/temp");
  },
  filename: (_, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

export const upload = multer({ storage });
