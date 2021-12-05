var num = ["1", "2", "3", "4", "5", "6"];
// оголошую масив
function game() {
    var player_1 = document.getElementById("player_1");
    var player_2 = document.getElementById("player_2");
    var result = document.getElementById("result");
    // оголошую змінні гравців та результат

    var random1 = Math.round(Math.random() * 5);
    var random2 = Math.round(Math.random() * 5);
    // рандомний генератор чисел

    if (random1 > random2) {
        result.innerHTML = "Гравець 1 переміг";
        // якщо перше згенероване число більше, то перший гравець переміг
    } else if (random1 < random2) {
        result.innerHTML = "Гравець 2 переміг";
        // якщо друге згенероване число більше, то другий гравець переміг
    } else result.innerHTML = "Нічія";
    // якщо згенеровані числа однакові, то нічія
    player_1.innerHTML = '<p>Гравець 1</p><img src="' + num[random1] + '.jpg">';
    player_2.innerHTML = '<p>Гравець 2</p><img src="' + num[random2] + '.jpg">';
    // рандомний підбір фото 
}