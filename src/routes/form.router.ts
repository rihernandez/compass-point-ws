import { Router } from "express";
import  multer from "multer";
import {
  getForms,
  getForm,
  createForm,
  updateForm,
  deleteForm,
} from "../controllers/form.controller";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '-'+file.originalname)
  }
})

const upload = multer({ storage: storage })


router.get("/forms", getForms);

router.get("/forms/:id", getForm);

router.post("/forms", createForm);

router.post('/documento', upload.single('document'), (req, res, next) => {
  const file : any = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    return next(error)
  }
    res.send(file)
  
})


router.post('/acta-personal', upload.single('acta'), (req, res, next) => {
  const file : any = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    return next(error)
  }
    res.send(file)
  
})

router.put("/forms/:id", updateForm);

router.delete("/forms/:id", deleteForm);

export default router;