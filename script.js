
let admin = 'url';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(admin);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);

        json.games.forEach(game => {
            const element = document.createElement('div');
            element.classList.add('game_button');
            element.innerHTML = game.name;
            if (game.priority) {
                element.classList.add('game_button-active');
            }
            element.addEventListener('click', () => {
                document.querySelector('.games').children.forEach(child => {
                    if (child.classList.contains('game_button-active')) {
                        child.classList.remove('game_button-active');
                    }
                })
                element.classList.add('game_button-active');
            });
            document.querySelector('.games').appendChild(element);
        });

      } catch (error) {
        console.error(error.message);
      }
});
