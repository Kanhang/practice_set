import fetch from 'cross-fetch';
function soultion () {

    fetch('https://www.example.com/comments?count=10')
    .then(res =>{
        console.log(res.json())
        return res.json()})
}
solution();