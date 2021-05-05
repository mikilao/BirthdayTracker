import React from 'react';

const List = ({person}) => {
  return (
    <>
      {person.map((friend) => {
          const{age, id, name, image} = friend;
          return <article key={id} className="friend">
              <img src={image} alt={name}/>
              <div className="info">
                  <h4> {name}</h4>
                  <p>{age}</p>
                  <a href="https://www.amazon.com">Find a gift</a>
                    <span />
              </div>
          </article>
      })}
    </>
  );
};

export default List;