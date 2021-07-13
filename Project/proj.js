let cards=[
    {
        image : "https://www.teahub.io/photos/full/242-2423567_tom-and-jerry-s7-edge-wallpaper-tom-and.jpg",
        value : 1,
        status : "closed"
    },
    { 
        image : "https://www.teahub.io/photos/full/242-2423567_tom-and-jerry-s7-edge-wallpaper-tom-and.jpg",
        value : 1,
        status : "closed"
    },
    {
        image : "https://i.pinimg.com/474x/bb/c9/fb/bbc9fb6a82281f5fb428f77ac8714047--oggy-nickelodeon.jpg",
        value : 2,
        status : "closed"
    },
    {
       image : "https://i.pinimg.com/474x/bb/c9/fb/bbc9fb6a82281f5fb428f77ac8714047--oggy-nickelodeon.jpg",
       value : 2,
       status : "closed"
    },     
    {
        image : "https://i.pinimg.com/originals/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg",
        value:3,
        status : "closed"
    },
    {    
        image :"https://i.pinimg.com/originals/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg",
        value : 3,
        status : "closed"
    },
    {    
        image : "https://www.kibrispdr.org/data/tema-doraemon-for-android-38.jpg",
        value : 4,
        status : "closed"
    },
    {    
        image : "https://www.kibrispdr.org/data/tema-doraemon-for-android-38.jpg",
        value : 4,
        status : "closed"
    },    
    {  
        image : "https://i.pinimg.com/originals/61/df/ce/61dfce6c6c88a5761affe928e1dc9541.jpg",
        value : 5,
        status : "closed"
    },
    {
        image : "https://i.pinimg.com/originals/61/df/ce/61dfce6c6c88a5761affe928e1dc9541.jpg",
        value : 5,
        status : "closed"    
    }

]

let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}
let cardsCopy=cards;


function displayCards(data){
    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
              <div class="overlay ${card.status}" onclick="openCard(${index})">
              </div>
            </div>
			
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);  


let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
 cards[index].status="opened";
 if(cardCount===1){
     val1=cards[index].value;
     cardCount++; 
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            // reset after one guess 
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
           
            alert("Game Over");
            location.reload();
    
        }
    }
displayCards(cards);
}