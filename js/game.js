let game = {

    sprites: {
        background: undefined
    },


    start: function() {

        let canvas = document.getElementById('mycanvas');
        this.ctx = canvas.getContext('2d');
        this.sprites.background = new Image();
        this.sprites.background.src = "images/woman_pop.jpg";
        // this.sprites.background.
        this.run();

    },
    render: function() {
        this.ctx.drawImage(this.sprites.background, 0, 0);
    },
    run: function() {
        this.render();
        window.requestAnimationFrame(function() {
            game.run();
        });

    }

};


window.addEventListener('load', () => { game.start() });