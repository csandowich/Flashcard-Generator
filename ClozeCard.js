function Cloze(text, cloze, partial, fullText, brokenCloze){
  this.text = text;
  this.cloze = cloze;
  this.partial = partial;
  this.fullText = fullText;
  this.brokenCloze = brokenCloze;
}
var firstPresidentCloze = new FT(
    "George Washington was the first president of the United States.", "George Washington");
    console.log(firstPresidentCloze.cloze);
    var firstPresidentCloze = new P(
        "was the first president of the United States.");
console.log(firstPresidentCloze.partial);
var firstPresidentCloze = new C("George Washington");
console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeDelete("This doesn't work", "oops");
if (!brokenCloze.cloze){
  console.log(brokenCloze.);
}
//module.exports = ClozeCard;
