document.addEventListener("DOMContentLoaded", function () {
    const nicknameInput = document.getElementById("nickname");
    const nicknameButton = document.getElementById("nickname-btn");
    const errorMessage = document.getElementById("error-message");
    const ageQuestionPage = document.getElementById("age-question");
    const messagesPage = document.getElementById("messages");
    const messageContainer = document.getElementById("message-container");
  
    // Correct nickname
    const correctNickname = "Oduka";
  
    // Display the first page
    document.getElementById("nickname-section").style.display = "flex";
  
    // First page logic
    nicknameButton.onclick = function () {
      if (nicknameInput.value.trim().toLowerCase() === correctNickname.toLowerCase()) {
        document.getElementById("nickname-section").classList.add("hidden");
        ageQuestionPage.classList.remove("hidden");
        ageQuestionPage.style.display = "flex";
      } else {
        errorMessage.innerText = "Wrong nickname, please try again.";
      }
    };
  
    // Second page logic
    document.querySelectorAll(".age-btn").forEach((button) => {
      button.onclick = function () {
        if (this.textContent.trim() === "26") {
          ageQuestionPage.classList.add("hidden");
          messagesPage.classList.remove("hidden");
          messagesPage.style.display = "flex";
          displayMessages();
        } else {
          alert("Incorrect answer, please try again!");
        }
      };
    });
  
    // Display random messages
    function displayMessages() {
        const messages = [
          "Happy Birthday! You're an amazing brother!",
          "Wishing you all the happiness in the world!",
          "Cheers to you and your adventures to come!",
          "May this year bring you closer to your dreams!",
          "You make our lives better just by being you!",
        ];
      
        // Predefined positions (grid-based layout)
        const positions = [
          { top: "10%", left: "15%" },
          { top: "10%", left: "60%" },
          { top: "50%", left: "20%" },
          { top: "50%", left: "65%" },
          { top: "80%", left: "40%" },
        ];
      
        messages.forEach((msg, index) => {
          setTimeout(() => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("heart-message");
            messageDiv.innerText = msg;
      
            // Use predefined grid positions
            messageDiv.style.top = positions[index].top;
            messageDiv.style.left = positions[index].left;
      
            messageContainer.appendChild(messageDiv);
            messageDiv.style.display = "block"; // Show message
          }, index * 3000); // Show each message 5 seconds apart
        });
      }
    });