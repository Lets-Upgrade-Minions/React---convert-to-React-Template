import React from 'react' 
import Card from './Card'

const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <Card 
            cardTitle="Card title 1"
            cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            btnText="Button 1"
          />
          <Card 
            cardTitle="Card title 2"
            cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            btnText="Button 2"
          />
          <Card 
           cardTitle="Card title 3"
           cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
           btnText="Button 3"
          />
        </div>
      </div>
    </section>
)
export default CardSection