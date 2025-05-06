import BookModel from "../model/library.model.js";


const addBook = async(req,res)=>{

   try {
      const { title, author, genre, description, year , cover } = req.body;
      console.log("check" , title,author,genre,description,year,cover)

      if(!title || !author || !genre || !description || !year || !cover){
         return res.status(400).json({
            message : "Please Fill All Fields..."
         })

      }

         const newBook = await BookModel.create({
            title,
            author,
            genre,
            description,
            year,
            cover,
         })

         console.log(newBook)
         return res.status(201).json({
            message : "Book Added Successfully.....",
            newBook
         })

   } catch (error) {

      // console.log(error)

      return res.status(500).json({
         message:"Server Error..."
      })
      
   }
}




const getBook = async(req,res)=>{
try {
   const books = await BookModel.find()
   console.log(books)
   return res.status(200).json({
      books
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Can Not Fetch Data Please Try Again",
    });
  }

}



export {addBook, getBook}