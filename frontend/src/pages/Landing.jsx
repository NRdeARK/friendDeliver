import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Ticket from '../components/tickets'

function Index() {
  let content;
  let data;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5287/api/Post/receiving`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        data = await response.json();
        setPosts(data)

      } catch(err) {

      } finally {
      }  
    }
    getData()
  }, [])

  if (data) {
    content = <div>Yeah</div>;
  } else {
    console.log(posts);
    content = posts &&posts.map(t => 
      <div key={t.timeCreated}>
        <Ticket name= {t.username} storename={t.storename} amount={t.amount} date= {t.date}></Ticket>
      </div>
    );
  }
  return (
    <div>Index</div>
  )
}

export default Index