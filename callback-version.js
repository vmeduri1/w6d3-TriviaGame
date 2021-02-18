import { getClue } from "./promise-version";

 export function getClue(cb){
    const obj = new XMLHttpRequest();
    obj.addEventListener("readystatechange", ()=> {
        if(obj.readyState !== XMLHttpRequest.DONE){
            return;
        }
        if(!(obj.status >= 200 && obj.status <= 299)){
            return
        }else{
            let data = JSON.parse(obj.responseText)
            cb(data);
        }
    })
        obj.open("GET", "https://api.weather.gov/points/39.7456,-97.0892");
        obj.send();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=> {
        if (xhr.readyState !== XMLHttpRequest.DONE){
            return;
        }
        cb(xhr.status);
        let data2 = JSON.parse(obj.responseText)
            cb(null, clue);
    })
};
