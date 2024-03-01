let sonidos = ['alerta', 'ba-dum-ts', 'cuack', 'fatality', 'hongo-bross']

sonidos.forEach(sonido => {
    let btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sonido

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sonido).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sonidos.forEach(sonido => {
        let song = document.getElementById(sonido)

        song.pause()
        song.currentTime = 0;
    })
}