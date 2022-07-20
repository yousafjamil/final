const router = require('express').Router();
const multer = require('multer')
const Blog = require('../models/blog');
// const upload = multer({ dest: 'uploads/' })
// const fs=require('fs')


router.get('/allblog', async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json({ success: true, msg: 'all blog shown below', blogs });
});

router.get('/singleblog/:id', async (req, res) => {
    const id = req.params.id
    const blog = await Blog.findById(id)
    res.status(200).json({ success: true, msg: 'single blog Detail', blog });
});
//////////////////create blog route

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//        cb(null, 'uploads');
//     },
//     filename: function (req, file, cb) {
//        cb(null, Date.now() + '-' + file.originalname);
//     }
//  });
//  var upload = multer({ storage: storage });

//  upload.single('image')
router.post('/createblog', async (req, res) => {
    const { title, auther, catogery, blogbody, image } = req.body;

    try {
        if (!title || !auther || !catogery || !blogbody || !image) {
            return res.status(204).json({
                success: false,
                msg: "please fill all the required fields"
            })
        } else {

            // let fileUrl = req.file.path.replace(/\\/g, "/")

            const saveBlog = await Blog.create({
                // req.body
                title, auther, catogery, blogbody, image
            });

            return res.status(200).json({
                success: true,
                msg: "your blog successfully created",
                blog: saveBlog
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "some internal error occured."
        })
    }

});


// Edit a blog///////
router.put('/update/:id', async (req, res) => {


    const update = await Blog.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        auther: req.body.auther,
        catoger: req.body.catogery,
        image: req.body.image,
        blogbody: req.body.blogbody
    })

    return res.status(200).json({
        success: true,
        msg: "blog successfully Updated",
        updatedblog: update
    })



})


// delete user
router.delete('/deleteblog/:id', async (req, res) => {
    const id = req.params.id;
    const deleteblog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        msg: "your blog succesfully deleted."
    })
})


// Search api by  catogery
router.get('/search/:key', async (req, res) => {
    let data = await Blog.find({
        "$or": [
            {
                "catogery": { $regex: req.params.key }
            }
        ]
    });
    if (data) {
        res.status(200).json({
            success: true,
            msg: "your search blog is found",
            blog: data
        })
    } else {
        res.status(200).json({
            success: false,
            msg: "no blog is found",
            blog: data
        })
    }


})
module.exports = router;