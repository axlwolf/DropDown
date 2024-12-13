export const CustomDropdown = (() => {
  /*
   * DOM refs
   *
   */
  const $dropdownContainer = document.querySelector(".dropdown-container");
  const $dropdownInput = document.querySelector(".dropdown-input");
  const $dropdownList = document.querySelector(".dropdown-list");
  const $dropdownItems = document.querySelectorAll(".dropdown-item");
  const $chevron = $dropdownContainer.querySelector(".fas"); // Assuming single chevron element

  let selectedOption; // Stores the currently selected item
  let dropdownInputValue = "Select an Item";

  const init = () => {
    $chevron.classList.add("fa-chevron-down"); // Initial chevron state
    setDropdownInputValue();
    eventHandlers();
  };

  const eventHandlers = () => {
    $dropdownInput.addEventListener("click", toggleDropdown);
    $dropdownItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        const element = event.target;
        if (element.classList.contains("dropdown-item")) {
          setSelectedOption(element);
          $dropdownList.classList.remove("show");
        }
      });
    });
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    $dropdownList.classList.toggle("show");
    $chevron.classList.toggle("fa-chevron-up");
    $chevron.classList.toggle("fa-chevron-down");
  };

  const setSelectedOption = (item) => {
    $dropdownItems.forEach((i) => {
      i.classList.remove("selected");
      const existingCheck = i.querySelector(".fa-check");
      if (existingCheck) {
        existingCheck.remove();
      }
    });

    item.classList.add("selected");
    selectedOption = item;

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fas", "fa-check");
    item.prepend(checkIcon);

    setDropdownInputValue(item.innerText);
  };

  const setDropdownInputValue = (value = dropdownInputValue) => {
    dropdownInputValue = value;
    $dropdownInput.value = value;
  };

  return {
    init,
  };
})();
