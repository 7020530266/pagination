


const ul =document.querySelector(".pagination")
const ul1 =document.querySelector(".list-unstyled")
const pagePerCount =10


const getContent =function(start,end){

    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")

.then((response)=>response.json())
.then((response)=>{
    const totalCount =response.length
    const pageCount = Math.floor(totalCount/pagePerCount)
    console.log(response)
   
    const sliceArray = response.slice(start,end)
    console.log(sliceArray)

    renderList(sliceArray);  //code for fetching and showing respctive data
    renderPage(pageCount); //code for pagination page numbers
      
    })
   }


   getContent(0,10);


   //to display data
     const renderList=function (postlist) { 
         ul1.innerHTML =""

         postlist.forEach((postItem) => {
             let h5=document.createElement("h5")
             h5.classList.add("mt-0")
             h5.classList.add("mb-1")
             h5.innerHTML=postItem.id
    
             let div1=document.createElement("div")
             div1.classList.add("media-body")
    
            let li=document.createElement("li")
            div1.classList.add("media")

            let Para1 =document.createElement("div")
            Para1.innerHTML=postItem.name

            let Para2 =document.createElement("div")
            Para2.innerHTML=postItem.email
            
             div1.appendChild(h5)
             div1.appendChild(Para1)
             div1.appendChild(Para2)
             li.appendChild(div1)
             ul1.appendChild(li)    
         });
        
     }

     //pagination
    const renderPage=(pageCount)=>{

        ul.innerHTML  =""     //to rest ul before start
        
      // previous button  
        let anchor1 =document.createElement("a")
        anchor1.classList.add("page-link")
        anchor1.setAttribute("href","#")
        anchor1.innerHTML = "Previous"     
        
        let li1= document.createElement("li")
        li1.classList.add("page-item")

        li1.appendChild(anchor1)
        ul.appendChild(li1)



     // for loop for pagination of numbers   
        for (let i=0;i<pageCount;i++){
        let anchor =document.createElement("a")
        anchor.classList.add("page-link")
        anchor.setAttribute("href","#")
        const count =i+1   //to start from 1 if we not add 1 then it will start from 0
        anchor.innerHTML = count  
        
        let li= document.createElement("li")
        li.classList.add("page-item")
        // li.setAttribute("data-num","i+1")

        li.addEventListener("click",(event)=>{
            
            const end =pagePerCount*count 
            const start=end-pagePerCount
              
              console.log(start,end)
              getContent(start,end);
        
        })
        
        li.appendChild(anchor)
        ul.appendChild(li)


         li1.addEventListener("click",(event)=>{
              
            //   const end =(pagePerCount*count) -10
            //   const start=(end-pagePerCount)
                
                console.log(start,end)
                getContent(start,end);
              })

       }

       // next button  
       let anchor2 =document.createElement("a")
       anchor2.classList.add("page-link")
       anchor2.setAttribute("href","#")
       anchor2.innerHTML = "Next"     
       
       let li2= document.createElement("li")
       li2.classList.add("page-item")

       li2.appendChild(anchor2)
       ul.appendChild(li2)
    }

 
