/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  // your solution goes here
  text = String(text);
  let letter1st = text[0];
  let posPointInText = text.lastIndexOf(".");
  //let letterLast = text[text.len - 1];
  if (text.endsWith("."))
    text = letter1st.toUpperCase() + text.slice(1);
  else 
    text = letter1st.toUpperCase() + text.slice(1) + ".";
  return text;
}
