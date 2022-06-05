const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
app = express();
mongoose.connect('mongodb://localhost/blog_demo_2', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongodb');
    app.listen(3001);
});


app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/create',(req,res)=>{
    let blog = new Blog(req.body);
    blog.save((err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/blogs');
        }
    });
});


app.get('/createBlog',(req,res)=>{
    res.render('createBlog');
})

app.get('/blogs',(req,res)=>{
    Blog.find({},(err,blogs)=>{
        if(err){
            console.log(err);
        }else{
            res.render('blogs',{blogs:blogs});
        }
    });
})
app.get('/blogs/:id',(req,res)=>{
    Blog.findById(req.params.id,(err,blog)=>{
        if(err){
            console.log(err);
        }else{
            res.render('blog',{blog:blog});
        }
    });
}
);
app.use((req,res)=>{
    res.status(404).render('404');
})