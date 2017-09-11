// Change as needed
var invalidText = "Beats me...";

// Must be all caps
var dictionary = {
      "AP": "Accounts Payable",
      "API": "Application Programming Interface",
      "B2B": "Business to Business",
      "B2C": "Business to Consumer",
      "BOD": "Board of Directors",
      "BR": "Bounce Rate",
      "CAC": "Customer Acquisition Cost",
      "CPA": "Cost per Acquisition",
      "CPC": "Cost per Click",
      "CTR": "Click-through Rate",
      "DNS": "Domain Name Server",
      "DRY": "Don't Repeat Yourself",
      "EOD": "End of Day",
      "FIFO": "First In First Out",
      "GA": "Google Analytics",
      "KISS": "Keep it Simple Stupid",
      "SAAS": "Software as a Service"
    }


// Do not edit below this line.
var abbrTextBox     = document.getElementById('abbreviation'),
    answer          = document.getElementById('answer');

function addClassName(dom, customClass) {
    if (dom.classList) {
        dom.classList.add(customClass);
    } else {
        dom.className += ' ' + customClass;
    }
}

function removeClassName(dom, customClass) {
    if (dom.classList) {
      dom.classList.remove(customClass);
    }
}

function checkKey(abbreviation) {
    if (dictionary.hasOwnProperty(abbreviation)) {
        addClassName(answer, "valid");
        return dictionary[abbreviation];
    } else {
        removeClassName(answer, "valid");
        return invalidText;
    }
}

function querySubmitted() {
    var abbreviation    = abbrTextBox.value.toUpperCase();

    answer.innerHTML = checkKey(abbreviation);
}

