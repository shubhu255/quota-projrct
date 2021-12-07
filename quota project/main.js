const quotes = [

    {
        quotes:
            " Life should be great rather than long.",
        author: "DR B.R AMBEDKAR"
    },
    {
        quotes:
            " Life loses half its interest if there is no struggle — if there are no risks to be taken.",

   author: "Netaji Subhash Chandra Bose"
    },

    {
        quotes:
            " We will face the bullets of the enemies; we are free and will remain free",

  author: "Chandrasekhar Azad"

    },
    {
        quotes:
            " Even if I died in the service of the nation, I would be proud of it. Every drop of my blood… will contribute to the growth of this nation and to make it strong and dynamic.",
          author: "indira gandhi" 
       },
       
 {
     quotes:
     " A war based on Satyagraha is always of two kinds. One is the war we wage against injustice and the other we fight against our own weaknesses. ",
     author: "Sardar Vallabhbhai Patel"
 
    },
    {
        quotes:
        "first they ignore you, then they laugh at you, then they fight you, then you win.",

        author: "Mahatma Gandhi ji"
    },

    {
        quotes:
        "A war based on Satyagraha is always of two kinds. One is the war we wage against injustice and the other we fight against our own weaknesses.",

        author: " Sardar Vallabhbhai Patel"
    },
    {
        quotes:
        "Where the mind is led forward by thee into ever-widening thought and action-Into that heaven of freedom, my father, let my country awake.",

        author: "Rabindranath Tagore"
    }

];


const btn = document.querySelector(' .generate');

btn.addEventListener('click' , () =>{

let random = Math.floor(Math.random()  * quotes.length);
// console.log(random);


document.querySelector('.quotes').innerText = quotes[random].quotes;
document.querySelector('.author').innerText = quotes[random].author;




});


