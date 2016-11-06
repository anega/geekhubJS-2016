function Tamagochi(animalKind, name, age, sex, color, weight) {
    this.animalKind = animalKind || 'cat';
    this.name = name || 'tom';
    this.age = age || 12;
    this.sex = sex || 'male';
    this.color = color || 'red';
    this.weight = weight || 11;
    this.hungry = function () {
        if (this.weight < 10) return 'Give me some food! I\'m hungry';
    };
    this.walk = function () {
        this.weight -= (this.weight / 5);
    };
    this.sleep = function () {
        var nowHours = new Date().getHours();
        if (nowHours > 21) return 'I want to sleep.';
    };
    this.gladToSee = function (name) {
        alert('Hello, my master, ' + name + '!');
    };
    this.colorChange = function (season) {
        if (this.animalKind == 'rabbit' && season == 'winter' && this.color != 'white')
            this.color = 'white';
    };
    this.die = function () {
        var giveFood = confirm('');
        var giveDrink = confirm('');
        var takeNap = confirm('');

        if (giveFood || giveDrink || takeNap) {
            return 'I am happy! :)';
        } else {
            return 'Its time to die! Good bye!';
        }
    };
}