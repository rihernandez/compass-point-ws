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

import {client} from "../redis"




// client.on('error', (err) => console.error(err));
// client.on('connect',() => console.log('Connected!'));



const router = Router();
router.use(bodyParser.urlencoded({ extended: false }))

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.originalname)
//   }
// })

// const upload = multer({ storage: storage })



router.get("/forms", getForms);
router.get("/forms/:id", getForm);
router.post("/forms", createForm);



router.post('/documento', (req, res, next) => {
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


router.post('/estudiantes', async (req, res) => {
  // const file : any = req.files
    const id = await createEstudiante(req,res);
    res.send({"data saved successfully :": id})
  
})

router.get('/estudiantes/:id', async (req, res) => {
  const { id } = req.params;
  // await client.connect()
  const resultEstudiante = await client.get(String(id));
  // await client.disconnect()

const documents = JSON.parse(JSON.parse(JSON.stringify(resultEstudiante)))
const {acta, vacuna,seguro_medico, documento_personal, documento_personal2,foto2x2, documento} = documents

const act = typeof acta !== 'undefined' ? acta[0].filename : ""
const vac = typeof vacuna !== 'undefined' ? vacuna[0].filename : ""
const seg = typeof seguro_medico !== 'undefined' ? seguro_medico[0].filename : ""
const dper = typeof documento_personal !== 'undefined' ? documento_personal[0].filename : ""
const dp2 = typeof documento_personal2 !== 'undefined' ? documento_personal2[0].filename : ""
const foto = typeof foto2x2 !== 'undefined' ? foto2x2[0].filename : ""
const doc = typeof documento !== 'undefined' ? documento[0].filename : ""

  return res.send({
    "acta":act,
    "vacuna":vac,
    "seguro_medico":seg,
    "documento_personal":dper,
    "documento_personal2":dp2,
    "foto2x2":foto,
    "documento":doc
})

});

router.get('/estudiantes/file/:filename', async (req, res) => {
  const { filename } = req.params;
  const dirname = path.resolve();
     const fullfilepath = path.join(dirname, 'uploads/' + filename);
     console.log(fullfilepath)
     return res.sendFile(fullfilepath);
})


router.get('/estudiantes', getEstudiantes);
router.get('/estudiantes/id/:id', getEstudiante);
router.delete('/estudiantes/id/:id', deleteEstudiante);
router.put('/estudiantes/id/:id', updateEstudiante);

// router.get("/estudiantes", getEstudiantes);
// router.get("/estudiantes/:id", getEstudiante);
// router.put("/forms/:id", updateForm);
// router.delete("/forms/:id", deleteForm);

export default router;