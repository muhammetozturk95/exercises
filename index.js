import axios from "axios";

export default async function getData(number) {
    const {data: getUser} = await axios("https://jsonplaceholder.typicode.com/users/"+ number); 
    const {data: getPost} = await axios("https://jsonplaceholder.typicode.com/comments?id="+ number);

    getUser.posts = getPost

    return getUser;

    
   
};

