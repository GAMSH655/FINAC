const nextBTn = document.querySelector(".next");
const prevBTn = document.querySelector(".prev");
const plentyTExt = document.querySelector(".reText");
const  customerPhoto = document.querySelector("#customerImg");

const customerReviewArray =[
    {
      customerTestimonial:"Transferring money used to be such a hassle until I found this fintech platform. Now, it's a seamless experience every time.The interface is so user-friendly, and I love how quickly my transactions go through. Plus, knowing that my money is secure gives me peace of mind",
      customerAvatar: "./Assets/Avatar (1).png"
    } ,
    {
      customerTestimonial:"Transferring money used to be such a hassle until I found this fintech platform. Now, it's a seamless experience every time.The interface is so user-friendly, and I love how quickly my transactions go through. Plus, knowing that my money is secure gives me peace of mind",
      customerAvatar: "./Assets/Avatar (2).png"
    },
    {
      customerTestimonial:"Transferring money used to be such a hassle until I found this fintech platform. Now, it's a seamless experience every time.The interface is so user-friendly, and I love how quickly my transactions go through. Plus, knowing that my money is secure gives me peace of mind",
      customerAvatar: "./Assets/Avatar (2).png"
    },
    {
      customerTestimonial:"Transferring money used to be such a hassle until I found this fintech platform. Now, it's a seamless experience every time.The interface is so user-friendly, and I love how quickly my transactions go through. Plus, knowing that my money is secure gives me peace of mind",
      customerAvatar: "./Assets/Avatar.png"
    }
];

let currentReview = 0;
 
    if (currentReview >= customerReviewArray.length-1){
        currentReview = 0;
        plentyTExt.innerHTML = customerReviewArray[0];
        customerPhoto.src = customerReviewArray[0];
    }
    
      currentReview ++;
      plentyTExt.innerHTML = customerReviewArray.customerTestimonial;
      customerPhoto.src = customerReviewArray.customerAvatar;

      nextBTn.addEventListener("click" , function(){
        if (i=0; i<=customerReviewArray.length-1; 1++ ) {

            currentReview = 0;
            plentyTExt.innerHTML = customerReviewArray[0];
            customerPhoto.src = customerReviewArray[0];
        } else {
          
        }

    })


 const accord1 = document.querySelectorAll(".accord1")

 accord1.forEach(acc=>{
  acc.addEventListener("click" ,()=>{
    acc.classList.toggle("active")
  })
 })
