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
 nextBTn.addEventListener("click" , function(){
    if (currentReview >= customerReviewArray.length-1){
        currentReview = 0;
        plentyTExt.innerHTML = customerReviewArray[0];
        customerPhoto.src = customerReviewArray[0];
        return;
    }
     currentReview++;
      plentyTExt.innerHTML = customerReviewArray.customerTestimonial;
      customerPhoto.src = customerReviewArray.customerAvatar
 })