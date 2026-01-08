
    // Saturday available teams (East Titans & Karan Teams not available)
    const saturdayTeams = [
      "Cricket Warriors",
      "East Titans",
      "Zodiac",
      "VIP XI",
      "Noida Super Gaints",
      "Indian Strikers",
      "SK XI",
      "Black Panthar"
    ];

    // Sunday: All 8 teams available
    const sundayTeams = [
      "Cricket Warriors",
      "East Titans",
      "Zodiac",
      "VIP XI",
      "Noida Super Gaints",
      "Indian Strikers",
      "SK XI"
    ];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function generateSaturday() {
      let shuffled = shuffle([...saturdayTeams]);
      let scheduleDiv = document.getElementById("schedule");
      scheduleDiv.innerHTML = "<div class='match-day'><h2>Saturday Matches</h2></div>";

      // 3 matches banane hain (6 teams)
      for (let i = 0; i < shuffled.length; i += 2) {
        let matchNum = i/2 + 1;
        let match = `
          <div class="match">
            <div class="teams">Match ${matchNum}: ${shuffled[i]} <span class="vs">vs</span> ${shuffled[i + 1]}</div>
          </div>`;
        scheduleDiv.innerHTML += match;
      }
    }

    function generateSunday() {
      let valid = false;
      let shuffled;

      // loop until Cricket Warriors vs Karan Teams nahi aata
      while (!valid) {
        shuffled = shuffle([...sundayTeams]);
        valid = true;

        for (let i = 0; i < shuffled.length; i += 2) {
          const t1 = shuffled[i];
          const t2 = shuffled[i+1];
          if (
            (t1 === "Cricket Warriors" && t2 === "Indian Strikers") ||
            (t1 === "Indian Strikers" && t2 === "Cricket Warriors")
          ) {
            valid = false; // invalid pairing
            break;
          }
        }
      }

      let scheduleDiv = document.getElementById("schedule");
      scheduleDiv.innerHTML = "<div class='match-day'><h2>Sunday Matches</h2></div>";

      // 4 matches banane hain (8 teams)
      for (let i = 0; i < shuffled.length; i += 2) {
        let matchNum = i/2 + 1;
        let match = `
          <div class="match">
            <div class="teams">Match ${matchNum}: ${shuffled[i]} <span class="vs">vs</span> ${shuffled[i + 1]}</div>
          </div>`;
        scheduleDiv.innerHTML += match;
      }
    }
