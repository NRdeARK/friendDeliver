import React, {useEffect} from 'react'
import Ticket from '../components/tickets'

function Index() {
  let content;
  let data;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5287/api/Post?` + new URLSearchParams({searchString: 'recieving'})
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        data = await response.body;
        console.log(data);

      } catch(err) {

      } finally {
      }  
    }
    getData()
  }, [])

  if (data === null) {
    content = <div>Yeah</div>;
  } else {
    /*content = data.map(t =>
      <Ticket name= {t.username} storename={t.storename} amount={t.amount} date= {t.date}></Ticket>
    );*/
  }
  return (
    <div>Index
      {content}
    </div>
  )
}

export default Index