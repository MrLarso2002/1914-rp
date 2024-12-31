

const relativeTime = new RelativeTime(); 



let start_gamee = 1735776000*1000;
let start =			1735776000*1000;
let now = Date.now();
const monthRanges = {
    0: "October - December",
    3: "January - March",
    6: "April - June",
    9: "July - September",
    12: "October - December"
};

let starting_year = 1908;

document.addEventListener('DOMContentLoaded', async () => {
    if (now > start) {
        // real life days
        const days = Math.floor(((now - start) / 1000) / 86400);
        console.log("real life days elapsed:" + days);

        if (!days == 0) {
            let years = days / 4;
            console.log(years);
            if (days % 4 === 0) {
                console.log("e");
                years = years - 1;
            }
            const current_year = starting_year + years;
    
            // ingame years
            console.log(Math.floor(current_year))
            console.log("years elapsed:" + years)
    
    
            // months elapsed
            let months_elapsed = (years - Math.floor(years).toFixed(2)) * 12;
            
            let months_fix;
            switch (months_elapsed) {
                
                case 0:
                    months_fix = 9;
                    break;
                case 9:
                    months_fix = 6;
                    break;
                case 6:
                    months_fix = 3;
                    break;
                case 3:
                    months_fix = 0;
                    break;
            }
            console.log(months_fix);


            console.log(months_elapsed);
            const years_elapsed = Math.floor(years);
            console.log(years_elapsed);
            
            console.log(monthRanges[months_elapsed])
            
            document.getElementById('date').innerHTML = "Day " + days + ", " + monthRanges[months_elapsed] + " " + Math.floor(current_year);
            document.getElementById('years_elapsed').innerHTML = `${years_elapsed} ${years_elapsed === 1 ? "year" : "years"}`;
            document.getElementById('months_elapsed').innerHTML = `${months_fix} ${months_fix === 1 ? "month" : "months"}`
        } else {
            document.getElementById('date').innerHTML = "Day 0, purgatory";
        }

      } else {
        console.log('Not yet started');
        document.getElementById('date').innerHTML = "The game hasn't begun yet";
        document.getElementById('subheader').innerHTML ='';
        document.getElementById('subheader').textContent = 'The game will approximately begin ';
        const mdiv = document.createElement('span');
        mdiv.classList.add('text_subhighlight')
        
        document.getElementById('subheader').appendChild(mdiv);
        mdiv.innerHTML = relativeTime.from(new Date(start));
      }
});


