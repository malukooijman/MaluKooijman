document.addEventListener("DOMContentLoaded", function() {
    // Array of different specializations
    const specializations = [
      "UX Design",
      "Service Design",
      "UI Design",
      "UX Research",
      "Human Computer Interaction",
      "Interaction Design"
    ];
  
    // Get the elements
    const specializationText = document.getElementById("specialization-text");
    const dynamicText = document.getElementById("dynamic-text");
  
    // Function to change the text
    function changeSpecialization() {
      let index = 0;
      setInterval(() => {
        dynamicText.textContent = specializations[index];
        index = (index + 1) % specializations.length;
      }, 1000);
    }
  
    // Call the function to start changing the text
    changeSpecialization();
  });
  