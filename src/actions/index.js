const url = "http://localhost:8900";

export function getFood(props){
    const output = fetch(`${url}/products/${props}`, {method:'GET'})
    .then(response => response.json())
    console.log(":::::",output);
    return{
        type:"GET_FOOD",
        payload: output
    }
}

