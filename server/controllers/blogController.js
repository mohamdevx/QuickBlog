import fs from 'fs';
import imageKit from '../configs/imageKit';

export const  addblog=async(req,res)=>{
    try {
        const {title,subTitle,description,category,isPublished}=JSON.parse
        (req.body.blog);
        const imageFile=req.imageFile

        //chaekc if all fields are presetn
        if(!title || !description || !category || !imageFile){
            return res.json({success:false,message:"Please fill all the fields"});
        }

        const fileBuffer=fs.readFileSync(imageFile.path);

        //upload image to imagekit
        const response=await imageKit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        });


//opitimize image url
const optimizedImageUrl = imageKit.url({
    path:response.filePath,
    transformation: [
        
            {quality:'auto'},
        
        {format:'webp'},
        {width:'1280'}

    ]
});

const image=optimizedImageUrl

await Blog.create({title,subTitle,description,category,image,
    isPublished});

    res.json({success:true,message:"Blog added successfully"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }

}