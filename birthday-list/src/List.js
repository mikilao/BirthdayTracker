import React from 'react';

const List = () => {
  return (
    <>
      {person.map((friend) => {
          const{age, id, name, image} = friend;
          return <article key={id} className="friend">
              <image src={image} alt={name}/>
              <div>
                  <h4> {name}</h4>
                  <p>{age}</p>

              </div>
          </article>
      })}
    </>
  );
};

export default List;