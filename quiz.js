document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const resultsContainer = document.getElementById("results");
  
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let totalScore = 0;
      const maxScore = 5;
      let detailedFeedback = "";
  
      // Q1 - Purpose of Service Worker
      const answerQ1 = quizForm.q1.value;
      if (answerQ1 === "b") {
        totalScore++;
        detailedFeedback += "<p class='correct'>Q1: Correct</p>";
      } else {
        detailedFeedback += "<p class='incorrect'>Q1: Incorrect (Correct answer: Handling background tasks and offline caching)</p>";
      }
  
      // Q2 - File for app config
      const answerQ2 = quizForm.q2.value;
      if (answerQ2 === "c") {
        totalScore++;
        detailedFeedback += "<p class='correct'>Q2: Correct</p>";
      } else {
        detailedFeedback += "<p class='incorrect'>Q2: Incorrect (Correct answer: manifest.json)</p>";
      }
  
      // Q3 - Responsive design
      const answerQ3 = quizForm.q3.value;
      if (answerQ3 === "b") {
        totalScore++;
        detailedFeedback += "<p class='correct'>Q3: Correct</p>";
      } else {
        detailedFeedback += "<p class='incorrect'>Q3: Incorrect (Correct answer: It ensures usability across devices)</p>";
      }
  
      // Q4 - Fill-in-the-blank
      const answerQ4 = quizForm.q4.value.trim().toLowerCase();
      if (answerQ4 === "service worker" || answerQ4 === "serviceworker") {
        totalScore++;
        detailedFeedback += "<p class='correct'>Q4: Correct</p>";
      } else {
        detailedFeedback += "<p class='incorrect'>Q4: Incorrect (Correct answer: Service Worker)</p>";
      }
  
      // Q5 - Multiple answers
      const selectedFeaturesQ5 = Array.from(quizForm.q5)
        .filter((input) => input.checked)
        .map((input) => input.value);
      const correctFeaturesQ5 = ["b", "c", "d"];
      const isCorrectQ5 = correctFeaturesQ5.every((val) => selectedFeaturesQ5.includes(val)) &&
                          selectedFeaturesQ5.length === correctFeaturesQ5.length;
  
      if (isCorrectQ5) {
        totalScore++;
        detailedFeedback += "<p class='correct'>Q5: Correct</p>";
      } else {
        detailedFeedback += "<p class='incorrect'>Q5: Incorrect (Correct answers: Works offline, Push notifications, Responsive design)</p>";
      }
  
      const finalResult = totalScore >= 3 ? "PASS ✅" : "FAIL ❌";
  
      resultsContainer.innerHTML = `
        <h2>Quiz Results</h2>
        <p><strong>Score:</strong> ${totalScore} / ${maxScore}</p>
        <p><strong>Status:</strong> ${finalResult}</p>
        ${detailedFeedback}
      `;
      resultsContainer.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
  }
  