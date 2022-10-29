import { Router } from "express";
import  multer from "multer";
import path from "path";
import { createEstudiante, deleteEstudiante, getEstudiante, getEstudiantes, updateEstudiante } from "../controllers/estudiante.controller";
import bodyParser from 'body-parser';

import {
  getForms,
  getForm,
  createForm,
  updateForm,
  deleteForm,
} from "../controllers/form.controller";

const router = Router();
router.use(bodyParser.urlencoded({ extended: false }))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })




router.get("/forms", getForms);

router.get("/forms/:id", getForm);

router.post("/forms", createForm);



router.post('/documento', upload.single('documento'), (req, res, next) => {
  const file : any = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    return next(error)
  }
    res.send(file)
  
})

router.get('/documento/:filename', (req, res) => {
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, 'uploads/' + filename);
  return res.sendFile(fullfilepath);
});


router.post('/estudiantes', upload.fields([
  {name:'acta', maxCount:300},
  {name:'vacuna', maxCount:300},
  {name:'seguro-medico', maxCount:300},
  {name:'documento-personal', maxCount:300},
  {name:'documento-personal-2', maxCount:300},
  {name:'foto2x2', maxCount:300},
  {name:'documento', maxCount:300}
]), async (req, res, next) => {
  const file : any = req.file
  try {
    await createEstudiante(req,res);
  } catch (error) {
    console.log("Error trying to save estudent data")
 }
  // if (!file) {
    
  //   const error = new Error('Please upload a file')
  //   return next(error)
  // }
    res.send(file)
  
})

router.get('/estudiantes/:filename', (req, res) => {
  const { filename } = req.params;
  console.log(req.params)
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, 'uploads/' + filename);
  console.log(fullfilepath)
  return res.sendFile(fullfilepath);
});


router.get('/estudiantes', getEstudiantes);

router.get('/estudiantes/id/:id', getEstudiante);

router.delete('/estudiantes/id/:id', deleteEstudiante);

router.put('/estudiantes/id/:id', updateEstudiante);

// router.get("/estudiantes", getEstudiantes);

// router.get("/estudiantes/:id", getEstudiante);



// router.put("/forms/:id", updateForm);

// router.delete("/forms/:id", deleteForm);

export default router;