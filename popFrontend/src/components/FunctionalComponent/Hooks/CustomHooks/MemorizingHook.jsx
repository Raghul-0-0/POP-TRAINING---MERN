import { useEffect,useState } from "react";
const useMemorize = (Key, Value) => {
    var [text, setText] = useState(() => {
        var jsonValue = localStorage.getItem(Key);
        if(jsonValue !== null){
            return jsonValue;
        }
    });
    use(() =>{
        localStorage.setItem(Key,Value)
    },[key,value])
    return [text,setText]
};

export default useMemorize;




