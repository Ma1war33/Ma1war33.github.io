async function main() {

    httpserver = 'https://danileliasov-d1888daffdc5.herokuapp.com'
    player_symbol = 'x'
    image = ''

    symbol_to_text = { 'x': 'Crosses', 'o': 'Noughts' }

    board_elem = document.getElementsByClassName('board')[0]
    squares = document.getElementsByClassName('square')
    maintext = document.getElementById("maintext")
    undertext = document.getElementById("undertext")
    playagain = document.getElementsByClassName('playagain')[0]

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', (e) => handle_square_hover(e))
        squares[i].addEventListener('mouseout', (e) => handle_square_out(e))
        squares[i].addEventListener('click', (e) => handle_square_click(e))
    }

    var game = {}
    game.board = ['', '', '', '', '', '', '', '', '']

    function drawBoard(board) {
        for (let i = 0; i < squares.length; i++) {
            if (board[i] == "x") {
                squares[i].style.backgroundImage = 'url(assets/cross.png)'
            }
            else if (board[i] == "o") {
                squares[i].style.backgroundImage = 'url(assets/naught.png)'
            }
        }
    }

    function handle_square_hover(e) {
        if (game.turn == player) {
            target = e.originalTarget
            if (game.board[target.classList[1].slice(-1) - 1] == '') {
                target.style.backgroundImage = image
            }
        }
    }
    function handle_square_out(e) {
        target = e.originalTarget
        if (game.board[target.classList[1].slice(-1) - 1] == '') {
            target.style.backgroundImage = ''
        }
    }

    async function handle_square_click(e) { // i.e. on move
        target = e.originalTarget
        if (game.board[target.classList[1].slice(-1) - 1] == '') {
            if (game.turn == player) {

                const rawResponse = await fetch(httpserver + `/tictactoe/move?p=${playerID}&g=${gameID}&s=${e.originalTarget.classList[1].substr(e.originalTarget.classList[1].length - 1)}`)
                var res = await rawResponse.json();

                if (res.res == "Move successful.") {
                    game = JSON.parse(res.game)
                    if (game.status == "draw") {
                        undertext.innerText = "Game is a draw."
                        playagain.style.display = "block"
                    } else if (game.status == "p1-win") {
                        undertext.innerText = `${symbol_to_text[game.p1_symbol]} win!`
                        playagain.style.display = "block"
                    } else if (game.status == "p2-win") {
                        undertext.innerText = `${symbol_to_text["xo".replace(game.p1_symbol, "")]} win!`
                        playagain.style.display = "block"
                    } else {
                        const rawResponse = await fetch(httpserver + `/tictactoe/game?p=${playerID}&g=${gameID}`)
                        game = await rawResponse.json();

                        drawBoard(game.board)

                        main_loop()
                    }
                }

            }
        }

    }

    try {
        const rawResponse = await fetch(httpserver + '/tictactoe/newgame')
        var newgame = await rawResponse.json();
        console.log(newgame)
    }
    catch (err) {
        alert('Cannot reach server.\n\n' + err)
    }

    var playerID = newgame.playerID
    var gameID = newgame.gameID
    var player = ""

    const rawResponse = await fetch(httpserver + `/tictactoe/matchmaking?p=${playerID}&g=${gameID}`)
    var game = await rawResponse.json();

    board_elem.style.display = 'block'

    console.log(game)

    if (game.player1 == playerID) { // if player is player1 or player2
        player = "player1"
    } else {
        player = "player2"
    }

    if (game.p1_symbol == "x") { // getting whether player is "x" or "o"
        if (player == "player1") {
            maintext.innerText = "You are crosses."
            player_symbol = "x"
            image = 'url(assets/cross.png)'
        } else {
            maintext.innerText = "You are noughts."
            player_symbol = "o"
            image = 'url(assets/naught.png)'
        }
    } else {
        if (player == "player1") {
            maintext.innerText = "You are noughts."
            player_symbol = "o"
            image = 'url(assets/naught.png)'
        } else {
            maintext.innerText = "You are crosses."
            player_symbol = "x"
            image = 'url(assets/cross.png)'
        }
    }

    async function main_loop() {
        if (game.status == "ongoing") {
            if (game.turn == player) { // your turn
                undertext.innerText = "It's your turn."
            }
            else { // not your turn
                undertext.innerText = "Waiting for other player."

                const rawResponse = await fetch(httpserver + `/tictactoe/game?p=${playerID}&g=${gameID}`)
                game = await rawResponse.json();

                console.log(game)
                drawBoard(game.board)

                main_loop()
            }
        } else if (game.status == "draw") {
            undertext.innerText = "Game is a draw."
            playagain.style.display = "block"
        } else if (game.status == "p1-win") {
            undertext.innerText = `${symbol_to_text[game.p1_symbol]} win!`
            playagain.style.display = "block"
        } else if (game.status == "p2-win") {
            undertext.innerText = `${symbol_to_text["xo".replace(game.p1_symbol, "")]} win!`
            playagain.style.display = "block"
        }

    }
    main_loop()
}
main()