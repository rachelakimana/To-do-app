import Todolist from "./TodoList";

const RenderCard = (props) => {
  const arra = props.arrayItems;
  //     const captureIdToDelete = (id) =>{
  //         props.obtainId(id);
  //     }

  return (
    <>
      {arra.length === 0 ? (
        <h2>You have no todos yet !!</h2>
      ) : (
        arra.map((Item) => {
          return (
            <Todolist
              key={Item.id}
              id={Item.id}
              description={Item.description}
              name={Item.name}
            />
          );
        })
      )}
    </>
  );
};

export default RenderCard;
