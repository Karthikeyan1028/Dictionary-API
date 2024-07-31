document.querySelector("button").addEventListener("click",foo);
async function foo(){
    try {
        var res = document.getElementById("Text").value;
        var data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${res}`);
        var data1 = await data.json();
        console.log(data1);
        var col= document.getElementById("cardDetails");
        col.innerHTML=`<div class="card-body">
  <h2 class="word">${data1[0].word}</h2>
  <h6 class="pronounce">${data1[0].phonetics[0].text}</h6>
  <div class="part-speech">${data1[0].meanings[0].partOfSpeech}</div>
  <div class="meaning">1.${data1[0].meanings[0].definitions[0].definition}</div>
  <div class="meaning">2.${data1[0].meanings[1].definitions[0].definition}</div>
  <div class="synonym">Synonyms:"${data1[0].meanings[0].synonyms}"</div>
  </div>`
        
    } catch (error) {
        console.log(error);
        col.innerHTML=`<div class="error">OOPS!SORRY,WORD NOT FOUND IN THE DIRECTORY</div>`;
    }
}