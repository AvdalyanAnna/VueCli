import axios from "axios";

export default function cbrXmlDailyRu(res) {
    axios.get('https://www.cbr-xml-daily.ru/latest.js')
        .then(response => {
            let latest = response.data.rates;
                for (var item in res) {
                    res[item].Trend =  res[item].Value - res[item].Previous
                    res[item].Now =  latest[item]
                }


        })

    // for (var i in latest){
    //         console.log(latest[i])
    // }
    // res.forEach(item =>{
    //     console.log(item)
    //     // item.push({"trend":item.current -item.previous})
    // })
    // return res;
}