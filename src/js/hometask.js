/*Написати анкету для опитування. У вас буде масив підготовлених питань
та `ul` на сторінці, куди будуть додаватись відповіді на питання.
Програма через prompt задавати запитання користувачу і,
отримавши відповідь, буде створювати `li` в який буде додавати `p`
з текстом питання та `strong` з відповіддю. Після цього цей `li`
буде додано до `ul` на сторінці.

Питань має бути від 5.
Бажано це гарно оформити.
*/

var questions = ["Your name?", "Your family name?", "Your age?", "Your country?", "Your city?"];

function getAnswers(askArray) {
    var answers = [];

    for (count = 0; count < askArray.length; count++) {
        answers.push(prompt(askArray[count]));

        var newLi = document.createElement("li");
        document.getElementById("list").appendChild(newLi);
        newLi.id = "item" + count;
        newLi.className = "quest__item";

        var newP = document.createElement("p");
        document.getElementById("item" + count).appendChild(newP);
        newP.textContent = askArray[count];
        newP.className = "quest__text";

        var newStr = document.createElement("strong");
        document.getElementById("item" + count).appendChild(newStr);
        newStr.textContent = answers[count];
        newStr.className = "quest__text--strong";
    }

    return answers;
}

getAnswers(questions);