fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => createTodoCards(data))
    .catch(err => console.error(err));

function createTodoCards(cards) {
    var numberOfCards = cards.length;
    var todoList = document.getElementById('todo-list');

    todoList.style.width = "60em";
    todoList.style.margin = "30px auto 40px";
    todoList.style.listStyle = "none";
    todoList.style.fontFamily = "Arial";
    todoList.style.fontSize = "1.4rem";
    todoList.style.display = "flex";
    todoList.style.flexFlow = "row wrap";
    todoList.style.justifyContent = "center";

    for (var index = 0; index < numberOfCards; index++) {

        var card = cards[index];
        var todoCard = createTodoCard(card);

        todoList.appendChild(todoCard);

    }
}

function createTodoCard(card) {
    var todoCard = document.createElement('li');
    var checked = "";

    todoCard.style.margin = "0 auto 20px";
    todoCard.style.padding = "20px 16px 40px";
    todoCard.style.width = "16em";
    todoCard.style.minHeight = "150px";
    todoCard.style.textAlign = "center";
    todoCard.style.backgroundColor = "#FEFEFE";
    todoCard.style.border = "2px solid #4c4c4c";
    todoCard.style.borderRadius = "4px";
    todoCard.style.boxShadow = "4px 4px 8px #4c4c4c";

    if (card.completed) {
        checked = "checked";
    }

    todoCard.innerHTML = (
        '<p>User: ' + card.userId + '</p>'
        + '<p>Task-ID: ' + card.id + '</p>'
        + '<p>' + card.title + '</p>'
        + '<label>Completed'
        + '<input style="margin-left: 20px" type="checkbox"' + checked + ' >'
        + '</label>'
    );

    return todoCard;
}