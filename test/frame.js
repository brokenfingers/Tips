(function(global){
    
    // skiping 'new' word typing on creating new object everytime
    let Gloria = function(firstName, lastName, city){
        return new Gloria.init(firstName, lastName, city)
    }

    Gloria.prototype = {
        fullName: function() {
            return this.firstName+' '+this.lastName
        },
        checkCity: function() {
            if(city.indexOf(this.city) === -1) {
                throw 'nera tokio miesto'
            }
        },
        greeting: function() {
            return 'labas '+this.firstName
        }

    }

    let city = ['kaunas', 'vilnius']

    let animal = {
        dog: 'Brisius',
        cat: 'Murka'
    }

    //function constructor

    Gloria.init = function(firstName, lastName, city) {
        let here = this;
        here.firstName = firstName || '';
        here.lastName = lastName || '';
        here.city = city || '';
    }

    Gloria.init.prototype = Gloria.prototype

    // assigning from right to left
    global.Gloria = global.G = Gloria
}(window))